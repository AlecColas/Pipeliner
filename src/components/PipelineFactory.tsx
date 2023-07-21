import React, {useState} from 'react'
import {Button, View} from 'react-native'

import PipelineHeader from './PipelineHeader'
import PipelinePanel from './PipelinePanel'
import {getLastDayOfMonth, getLastMonday, getNextSunday} from '../utils/date'
import {createTask} from '../utils/task'

interface PipelineFactoryProps {}

const task1 = createTask(new Date())
const task2 = createTask(new Date())
const task3 = createTask(new Date())

const TASKS = [
  task1,
  task2,
  task3,
  task1,
  task2,
  task3,
  task1,
  task2,
  task3,
  task1,
  task2,
  task3,
  task1,
  task2,
  task3,
  task1,
  task2,
  task3,
  task1,
  task2,
  task3,
  task1,
  task2,
  task3,
]

export type ViewMode = 'day' | 'week' | 'month' | 'quarter'

const PipelineFactory = ({}: PipelineFactoryProps) => {
  const [viewMode, setViewMode] = useState<ViewMode>('week')

  const today = new Date()
  let startDate: Date
  let endDate: Date

  switch (viewMode) {
    case 'day':
      startDate = today
      endDate = today
      break
    case 'week':
      startDate = getLastMonday(today)
      endDate = getNextSunday(today)
      break
    case 'month':
      startDate = getLastDayOfMonth(today)
      endDate = getLastDayOfMonth(today)
      break
    case 'quarter':
      startDate = today
      endDate = today
      break
  }

  return (
    <View style={{flex: 1}}>
      <Button title="Change viewMode" />
      <PipelineHeader
        startDay={startDate}
        endDay={endDate}
        viewMode={viewMode}
      />
      <PipelinePanel
        startDay={startDate}
        endDay={endDate}
        viewMode={viewMode}
        tasks={TASKS}
      />
    </View>
  )
}

export default PipelineFactory
