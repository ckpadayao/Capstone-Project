import React from 'react';
import {
    StyleSheet,
    View, Text,
    TouchableOpacity,
    Image,
    SafeAreaView,
} from 'react-native';


const ListCard = props => {
    return (
        <TouchableOpacity
            onPress={() => props.navigation.navigate('SingleList',
                { listId: props.id }
            )}
        >
            <SafeAreaView>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                    />
                </View>
                <View style={styles.cardContainer}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>
                            {props && props.title && props.title.length > 16 ? props.title.slice(0, 16) + '...'
                                : props.title}
                        </Text>
                    </View>
                </View>
            </SafeAreaView>

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    imageContainer: {
        marginLeft: 1,
        margin: 1,
        marginTop: 3,
    },
    image: {
        backgroundColor: "#6e3b6e",
        padding: 60,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    titleContainer: {
        marginLeft: 17,
        marginTop: -10,
        marginHorizontal: 16,
        marginVertical: 15,
        backgroundColor: "#f9c2ff"
    },
    title: {
        marginLeft: 10,
        fontSize: 12,
        fontFamily: 'Futura',
    },
});
export default ListCard;