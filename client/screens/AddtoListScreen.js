import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList,
} from 'react-native';
import { useSelector } from 'react-redux';
import AddAnimetoList from 'animo/components/add_to_list/AddAnimetoList';

const AddtoListScreen = props => {
    const { animeId } = props.route.params;

    const selectAnimeById = useSelector(
        state => state.anime.animeList.find(anime => anime._id == animeId)
    );

    const selectLists = useSelector(state => state.anime.yourLists);

    return (
        <View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Add {selectAnimeById.english_title} to</Text>
            </View>
            <View>
                <AddAnimetoList
                    animeId={animeId}
                    navigation={props.navigation}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    textContainer: {
        marginHorizontal: 16,
        marginTop: 10,
        marginBottom: -6
    },
    text: {

    },

});

export default AddtoListScreen;