const express = require('express');
const Anime = require('../models/Anime');
const { check, validationResult, checkSchema } = require('express-validator');
const Genres = require('../models/Genres');
const AnimeType = require('../models/AnimeType');
var moment = require('moment');
moment().format();

// simple shuffle function to shuffle anime array before passing to frontend
function shuffle(arr) {
    var j, x, index;
    for (index = arr.length - 1; index > 0; index--) {
        j = Math.floor(Math.random() * (index + 1));
        x = arr[index];
        arr[index] = arr[j];
        arr[j] = x;
    }
    return arr;
}

const router = express.Router();

// prevent POST requests that do not follow the schema format
const validation = [
    check('romaji_title')
        .isLength({ min: 3, max: 80 })
        .withMessage('Romaji title must be at least 3 characters.'),
    check('english_title')
        .isLength({ min: 3, max: 60 })
        .withMessage('English title must be at least 3 characters.'),
    check('type')
        .isString()
        .custom((value) => {

            if (AnimeType.indexOf(value) !== -1) {
                return true;
            }
            else {
                throw new Error('Anime must be a show, movie, or OVA.')
            }
        }),
    check('seasons')
        .isNumeric()
        .withMessage('0 for movies. Anything greater is for shows and OVAs.'),
    check('curr_episode')
        .isNumeric()
        .withMessage('Episodes must be numeric.'),
    check('description')
        .notEmpty()
        .withMessage('Description must not be null.'),
    check('image')
        .notEmpty()
        .isURL()
        .withMessage('Must be a url and not null.'),
    check('airDate')
        .notEmpty()
        .isDate()
        .withMessage('Date must be written as Year-Month-Day and not null.'),
    check('genre')
        .isArray()
        .custom((value) => {
            var count = 0;
            var set = new Set(value);

            if (value.length === set.size) {

                for (var i = 0; i < value.length; i++) {
                    for (var j = 0; j < Genres.length; j++) {

                        if (value[i] == Genres[j]) {
                            count++;
                        }
                    }
                }

                if (count == value.length) {
                    return true;
                }
                else {
                    throw new Error('Nonexistent genre input.');
                }
            }
            else {
                throw new Error('Duplicate values are present.');
            }
        }
        )
        .notEmpty()
        .withMessage('Input genre is not valid.'),
]

// create a new anime at the root URL
router.post('/', validation, (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).send({ errors: errors.array() })
    }

    const anime = new Anime({
        romaji_title: req.body.romaji_title,
        english_title: req.body.english_title,
        type: req.body.type,
        seasons: req.body.seasons,
        curr_episode: req.body.curr_episode,
        description: req.body.description,
        image: req.body.image,
        airDate: req.body.airDate,
        hasAired: req.body.hasAired,
        genre: req.body.genre
    });
    anime.save()
        .then(result => {
            res.send({
                message: 'Anime created successfully.',
                data: result
            })
        })
        .catch(err => console.log(err))
})

// /api/anime
// get all anime available in the database
router.get('/', (req, res) => {
    Anime.find()
        .then(anime => {
            res.send(anime)
        })
        .catch(err => console.log(err))
});

// get seasonal anime only
router.get('/seasonal', (req, res) => {
    var startDate = moment('2022-03-20').utcOffset('+0700').format("YYYY-MM-DDTHH:mm:ss.SSSZ");
    var endDate = moment('2022-05-21').utcOffset('+0700').format("YYYY-MM-DDTHH:mm:ss.SSSZ");

    Anime.find({ airDate: { $gte: startDate, $lte: endDate } })

        // Anime.find({ airDate: { $gte: new Date('2022-07-09T00:00:00Z'), $lte: endDate } })
        .then(anime => {
            res.send(anime)
        })
        .catch(err => console.group("Seasonal error."))
});

// get upcoming anime only
router.get('/upcoming', (req, res) => {
    var startDate = moment('2022-10-01').utcOffset('+0700').format("YYYY-MM-DDTHH:mm:ss.SSSZ");

    Anime.find().and({ airDate: { $gte: startDate } })

        // Anime.find({ airDate: { $gte: new Date('2022-07-09T00:00:00Z'), $lte: endDate } })
        .then(anime => {
            res.send(anime)
        })
        .catch(err => console.group("Upcoming error."))
});

// /api/anime/similar/genre
// get anime based on a similar genre
router.get('/similar/:bestGenre', (req, res) => {

    const bestGenre = req.params.bestGenre;

    Anime.find({ 'genre': bestGenre })
        .then(anime => {
            res.send(anime)
        })
        .catch(err => console.group(err + " "))
});

// /api/anime/genre/genre1/genre2
// get anime based on the two selected genres
router.get('/genre/:genre1/:genre2', (req, res) => {

    const genre1 = req.params.genre1;
    const genre2 = req.params.genre2;

    const recAnime = Anime
        .find()
        .or([
            { 'genre': genre1 },
            { 'genre': genre2 }
        ])

    var recs = shuffle(recAnime);

    recs
        .then(anime => {
            res.send(anime)
        })
        .catch(err => console.group(err))
});

// get anime based on its id
router.get('/:id', (req, res) => {
    const animeId = req.params.id;

    Anime.findById(animeId)
        .then(anime => {
            res.send(anime);
        })
        .catch(err => console.group(err))
})

// change anime info
// checks that new data added is still valid
router.put('/:id', validation, (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).send({ errors: errors.array() })
    }

    const animeId = req.params.id;

    Anime.findById(animeId)
        .then(anime => {
            anime.romaji_title = req.body.romaji_title;;
            anime.english_title = req.body.english_title;
            anime.seasons = req.body.seasons;
            anime.curr_episode = req.body.curr_episode;
            anime.description = req.body.description;
            anime.image = req.body.image;
            anime.airDate = req.body.airDate;
            anime.genre = req.body.genre;

            return anime.save();
        })
        .then(result => {
            // return anime's changed info as result
            res.send(result);
        })
        .catch(err => console.log(err))
})

// /api/anime/id
// delete an anime based on its id
router.delete('/:id', (req, res) => {
    const animeId = req.params.id;

    Anime.findByIdAndRemove(animeId)
        .then(result => {
            res.send(result);
        })
        .catch(err => console.log(err))
})

module.exports = router;