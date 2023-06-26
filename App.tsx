/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react'
// import {useColorScheme} from 'react-native'

import {NavigationContainer} from '@react-navigation/native'
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack'

// import {Colors} from 'react-native/Libraries/NewAppScreen'
import DetailsScreen from './src/screens/DetailsScreen'
import HomeScreen from './src/screens/HomeScreen'

type HomeStackParamList = {
  Home: undefined // undefined because you aren't passing any params to the home screen
  Details: undefined // undefined because you aren't passing any params to the home screen
}

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  HomeStackParamList,
  'Home'
>

const Stack = createNativeStackNavigator<HomeStackParamList>()

const App = () => {
  // const isDarkMode = useColorScheme() === 'dark'

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
