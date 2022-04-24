/*
    Card component for SingleList screen. 
*/

// imports
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
                // navigate to AnimeDetails with animeId, listId, and routedFrom
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
                        {/* slice title if title > 16 */}
                        {props.title.length > 16 ? props.title.slice(0, 16) + '...'
                            : props.title}
                        {/* {props.title} */}
                    </Text>
                </View>

            </TouchableOpacity>
        </View>
    );
}

// styles
const styles = StyleSheet.create({
    item: {
        margin: 6,
    },
    itemPhoto: {
        width: 115,
        height: 165,
    },
    itemText: {
        fontSize: 10,
        fontWeight: '400',
        fontFamily: 'Futura',
        marginTop: '1%',
    },
});
export default Card;