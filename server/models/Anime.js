// Schema of how an anime object is organized

const mongoose = require('mongoose');

const AnimeSchema = new mongoose.Schema({
    romaji_title: { type: String, required: true },
    english_title: { type: String, required: true },
    type: { type: String, required: true },
    seasons: { type: Number, required: true },
    curr_episode: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    airDate: { type: Date, required: false },
    hasAired: { type: Boolean, required: true, default: false },
    genre: [],

})

module.exports = mongoose.model('Anime', AnimeSchema);