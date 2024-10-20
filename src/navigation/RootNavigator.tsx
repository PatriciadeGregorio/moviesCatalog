import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/HomeScreen.tsx';
import { DetailsScreen } from '../screens/DetailsScreen.tsx';
import { FavoriteScreen } from '../screens/FavoriteScreen.tsx';
import Icon from 'react-native-vector-icons/FontAwesome';
import { RootStackParamList } from './navigation-props.ts';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator<RootStackParamList>();

function HomeStackScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={HomeScreen} />
            <HomeStack.Screen name="Details" component={DetailsScreen} />
        </HomeStack.Navigator>
    );
}

export const RootNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName = '';
                    if (route.name === 'Inicio') {
                        iconName = 'film';
                    } else if (route.name === 'Favoritas') {
                        iconName = focused ? 'heart' : 'heart-o';
                    }

                    return <Icon name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
                headerShown: false,
            })}>
                <Tab.Screen name="Inicio" component={HomeStackScreen} />
                <Tab.Screen name="Favoritas" component={FavoriteScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};
