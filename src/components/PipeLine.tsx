import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

import Tube from './Tube'
import {Task} from '../types/task'
import {getDates} from '../utils/date'

interface PipeLineProps {
  startDay: Date
  endDay: Date
  task: Task
  viewMode: string
  isLoading?: boolean
}

const PipeLine = ({
  startDay,
  endDay,
  task,
  viewMode,
  isLoading,
}: PipeLineProps) => {
  let numberOfDays
  switch (viewMode) {
    case 'day':
      numberOfDays = 1
      break
    case 'week':
      numberOfDays = 7
      break
    case 'month':
      numberOfDays = 1
      break
    case 'quarter':
      numberOfDays = 3
      break
  }

  const arrayOfDates = getDates(startDay, endDay)
  if (arrayOfDates.length !== numberOfDays) {
    return (
      <Text style={styles.error}>
        Dimension error: number of dates and viewMode do not correspond
      </Text>
    )
  }

  const taskByDays = arrayOfDates.map(date => ({
    date: date,
    task: task,
  }))

  if (isLoading) {
    return
  } else {
    return (
      <View style={styles.container}>
        {taskByDays.map((item, index) => (
          <Tube
            task={item.task}
            date={item.date}
            viewMode={viewMode}
            index={index}
          />
        ))}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-evenly',
  },
  error: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'red',
    fontSize: 20,
  },
})

export default PipeLine
