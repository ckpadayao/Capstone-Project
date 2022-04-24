/*
    Change recommendations based on two selected genres from this form.
    This form uses Formik and yup to validate and submit the genres.
*/

// imports
import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    Button,
    KeyboardAvoidingView,
} from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Picker } from '@react-native-picker/picker';
import { useDispatch } from 'react-redux';
import * as animeAction from 'animo/redux/actions/animeAction';

// schema that genres must follow
const formSchema = yup.object({
    genre1: yup.string()
        .matches(/^(?!Select a Genre\b)/i, 'Please select a genre.')
        .notOneOf(
            [
                yup.ref('genre2'),
                yup.ref('genre3'),
            ], "Please select a genre that has not been selected."
        ),
    genre2: yup.string()
        .matches(/^(?!Select a Genre\b)/i, 'Please select a genre.')
        .notOneOf(
            [
                yup.ref('genre1'),
                yup.ref('genre3'),
            ], "Please select a genre that has not been selected."
        ),
    genre3: yup.string()
        .matches(/^(?!Select a Genre\b)/i, 'Please select a genre.')
        .notOneOf(
            [
                yup.ref('genre1'),
                yup.ref('genre2'),
            ], "Please select a genre that has not been selected."
        ),

});

// possible genres to select from
const Genres = [
    "Select a Genre",
    "Action",
    "Adventure",
    "Comedy",
    "Drama",
    "Fantasy",
    "Horror",
    "Mystery",
    "Romance",
    "Sci-Fi",
    "Slice of Life",
    "Sports",
    "Supernatural",
    "Suspense",
]


const ChangeReccForm = props => {

    const dispatch = useDispatch();
    return (
        <KeyboardAvoidingView
            behavior='padding'
            keyboardVerticalOffset={100}
        >
            <ScrollView>
                <Formik
                    initialValues={{
                        genre1: '',
                        genre2: '',
                    }}
                    validationSchema={formSchema}
                    onSubmit={(values) => {
                        // navigate to Home
                        // then dispatch action to fetch recommended anime and similar genre anime
                        props.navigation.navigate('HomeStack')
                        dispatch(animeAction.fetchRecommendedAnime(values))
                        dispatch(animeAction.fetchSimilarGenreAnime(values.genre1))
                    }}
                >
                    {/* set values displayed based on selection */}
                    {props => (
                        <View style={styles.formContainer}>
                            <View style={styles.formGroup}>
                                <Text style={styles.heading}>Most Preferred Genre</Text>
                                <Text style={styles.error}>{props.touched.genre1 && props.errors.genre1}</Text>
                                <Picker
                                    selectedValue={props.values.genre1}
                                    onBlur={props.handleBlur('genre1')}
                                    onValueChange={(item) => {
                                        props.setFieldValue('genre1', item)
                                    }}
                                >
                                    {Genres.map((item, index) => {
                                        return <Picker.Item label={item} value={item} key={index} />
                                    })}
                                </Picker>
                            </View>
                            <View style={styles.formGroup}>
                                <Text style={styles.heading}>Second Preferred Genre</Text>
                                <Text style={styles.error}>{props.touched.genre2 && props.errors.genre2}</Text>
                                <Picker
                                    selectedValue={props.values.genre2}
                                    onBlur={props.handleBlur('genre2')}
                                    onValueChange={(item) => {
                                        props.setFieldValue('genre2', item)
                                    }}
                                >
                                    {/* map genres to Picker component */}
                                    {Genres.map((item, index) => {
                                        return <Picker.Item label={item} value={item} key={index} />
                                    })}
                                </Picker>
                            </View>
                            <View style={styles.buttonContainer}>
                                <Button
                                    style={styles.button}
                                    title='Update Recommended'
                                    onPress={props.handleSubmit}
                                />
                            </View>
                        </View>

                    )}
                </Formik>
            </ScrollView>
        </KeyboardAvoidingView>

    );
}

// styles
const styles = StyleSheet.create({
    formContainer: {
        margin: 20,
        backgroundColor: '#ffffff',
        padding: 20,
        borderRadius: 10,
    },
    formGroup: {
        width: '100%'
    },
    heading: {
        fontFamily: 'Futura',
    },
    input: {
        paddingHorizontal: 2,
        paddingVertical: 8,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
    },
    error: {
        fontFamily: 'Futura',
        fontSize: 8,
        color: 'red'
    },
    buttonContainer: {
        marginTop: 20,
    },
    button: {
    },
});

export default ChangeReccForm;