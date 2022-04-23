/*  
    FlatList that generates genre of selected anime.
    Genres are passed from AnimeInfo.js
*/

// imports
import React from 'react';
import {
    Text,
    FlatList,
    StyleSheet,
    View
} from 'react-native';


const GenreList = props => {
    return (
        <View style={styles.genreListContainer}>
            <FlatList
                horizontal
                scrollEnabled={false}
                data={props.genres}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) =>
                    // if there are or more than 4 genres, render genres with a smaller fontSize
                    props.genres.length >= 4 ?
                        <Text style={styles.genre2} > {item} </Text> :
                        <Text style={styles.genre} > {item} </Text>
                }
            />
        </View>
    )
}

// styles
const styles = StyleSheet.create({
    genreListContainer: {
        margin: '2%',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
    },
    genre: {
        textAlign: "center",
        fontSize: 16,
        fontWeight: '500',
    },
    genre2: {
        textAlign: "center",
        fontSize: 12,
        fontWeight: '500',
    },
});

export default GenreList;