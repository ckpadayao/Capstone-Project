/*
    Displays list of watchlists for user to add anime to.
*/

// imports
import React from 'react';
import {
    View,
    FlatList,
} from 'react-native';
import ListCard from 'animo/components/add_to_list/ListCard';
import { useSelector } from 'react-redux';

const AddAnimetoList = props => {
    // select all watchlists from state
    const selectYourLists = useSelector(state => state.anime.yourLists);
    return (
        <View>
            <FlatList
                data={selectYourLists}
                keyExtractor={item => item.id}
                renderItem={({ item }) =>
                    <ListCard
                        navigation={props.navigation}
                        title={item.title}
                        list={item.list}
                        listId={item.id}
                        animeId={props.animeId}
                    />
                }
            />
        </View>
    )
}

export default AddAnimetoList;