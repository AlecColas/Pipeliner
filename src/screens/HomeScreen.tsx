import React from 'react'
import {StyleSheet, View} from 'react-native'

import {HomeScreenNavigationProp} from '../../App'
import PipelineFactory from '../components/PipelineFactory'

type SettingsScreenProps = {
  navigation: HomeScreenNavigationProp
}

const HomeScreen = ({navigation}: SettingsScreenProps) => {
  return (
    <View style={styles.center}>
      <PipelineFactory />
    </View>
  )
}

const styles = StyleSheet.create({
  center: {flex: 1},
})

export default HomeScreen
