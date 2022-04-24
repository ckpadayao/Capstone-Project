/* 
    Get animeId from props then either pass the value on to AddtoList or CreateList.
    These values will be later used by both of those screens to add an anime.
*/

// imports
import React from 'react';
import {
    StyleSheet,
    View,
    Button,
} from 'react-native';


const AddAnimeScreen = props => {
    const { animeId } = props.route.params;

    return (
        <View>
            <View>
                <Button
                    title='Add to List'
                    onPress={() => {
                        props.navigation.navigate('AddtoList', { animeId: animeId })
                    }}
                />
                <Button
                    title='Create List'
                    onPress={() => {
                        props.navigation.navigate('CreateList', { animeId: animeId })
                    }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

});

export default AddAnimeScreen;