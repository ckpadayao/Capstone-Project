import {
    StyleSheet,
    View,
    Pressable,
    Text,
} from 'react-native';
import { useDispatch } from 'react-redux';
import * as animeAction from 'animo/redux/actions/animeAction';


const AddtoListButton = props => {
    const dispatch = useDispatch();

    return (
        <View style={styles.buttonContainer}>
            <Pressable
                style={styles.button}
                onPress={() => {
                    props.navigation.navigate('AddAnime', { animeId: props.animeId })
                }}
            >
                <Text style={styles.buttonText}> Add to List </Text>
            </Pressable>
        </View>
    );
}

export default AddtoListButton;

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