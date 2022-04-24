/* 
    Settings contains the form to change recommendations
*/

import React from 'react';
import { View } from 'react-native';
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

export default SettingsScreen;