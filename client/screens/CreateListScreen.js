import React from 'react';
import { View, } from 'react-native';
import CreateList from 'animo/components/create_list/CreateList';

const CreateListScreen = props => {
    const { animeId } = props.route.params;
    return (
        <View>
            <CreateList
                navigation={props.navigation}
                id={animeId}
            />
        </View>
    )
}

export default CreateListScreen;