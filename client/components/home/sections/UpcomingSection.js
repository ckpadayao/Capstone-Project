import React, { useEffect } from 'react';
import {
    View, Text,
    FlatList,
} from 'react-native';
import { styles } from 'animo/assets/styles/home';
import Card from 'animo/components/home/Card';
import { useDispatch, useSelector } from 'react-redux';
import * as animeAction from 'animo/redux/actions/animeAction';

const UpcomingSection = props => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(animeAction.fetchUpcomingAnime());
    }, [dispatch]);

    const selectUpcomingAnime = useSelector(
        state => state.anime.upcomingList
    );

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{props.title}</Text>
            </View>
            <FlatList
                horizontal
                data={selectUpcomingAnime}
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

export default UpcomingSection;