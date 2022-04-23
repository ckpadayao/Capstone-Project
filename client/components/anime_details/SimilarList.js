/* 
    SimilarList shows anime similar to the current anime 
    displayed on AnimeDetailsScreen.js
    SimilarList bases similar anime on shared genres of two or more.

*/

// imports
import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList,
} from 'react-native';
import Card from 'animo/components/anime_details/Card';
import { useSelector } from 'react-redux';

const SimilarList = props => {
    // anime's id is passed via props.id
    // select chosen anime, then map it's genres to selectGenre
    // select similar anime based on selectGenre's output
    const selectAnime = useSelector(
        state => state.anime.animeList.find(anime => anime._id == props.id)
    );

    const selectGenre = selectAnime.genre.map(genres => genres.name)

    const selectAnimeByGenre = useSelector(
        state => state.anime.animeList.filter(anime => anime.genre.filter(item => selectGenre.includes(item.name)).length >= 2
            && anime._id != selectAnime._id)
    );

    return (
        <View style={styles.container}>
            {/* title
                fontSize based on length of anime's english title
            */}
            {selectAnime.english_title.length < 16 ?
                <Text style={styles.listTitle}> Similar to {selectAnime.english_title}</Text> :
                <Text style={styles.listTitle2}> Similar to {selectAnime.english_title}</Text>
            }
            {/* FlatList renders based on anime with similar genres */}
            <View style={styles.listContainer}>
                <FlatList
                    horizontal
                    maxToRenderPerBatch={3}
                    data={selectAnimeByGenre}
                    keyExtractor={item => item._id}
                    renderItem={({ item }) =>
                        <Card
                            navigation={props.navigation}
                            image={item.image}
                            title={item.english_title}
                            id={item._id}
                        />}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </View>
    )
}

// styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    listTitle: {
        fontSize: 14,
        fontWeight: '600',
        fontFamily: 'Futura',
        marginLeft: '1%',
        marginBottom: '0.5%',
    },
    listTitle2: {
        fontSize: 11,
        fontWeight: '600',
        fontFamily: 'Futura',
        marginLeft: '1%',
        marginBottom: '0.5%',
    },
    listContainer: {
        flex: 1,
    },
});


export default SimilarList;