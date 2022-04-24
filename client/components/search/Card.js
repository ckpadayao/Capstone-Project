/*
    Card component for Search screen.
*/

import React from 'react';
import {
    View, Text,
    TouchableOpacity,
    Image
} from 'react-native';
import { styles } from 'animo/assets/styles/search';


const Card = props => {
    return (
        <TouchableOpacity
            // navigate to AnimeDetails and pass off anime id
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
                        {/* slice title if title is > 17 characters */}
                        {props.title.length > 17 ? props.title.slice(0, 17) + '...'
                            : props.title}
                    </Text>
                </View>
            </View>

        </TouchableOpacity>
    );
}

export default Card;