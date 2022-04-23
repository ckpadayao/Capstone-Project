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
                        {props.title.length > 17 ? props.title.slice(0, 17) + '...'
                            : props.title}
                    </Text>
                </View>
            </View>

        </TouchableOpacity>
    );
}

export default Card;