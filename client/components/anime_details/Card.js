/*
    Card component for an anime that displays on the specified screen.
    When clicked, navigates user to AnimeDetails screen with the anime's id as a prop.
*/

import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    SafeAreaView,
} from 'react-native';


const Card = props => {
    return (
        <TouchableOpacity
            // navigate to AnimeDetails screen 
            // pass of anime id
            onPress={() => props.navigation.navigate('AnimeDetails',
                { animeId: props.id }
            )}
        >
            <SafeAreaView>
                <View style={styles.cardContainer}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={{
                                uri: props.image,
                            }}
                            style={styles.itemPhoto}
                            resizeMode="cover"
                        />
                    </View>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>
                            {/* Display only 11 characters in title if title > 11 */}
                            {props.title.length > 11 ? props.title.slice(0, 11) + '...'
                                : props.title}
                        </Text>
                    </View>
                </View>
            </SafeAreaView>
        </TouchableOpacity>
    );
}

// stylesheet
const styles = StyleSheet.create({
    cardContainer: {
    },
    imageContainer: {
        marginLeft: 8,
        margin: 1,
        marginTop: 3,
    },
    itemPhoto: {
        width: 100,
        height: 130,
    },
    titleContainer: {
        marginLeft: 9,
        marginTop: -1,
    },
    title: {
        fontSize: 10,
        fontFamily: 'Futura',
    },
});
export default Card;