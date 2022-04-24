/* 
    Search screen stylesheeet.
*/

import { StyleSheet, } from 'react-native';

export const styles = StyleSheet.create({
    // SearchList
    searchBar: {
        marginTop: '-8%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: -10,
        paddingTop: 10,
        // paddingRight: 10
    },

    icon: {
        color: '#601BA6',
        padding: 6,
        marginTop: '3%',
        height: 50
    },

    textInput: {
        height: 30,
        flex: 1,
        paddingTop: 0,
        paddingRight: 10,
        paddingBottom: 0,
        paddingLeft: '1%',
        borderWidth: 0,
        backgroundColor: '#fff',
        color: '#424242',
    },

    listContainer: {
        flex: 1,
        marginTop: '7%',
        marginHorizontal: 4,
        backgroundColor: '#fff'
    },

    // Card
    cardContainer: {
        margin: 6,
    },
    image: {
        width: 115,
        height: 165,
    },
    title: {
        fontSize: 9,
        fontWeight: '400',
        fontFamily: 'Futura',
        marginTop: '1%',
    },
});