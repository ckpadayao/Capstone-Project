/* 
    Anime Details Screen displays an anime's relevant information.
    Anime Details includes the following components:
        - AnimeInfo
        - RemoveFromListButton
        - AddtoListButton
        - SimilarList
*/

import React from 'react';
import {
    View,
    ScrollView,
    SafeAreaView,
} from 'react-native';
import SimilarList from 'animo/components/anime_details/SimilarList';
import AnimeInfo from 'animo/components/anime_details/AnimeInfo';
import AddtoListButton from '../components/anime_details/AddtoListButton';
import RemoveFromListButton from '../components/anime_details/RemoveFromListButton';

const AnimeDetailsScreen = props => {

    const { animeId, listId, routedFrom } = props.route.params;

    return (
        <View style={{ flex: 1 }}>
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView>
                    <AnimeInfo
                        id={animeId}
                    />

                    {routedFrom === 'SingleScreen' ?
                        <RemoveFromListButton
                            animeId={animeId}
                            listId={listId}
                            navigation={props.navigation}
                        />
                        : <AddtoListButton
                            animeId={animeId}
                            navigation={props.navigation}
                        />
                    }

                    <SimilarList
                        navigation={props.navigation}
                        id={animeId}
                    />

                </ScrollView>
            </SafeAreaView>
        </View>
    );
}

export default AnimeDetailsScreen;