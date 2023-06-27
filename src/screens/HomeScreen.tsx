import React from 'react'
import {Button, StyleSheet, Text, View} from 'react-native'

import {HomeScreenNavigationProp} from '../../App'

type SettingsScreenProps = {
  navigation: HomeScreenNavigationProp
}

const HomeScreen = ({navigation}: SettingsScreenProps) => {
  return (
    <View style={styles.center}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  center: {flex: 1, alignItems: 'center', justifyContent: 'center'},
})

export default HomeScreen
