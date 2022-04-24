/* 
    Search screen contains the list that allows a user to search for an anime.
*/

import React from 'react';
import { SafeAreaView } from 'react-native';
import SearchList from '../components/search/SearchList';



const SearchScreen = props => {
    return (
        <SafeAreaView style={{ flex: 1, paddingTop: -20 }} >
            <SearchList
                navigation={props.navigation}
            />
        </SafeAreaView>
    );
}

export default SearchScreen;