/* 
    Displays a single list containing all anime in the list, a description, and title.
*/

// imports
import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList,
} from 'react-native';
import Card from 'animo/components/single_list/Card';
import { useSelector } from 'react-redux';
import DeleteListButton from '../components/single_list/DeleteListButton';

const SingleListScreen = props => {
    // get list id from props then select the list using the list id
    const { listId } = props.route.params;
    const selectList = useSelector(state => state.anime.yourLists.find(list => list.id == listId));

    return (
        // if there are no lists, display an empty view
        // otherwise,  display the FlatList
        listId == null ?
            <View> </View> :
            <View style={{ flex: 1 }}>
                <View style={styles.listContainer}>
                    <FlatList
                        ListHeaderComponent={<View><View style={styles.titleContainer}>
                            <Text style={styles.title}> {selectList.title} </Text>
                        </View>
                            <View style={styles.descContainer}>
                                <Text style={styles.desc}> {selectList.desc} </Text>
                            </View>
                        </View>
                        }
                        ListFooterComponent={<DeleteListButton
                            navigation={props.navigation}
                            listId={listId}
                        />}
                        style={styles.list}
                        showsHorizontalScrollIndicator={false}
                        numColumns={3}
                        data={selectList.list}
                        keyExtractor={item => item._id}
                        renderItem={({ item }) =>
                            <Card
                                from={"SingleScreen"}
                                navigation={props.navigation}
                                image={item.image}
                                title={item.english_title}
                                animeId={item._id}
                                listId={listId}
                            />
                        }
                    />
                </View>
            </View>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        justifyContent: 'flex-start',
        marginLeft: -5,
    },
    title: {
        fontWeight: '500',
        fontSize: 20,
        fontFamily: 'Futura',
    },
    descContainer: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginLeft: 2,
        paddingTop: 5,
        paddingBottom: 15,
    },
    desc: {
        fontSize: 10,
        textAlign: 'left',

    },
    listContainer: {
        marginVertical: 10,
        flex: 1
    },
    list: {
        flex: 1,
    }
});

export default SingleListScreen;