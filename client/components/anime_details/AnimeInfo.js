/*  
    Screen that contains all of an anime's information.
    Information includes:
        - anime's poster
        - English title 
        - anime's genres
        - anime's type
        - air date
        - description.
*/

// imports
import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    ImageBackground,
    Image,
} from 'react-native';
import { useSelector } from 'react-redux';
import GenreList from 'animo/components/anime_details/GenreList';


const AnimeInfo = props => {
    // anime's id is passed on via props from AnimeDetailsScreen.js
    // select anime from animeList based on id
    const selectAnime = useSelector(
        state => state.anime.animeList.find(anime => anime._id == props.id)
    );

    // set the anime's air date
    // if null, AnimeInfo won't display the date for upcoming anime
    // otherwise, we use the new Date to get the month, day, and year of the anime
    var airDate = null;
    if (selectAnime.hasAired) {
        airDate = new Date(selectAnime.airDate);
    }

    return (
        <View>
            {/* vertical image and background horizontal image */}
            <View>
                <ImageBackground
                    style={styles.imageContainer}
                    source={{ uri: selectAnime.image }}
                >
                    <Image
                        style={styles.image}
                        source={{ uri: selectAnime.image }}
                    />
                </ImageBackground>
            </View>
            <View style={styles.container}>
                {/* title */}
                <View style={styles.titleContainer}>
                    <Text style={styles.title}> {selectAnime.english_title}</Text>
                </View>
                {/* GenreList */}
                <GenreList
                    genres={selectAnime.genre}
                />
                {/* if anime's type is Show, then display title, air date, and current episodes */}
                {selectAnime.type == "Show" ?

                    <View style={styles.otherInfoContainer}>
                        <Text style={styles.otherInfoText}> {selectAnime.type} | </Text>
                        {/* check if anime has aired
                            if anime has aired, display air date
                        */}
                        {airDate != null ?
                            <Text style={styles.otherInfoText}>
                                Air Date: {airDate.toLocaleString('en-us', { month: 'long' })} {airDate.getDay() + 1}, {airDate.getFullYear()} |
                            </Text>
                            :
                            <View></View>
                        }
                        <Text style={styles.otherInfoText}> Current Episodes: {selectAnime.curr_episode}</Text>
                    </View> :
                    // otherwise, the anime is a Movie, so only display the title and air date
                    <View style={styles.otherInfoContainer}>
                        <Text style={styles.otherInfoTextMovie}> {selectAnime.type} | </Text>
                        {airDate != null ?
                            <Text style={styles.otherInfoText}>
                                Air Date: {airDate.toLocaleString('en-us', { month: 'long' })} {airDate.getDay() + 1}, {airDate.getFullYear()}
                            </Text>
                            :
                            <View></View>
                        }
                    </View>
                }
                {/* description */}
                <View style={styles.descContainer}>
                    <Text style={styles.desc}>{selectAnime.description}</Text>
                </View>
            </View>
            <View style={styles.container}>
            </View>
        </View >
    )
}

// stylesheet
const styles = StyleSheet.create({

    container: {
        flex: 1,
        marginVertical: 20
    },
    imageContainer: {
        marginLeft: -10,
        marginRight: -10,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 200,
        height: 260
    },
    image: {
        marginTop: 0,
        width: 180,
        height: 260,
        width: 200,
        height: 300,
        marginTop: 40,
    },

    titleContainer: {
        marginTop: '6%',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '-2%',
    },
    title: {
        textAlign: 'center',
        fontSize: 22,
        fontWeight: '400',
        fontFamily: "Futura"
    },
    descContainer: {
        marginHorizontal: 20,
        marginVertical: 10,
        flexDirection: 'row',
    },
    otherInfoContainer: {
        marginTop: 5,
        marginBottom: 5,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    otherInfoText: {
        fontSize: 10,
        fontWeight: '600',
    },
    otherInfoTextMovie: {
        fontSize: 10,
        fontWeight: '600',
    },
    label: {
        fontSize: 18
    },
    desc: {
        fontSize: 12,
        textAlign: 'center',
        flexShrink: 1
    },
});

export default AnimeInfo;