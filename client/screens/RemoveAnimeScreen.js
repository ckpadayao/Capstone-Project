import React from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    SafeAreaView,
    Button
} from 'react-native';
import SimilarList from 'animo/components/anime_details/SimilarList';
import AnimeInfo from 'animo/components/anime_details/AnimeInfo';
import RemoveFromListButton from '../components/anime_details/RemoveFromListButton';

const RemoveAnimeScreen = props => {
    const { listId } = props.route.params;
    const { animeId } = props.route.params;

    return (
        <View style={styles.container}>
            <SafeAreaView>
                <ScrollView>

                    <AnimeInfo
                        id={animeId}
                    />
                    <RemoveFromListButton
                        navigation={props.navigation}
                        id={animeId}
                        listId={listId}
                    />
                    <SimilarList
                        navigation={props.navigation}
                        id={animeId}
                    />


                </ScrollView>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },
});

export default RemoveAnimeScreen;