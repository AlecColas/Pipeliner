import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

import {DAYS, MONTHS} from '../constants/Calendar'

interface DayDisplayerProps {
  date: Date
  viewMode: string
}

const DayDisplayer = ({date, viewMode}: DayDisplayerProps) => {
  const dayOfMonth = date.getDate()
  const dayNumber = date.getDay()
  const day = DAYS[dayNumber]
  const month = MONTHS[date.getMonth()]
  const year = date.getFullYear()

  const today = new Date()
  const isCurrentDay = date.setHours(0, 0, 0, 0) === today.setHours(0, 0, 0, 0)

  const isWeekEndDay = dayNumber === 0 || dayNumber === 6

  let headerText = ''
  const textStyle = [styles.normal, isCurrentDay ? styles.current : {}]

  if (viewMode === 'day') {
    headerText = dayOfMonth + ' ' + month + ' ' + year
  } else if (viewMode === 'week') {
    headerText = dayOfMonth.toString()
  }

  return (
    <View style={[styles.container, isWeekEndDay ? styles.weekend : {}]}>
      <Text style={textStyle}>{headerText}</Text>
      <Text style={textStyle}>{day}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderColor: 'grey',
    borderWidth: 0.3,
  },
  weekend: {backgroundColor: 'lightgrey'},
  normal: {textAlign: 'center', fontSize: 16},
  current: {
    fontWeight: 'bold',
  },
})

export default DayDisplayer
