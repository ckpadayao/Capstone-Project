/*
    Button that on click, routes users to the AddAnime screen.
    Passes off the intended anime to add as a prop.
*/

//imports
import {
    StyleSheet,
    View,
    Pressable,
    Text,
} from 'react-native';
import { useDispatch } from 'react-redux';


const AddtoListButton = props => {
    return (
        <View style={styles.buttonContainer}>
            <Pressable
                style={styles.button}
                onPress={() => {
                    // navigate to AddAnime screen
                    props.navigation.navigate('AddAnime', { animeId: props.animeId })
                }}
            >
                <Text style={styles.buttonText}> Add to List </Text>
            </Pressable>
        </View>
    );
}

export default AddtoListButton;

// stylesheet
const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: '-15%',
    },
    button: {
        margin: '5%',
        marginLeft: '28%',
        alignContent: 'center',
        justifyContent: 'center',
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
