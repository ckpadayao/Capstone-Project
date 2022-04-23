import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ChangeReccForm from '../components/settings/ChangeReccForm';

const SettingsScreen = props => {
    return (
        <View>
            <ChangeReccForm
                navigation={props.navigation}
            />
        </View>
    );
}

const styles = StyleSheet.create({

});

export default SettingsScreen;