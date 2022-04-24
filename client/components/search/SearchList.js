/*
    SearchList filters Flatlist data by using useState().
    When a user types a string, anime with that string beneath
    the search bar will be displayed.
*/

// imports
import React, { useEffect, useState } from 'react';
import {
    View,
    FlatList,
    TextInput,
} from 'react-native';
import Card from 'animo/components/search/Card';
import { useSelector } from 'react-redux';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from 'animo/assets/styles/search.js';

const SearchList = props => {
    // select all anime, then sort randomly
    const selectAnime = useSelector(
        state => state.anime.animeList.sort(() => (Math.random() > 0.5) ? 1 : -1)
    );

    // useState
    const [filteredData, setfilteredData] = useState([]);
    const [masterData, setmasterData] = useState([]);
    const [search, setsearch] = useState('');

    // setData using selectAnime
    useEffect(() => {
        setfilteredData(selectAnime);
        setmasterData(selectAnime);
    }, [selectAnime])

    // function to filter through data displayed beneath search bar
    const searchFilter = (text) => {
        if (text) {
            const newData = masterData.filter((item) => {
                // if anime with string exists, set it to itemData
                const itemData = item.english_title ? (item.english_title.toUpperCase() || item.english_title.toLowerCase())
                    : ''.toUpperCase();
                const textData = text.toUpperCase();
                // if itemData's index > -1, then string exists
                return itemData.indexOf(textData) > -1;
            });
            setfilteredData(newData);
            setsearch(text);
        }
        else {
            setfilteredData(masterData);
            setsearch(text);
        }
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={styles.listContainer}>
                <FlatList
                    ListHeaderComponent={
                        <View style={styles.searchBar}>
                            <MaterialIcons
                                name={'search'}
                                size={24}
                                style={styles.icon}
                            />
                            <TextInput
                                style={styles.textInput}
                                placeholder="Search Anime"
                                onChangeText={(text) => searchFilter(text)}
                            />
                        </View>
                    }
                    style={{ marginBottom: 30 }}
                    showsHorizontalScrollIndicator={false}
                    numColumns={3}
                    initialNumToRender={12}
                    data={filteredData}
                    keyExtractor={item => item._id}
                    renderItem={({ item }) =>
                        <Card
                            navigation={props.navigation}
                            image={item.image}
                            title={item.english_title}
                            id={item._id}
                        />
                    }
                />
            </View>
        </View>
    );
}

export default SearchList;