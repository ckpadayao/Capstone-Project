/* 
    Home screen that displays 4 FlatList component.s
*/

// imports
import React from 'react';
import {
    View,
    SafeAreaView,
    ScrollView,
    Text,
} from 'react-native';
import { styles } from 'animo/assets/styles/home';
import { StatusBar } from 'expo-status-bar';
import { MaterialIcons } from '@expo/vector-icons';
import ReccSection from '../components/home/sections/ReccSection';
import SeasonalSection from '../components/home/sections/SeasonalSection';
import UpcomingSection from '../components/home/sections/UpcomingSection';
import SimilarGenreSection from '../components/home/sections/SimilarGenreSection';


const HomeScreen = props => {
    // get the current time
    const time = new Date();
    const timeString = new Date().toLocaleTimeString();

    return (
        <View style={{ flex: 1 }}>
            <StatusBar style="light" />
            <SafeAreaView>
                <ScrollView
                    style={styles.scrollContainer}
                    height={'100%'}
                >
                    {/* displays "Good morning/afternoon/evening" based on the time */}
                    {timeString.slice(-2) == "AM" ?
                        <View style={styles.greetingContainer}>
                            <Text style={styles.greetings}>Good morning</Text>
                        </View> :
                        timeString.slice(-2) == "PM" && (time.getHours() >= 12 || time.getHours() <= 4) ?
                            <View style={styles.greetingContainer}>
                                <Text style={styles.greetings}>Good afternoon</Text>
                            </View> :
                            <View style={styles.greetingContainer}>
                                <Text style={styles.greetings}>Good evening</Text>
                            </View>
                    }
                    <View style={styles.settingsContainer}>
                        <MaterialIcons
                            name='settings'
                            size={24}
                            onPress={() => props.navigation.navigate('Settings')}
                        />
                    </View>
                    <View style={styles.listContainer}>
                        {/* recommended section */}
                        <ReccSection
                            title="Your Recommended"
                            navigation={props.navigation}
                        />
                        {/* seasonal section */}
                        <SeasonalSection
                            title="Seasonal"
                            navigation={props.navigation}
                        />
                        {/* upcoming section */}
                        <UpcomingSection
                            title="Upcoming"
                            navigation={props.navigation}
                        />
                        {/* more of what you love section */}
                        <SimilarGenreSection
                            navigation={props.navigation}
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View >
    );
}

export default HomeScreen;