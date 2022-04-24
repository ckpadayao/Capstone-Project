/*
    Test Card component for Home screen.
    On press, navigate to AnimeDetails screen, then pass off anime id 
*/
import React from 'react';
import {
    StyleSheet,
    View, Text,
    TouchableOpacity,
    Image,
} from 'react-native';


const Card = props => {
    return (
        <TouchableOpacity
            onPress={() => props.navigation.navigate('AnimeDetails',
                { animeId: props.id }
            )}
        >
            <View style={styles.cardContainer}>
                <View style={styles.imageContainer}>
                    <Image
                        source={{
                            uri: props.image,
                        }}
                        style={styles.image}
                        resizeMode="cover"
                    />
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>
                        {/* Display only 12 characters of an anime's title */}
                        {props.title.length > 12 ? props.title.slice(0, 12) + '...'
                            : props.title}
                    </Text>
                </View>
            </View>

        </TouchableOpacity>
    );
}

// styles
const styles = StyleSheet.create({
    cardContainer: {
        padding: 10,
        marginHorizontal: -5
    },
    imageContainer: {

    },
    image: {
        width: 120,
        height: 170,
    },
    title: {
        fontSize: 11,
        fontWeight: '400',
        fontFamily: 'Futura',
        marginTop: 0,
    },
});
export default Card;