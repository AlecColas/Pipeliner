import React from 'react'
import {Button, StyleSheet, Text, View} from 'react-native'

import {SettingsScreenProps} from '../../App'

const SettingsScreen = ({navigation}: SettingsScreenProps) => {
  return (
    <View style={styles.center}>
      <Text>Settings screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  center: {flex: 1, justifyContent: 'center', alignItems: 'center'},
})

export default SettingsScreen
