import React from 'react';
import {
    StyleSheet,
    View, Text,
    TouchableOpacity,
    Image,
    SafeAreaView,
} from 'react-native';


const Card = props => {
    console.log(props.listId, props.animeId);
    return (
        <TouchableOpacity
            onPress={() => props.navigation.navigate('RemoveAnime',
                { listId: props.listId, animeId: props.animeId }
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
                            {props.title.length > 16 ? props.title.slice(0, 16) + '...'
                                : props.title}
                        </Text>
                    </View>
                </View>
            </SafeAreaView>

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
    },
    imageContainer: {
        marginLeft: 8,
        margin: 1,
        marginTop: 3,
    },
    itemPhoto: {
        width: 110,
        height: 140,
    },
    titleContainer: {
        marginLeft: 9,
        marginTop: -1,
    },
    title: {
        fontSize: 8,
        fontFamily: 'Futura',
    },
});
export default Card;