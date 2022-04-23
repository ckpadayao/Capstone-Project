import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
} from 'react-native';
import { useDispatch } from 'react-redux';
import * as animeAction from '../redux/actions/animeAction';

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