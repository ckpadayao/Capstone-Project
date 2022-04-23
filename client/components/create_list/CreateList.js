import React from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Text,
    Button,
    ScrollView,
    KeyboardAvoidingView,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as animeAction from 'animo/redux/actions/animeAction';
import { Formik } from 'formik';
import * as yup from 'yup';
import uuid from 'react-native-uuid';

const CreateList = props => {
    const dispatch = useDispatch();
    const selectAnime = useSelector(
        state => state.anime.animeList.find(anime => anime._id == props.id)
    );

    const formSchema = yup.object({
        title: yup.string(),
        desc: yup.string(),
        // list: yup.array(),

    });
    return (
        <KeyboardAvoidingView
            behavior='padding'
            keyboardVerticalOffset={100}
        >
            <ScrollView>
                <Formik
                    initialValues={{
                        id: uuid.v4(),
                        title: '',
                        desc: '',
                        list: [selectAnime],
                    }}
                    validationSchema={formSchema}
                    onSubmit={(values) => {
                        // console.log(values)
                        dispatch(animeAction.createYourList(values))
                        props.navigation.navigate('YourLists')
                    }}
                >
                    {props => (
                        <View style={styles.form}>
                            <View style={styles.formGroup}>
                                <Text style={styles.title}>Title</Text>
                                <TextInput
                                    style={styles.input}
                                    onChangeText={props.handleChange('title')}
                                    value={props.values.title}
                                />
                            </View>
                            <View style={styles.formGroup}>
                                <Text style={styles.title}>Description</Text>
                                <TextInput
                                    style={styles.input}
                                    onChangeText={props.handleChange('desc')}
                                    value={props.values.desc}
                                />
                            </View>
                            <View style={styles.buttonContainer}>
                                <Button
                                    style={styles.button}
                                    title='Create List'
                                    onPress={props.handleSubmit}
                                />
                            </View>
                        </View>

                    )}

                </Formik>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

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

export default CreateList;