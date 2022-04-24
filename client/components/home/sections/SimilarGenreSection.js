/*
    More of What you Love section list displayed in Home screen.
*/

// imports
import React from 'react';
import {
    View, Text,
    FlatList,
} from 'react-native';
import { styles } from 'animo/assets/styles/home';
import Card from 'animo/components/home/Card';
import { useSelector } from 'react-redux';

const SimilarGenreSection = props => {
    // select anime for more of what you love from similarGenreList
    const selectSimilarGenreAnime = useSelector(
        state => state.anime.similarGenreList
    );

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>More of What you Love</Text>
            </View>
            <FlatList
                horizontal
                data={selectSimilarGenreAnime}
                initialNumToRender={3}
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
    )
}

export default SimilarGenreSection;