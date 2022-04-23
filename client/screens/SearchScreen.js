import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import SearchList from '../components/search/SearchList';
import { useDispatch } from 'react-redux';
import * as animeAction from 'animo/redux/actions/animeAction';



const SearchScreen = props => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(animeAction.fetchAnime());
    }, [dispatch]);

    return (
        <SafeAreaView style={{ flex: 1, paddingTop: -20 }} >
            <SearchList
                navigation={props.navigation}
            />
        </SafeAreaView>
    );
}

export default SearchScreen;