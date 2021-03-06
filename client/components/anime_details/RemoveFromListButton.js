/*
    Button dispatches action to remove anime from watchlist.
    Then, navigates user back to SingleList screen with the list's id.
*/

//imports
import {
    StyleSheet,
    View,
    Pressable,
    Text,
} from 'react-native';
import { useDispatch } from 'react-redux';
import * as animeAction from 'animo/redux/actions/animeAction';


const RemoveFromListButton = props => {
    const dispatch = useDispatch();
    return (
        <View style={styles.buttonContainer}>
            <Pressable
                style={styles.button}
                onPress={() => {
                    dispatch(animeAction.removeFromList(props.listId, props.animeId))
                    props.navigation.navigate('SingleList', { listId: props.listId })
                }}
            >
                <Text style={styles.buttonText}> Remove from List </Text>
            </Pressable>
        </View>
    );
}

export default RemoveFromListButton;

// styles
const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: '-15%',
    },
    button: {
        margin: '5%',
        marginLeft: '28%',
        alignContent: 'center',
        justifyContent: 'center',
        // paddingVertical: 12,
        // paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 2,
        width: 170,
        height: 60,
        backgroundColor: '#601BA6',
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 10,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    }

});