import React from 'react';
import {
    View,
    FlatList,
} from 'react-native';
import { useSelector } from 'react-redux';
import ListCard from 'animo/components/your_lists/ListCard';

const Lists = props => {

    const selectYourLists = useSelector(state => state.anime.yourLists);
    return (
        <View style={{ flex: 1 }}>
            {/* Render yourLists only if it is not undefined 
            or length != 0 */}
            {selectYourLists || selectYourLists.length ?
                <FlatList
                    data={selectYourLists}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) =>
                        <ListCard
                            navigation={props.navigation}
                            title={item.title}
                            list={item.list}
                            id={item.id}
                        />
                    }
                />
                : <View></View>
            }

        </View>
    )
}

export default Lists;