import React from 'react';
import {
    StyleSheet,
    View, Text,
    TouchableOpacity,
    Image
} from 'react-native';


const Card = props => {
    return (
        <View>
            <TouchableOpacity
                onPress={() => props.navigation.navigate('AnimeDetails',
                    {
                        animeId: props.animeId,
                        listId: props.listId,
                        routedFrom: 'SingleScreen'
                    }
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
        </View>
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
        // color: 'rgba(255, 255, 255, 0.5)',
        fontSize: 10,
        fontWeight: '400',
        fontFamily: 'Futura',
        marginTop: '1%',
    },
});
export default Card;