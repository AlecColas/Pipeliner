import * as React from 'react'

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {NavigationContainer} from '@react-navigation/native'
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack'
import Ionicons from 'react-native-vector-icons/Ionicons'

import DetailsScreen from './src/screens/DetailsScreen'
import HomeScreen from './src/screens/HomeScreen'
import SettingsScreen from './src/screens/SettingsScreen'

type HomeStackParamList = {
  Home: undefined // undefined because you aren't passing any params to the home screen
  Details: undefined // undefined because you aren't passing any params to the home screen
}

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  HomeStackParamList,
  'Home'
>

const HomeStack = createNativeStackNavigator<HomeStackParamList>()

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  )
}

type SettingsScreenNavigationProp = NativeStackNavigationProp<
  HomeStackParamList,
  'Home'
>

export type SettingsScreenProps = {
  navigation: SettingsScreenNavigationProp
}

type SettingStackParamList = {
  Settings: undefined // undefined because you aren't passing any params to the home screen
  Details: undefined // undefined because you aren't passing any params to the home screen
}
const SettingsStack = createNativeStackNavigator<SettingStackParamList>()

const SettingsStackScreen = () => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="Details" component={DetailsScreen} />
    </SettingsStack.Navigator>
  )
}

type BoardStackParamList = {
  Settings: undefined // undefined because you aren't passing any params to the home screen
  Details: undefined // undefined because you aren't passing any params to the home screen
}

const BoardStack = createNativeStackNavigator<BoardStackParamList>()

const BoardStackScreen = () => {
  return (
    <BoardStack.Navigator>
      <BoardStack.Screen name="Settings" component={SettingsScreen} />
      <BoardStack.Screen name="Details" component={DetailsScreen} />
    </BoardStack.Navigator>
  )
}

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName = 'ios-calendar'

            if (route.name === 'HomeScreen') {
              iconName = focused ? 'ios-calendar' : 'ios-calendar-outline'
            } else if (route.name === 'SettingsScreen') {
              iconName = focused ? 'ios-settings' : 'ios-settings-outline'
            } else if (route.name === 'BoardScreen') {
              iconName = focused ? 'ios-grid' : 'ios-grid-outline'
            }

            return <Ionicons name={iconName} size={size} color={color} />
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="BoardScreen" component={BoardStackScreen} />
        <Tab.Screen name="HomeScreen" component={HomeStackScreen} />
        <Tab.Screen name="SettingsScreen" component={SettingsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
