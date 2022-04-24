/*
    Recommended section list on Home screen.
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


const ReccSection = props => {

    // select recommended anime from state
    const selectReccAnime = useSelector(
        state => state.anime.recList
    );
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{props.title}</Text>
            </View>
            <FlatList
                horizontal
                data={selectReccAnime}
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

export default ReccSection;