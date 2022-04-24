/*
    Test section for Home screen.
*/

// imports
import React, { useEffect } from 'react';
import {
    StyleSheet,
    View, Text,
    FlatList,
} from 'react-native';
import Card from 'animo/components/home/Card';
import { useDispatch, useSelector } from 'react-redux';
import * as animeAction from 'animo/redux/actions/animeAction';


const Section = props => {
    // dispatch action to fetch all anime 
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(animeAction.fetchAnime());
    }, [dispatch]);

    // select all anime then sort based on Math.random
    const selectAnime = useSelector(
        state => state.anime.animeList.sort(() => (Math.random() > 0.5) ? 1 : -1)
    );

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{props.title}</Text>
            </View>
            <FlatList
                horizontal
                data={selectAnime}
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

// styles
const styles = StyleSheet.create({
    container: {
        marginTop: 10,
    },

    title: {
        marginLeft: 5,
        fontFamily: 'Futura',
    },

    list: {
        marginTop: '4%',
        marginBottom: '-55%'
    }
});

export default Section;