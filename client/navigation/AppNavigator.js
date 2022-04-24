/*
    App navigator using stacks and tabs. 
    Each tab uses navigator functions created.
*/

// imports
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialIcons } from '@expo/vector-icons'
import { Text, Dimensions } from 'react-native';

// imports for screens
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import YourListsScreen from '../screens/YourListsScreen';
import AnimeDetailsScreen from '../screens/AnimeDetailsScreen';
import SearchScreen from '../screens/SearchScreen';
import AddAnimeScreen from '../screens/AddAnimeScreen';
import RemoveAnimeScreen from '../screens/RemoveAnimeScreen';
import CreateListScreen from '../screens/CreateListScreen';
import SingleListScreen from '../screens/SingleListScreen';
import AddtoListScreen from '../screens/AddtoListScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Home
function HomeNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="HomeStack"
                component={HomeScreen}
                options={{ headerShown: false, swipeEnabled: true }}
            />
            <Stack.Screen
                name="AnimeDetails"
                component={AnimeDetailsScreen}
                options={{ headerShown: false, swipeEnabled: true, title: " " }}
            // options={{ headerShown: true, swipeEnabled: true, title: " " }}
            />

            <Stack.Screen
                name="AddAnime"
                component={AddAnimeScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="RemoveAnime"
                component={RemoveAnimeScreen}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Settings"
                component={SettingsScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="CreateList"
                component={CreateListScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SingleList"
                component={SingleListScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="YourLists"
                component={YourListsScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="AddtoList"
                component={AddtoListScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}

// YourLists
function YourListsNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="YourListsStack"
                component={YourListsScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="AnimeDetails"
                component={AnimeDetailsScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="RemoveAnime"
                component={RemoveAnimeScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SingleList"
                component={SingleListScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}

// Search
function SearchNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="SearchStack"
                component={SearchScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="AnimeDetails"
                component={AnimeDetailsScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="AddAnime"
                component={AddAnimeScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="CreateList"
                component={CreateListScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="YourLists"
                component={YourListsScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="AddtoList"
                component={AddtoListScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}


// complete app navigation
function AppNavigator() {

    return (
        <NavigationContainer>
            <Tab.Navigator
                initialLayout={{ width: Dimensions.get('window').width }}
                screenOptions={({ route }) => ({
                    tabBarIcon: () => {
                        let iconName;
                        if (route.name == "Home") {
                            iconName = "home"
                        }
                        else if (route.name == "Recommendations") {
                            iconName = "menu-book"
                        }
                        else if (route.name == "Search") {
                            iconName = "search"
                        }
                        else if (route.name == "Your Lists") {
                            iconName = "list"
                        }
                        return <MaterialIcons
                            name={iconName}
                            size={24}
                            color={'#601BA6'}
                        />
                    },

                    tabBarLabel: ({ focused }) => {
                        let labelName;
                        let titleStyle = {
                            fontSize: 9,
                            color: focused ? '#0D0D0D' : 'gray',
                        };

                        if (route.name == "Home") {
                            labelName = "Home"
                        }
                        else if (route.name == "Search") {
                            labelName = "Search"
                        }
                        else if (route.name == "Your Lists") {
                            labelName = "Your List"
                        }

                        return <Text style={titleStyle}>{labelName}</Text>

                    },

                })}
            >
                <Tab.Screen
                    name="Home"
                    component={HomeNavigator}
                    options={{
                        swipeEnabled: true,
                        headerTintColor: '#0D0D0D',
                    }}
                />
                <Tab.Screen
                    name="Search"
                    component={SearchNavigator}
                    options={{
                        swipeEnabled: true,
                        headerTintColor: '#0D0D0D',
                    }}
                />
                <Tab.Screen
                    name="Your Lists"
                    component={YourListsNavigator}
                    options={{
                        swipeEnabled: true,
                        headerTintColor: '#0D0D0D',
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;