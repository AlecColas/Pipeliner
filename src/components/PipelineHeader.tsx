import React from 'react'
import {StyleSheet, View} from 'react-native'

import DayDisplayer from './DayDisplayer'
import {getDates} from '../utils/date'

interface PipelineHeaderProps {
  startDay: Date
  endDay: Date
  viewMode: string
}
const PipelineHeader = ({startDay, endDay, viewMode}: PipelineHeaderProps) => {
  const arrayOfDates = getDates(startDay, endDay)

  return (
    <View style={styles.container}>
      {arrayOfDates.map(date => (
        <DayDisplayer date={date} viewMode={viewMode} />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-evenly',
  },
})

export default PipelineHeader
