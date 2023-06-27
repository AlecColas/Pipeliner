import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

import {MONTHS} from '../constants/Calendar'

interface DayDisplayerProps {
  date: Date
  isCurrentMonth: boolean
}

const DayDisplayer = ({date, isCurrentMonth}: DayDisplayerProps) => {
  const month = MONTHS[date.getMonth()]

  const textStyle = [styles.normal, isCurrentMonth ? styles.current : {}]

  return (
    <View style={[styles.container]}>
      <Text style={textStyle}>{month}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    borderColor: 'grey',
    borderLeftWidth: 0.3,
    borderRightWidth: 0.3,
  },
  grey: {backgroundColor: 'lightgrey'},
  normal: {textAlign: 'center', fontSize: 20},
  current: {
    fontWeight: 'bold',
    color: 'darkred',
  },
})

export default DayDisplayer
