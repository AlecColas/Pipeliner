import React from 'react'
import {StyleSheet, Text, TouchableOpacity} from 'react-native'

import {Task} from '../types/task'

interface TubeProps {
  date: Date
  task: Task
  viewMode: string
  index?: number
}

const Tube = ({date, task, viewMode, index}: TubeProps) => {
  const {title, description} = task
  const dayNumber = date.getDay()
  const isWeekEndDay = dayNumber === 0 || dayNumber === 6

  let text = ''

  switch (viewMode) {
    case 'day':
      text = title + '\n' + description
      break
    case 'week':
      text = title
      break
    case 'month':
      if (index === 14) {
        text = title + '\n' + description
      }
      break
    case 'quarter':
      if (index === 14) {
        text = title + '\n' + description
      }
      break
  }
  return (
    // <TouchableOpacity onPress={} style={styles.tube}>
    <TouchableOpacity style={[styles.tube, isWeekEndDay ? styles.weekend : {}]}>
      <Text style={styles.text}>{text + index}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  tube: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'stretch',
    borderColor: 'grey',
    borderStyle: 'dashed',
    borderWidth: 0.2,
  },
  weekend: {backgroundColor: 'lightgrey'},
  text: {textAlign: 'center', fontSize: 20},
})

export default Tube
