import React from 'react';
import {
    StyleSheet,
    View, Text,
    TouchableOpacity,
    Image,
    Touchable
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
                        {props.title.length > 14 ? props.title.slice(0, 12) + '...'
                            : props.title}
                    </Text>
                </View>
            </View>

        </TouchableOpacity>
    );
}

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
        // color: 'rgba(255, 255, 255, 0.5)',
        fontSize: 11,
        fontWeight: '400',
        fontFamily: 'Futura',
        marginTop: 0,
    },
});
export default Card;