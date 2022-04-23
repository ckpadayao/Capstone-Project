import React from 'react';
import {
    StyleSheet,
    View, Text,
    TouchableOpacity,
    Image
} from 'react-native';


const Card = props => {
    return (
        <TouchableOpacity
            onPress={() => props.navigation.navigate('AnimeDetails',
                { animeId: props.id }
            )}
        >
            <View style={styles.item}>
                <Image
                    source={{
                        uri: props.image,
                    }}
                    style={styles.itemPhoto}
                    resizeMode="cover"
                />
                <Text style={styles.itemText}>
                    {props.title.length > 16 ? props.title.slice(0, 16) + '...'
                        : props.title}
                    {/* {props.title} */}
                </Text>
            </View>

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    item: {
        margin: 6,
    },
    itemPhoto: {
        width: 115,
        height: 165,
    },
    itemText: {
        fontSize: 9,
        fontWeight: '400',
        fontFamily: 'Futura',
        marginTop: '1%',
    },
});

export default Card;