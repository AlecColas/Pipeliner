import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

const DetailsScreen = () => {
  return (
    <View style={styles.center}>
      <Text>Details Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  center: {flex: 1, alignItems: 'center', justifyContent: 'center'},
})
export default DetailsScreen
