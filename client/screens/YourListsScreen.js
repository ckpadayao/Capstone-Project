/* 
    YourLists displays list of all watchlists a user has.
*/

// imports
import React from 'react';
import { View, } from 'react-native';
import Lists from 'animo/components/your_lists/Lists';

const YourListsScreen = props => {
    return (
        <View style={{ flex: 1 }}>
            <Lists
                navigation={props.navigation}
            />
        </View>
    );
}

export default YourListsScreen;