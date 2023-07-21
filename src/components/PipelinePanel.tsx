import React from 'react'
import {FlatList, StyleSheet} from 'react-native'

import PipeLine from './PipeLine'
import {Task} from '../types/task'

interface PipelinePanelProps {
  startDay: Date
  endDay: Date
  tasks: Task[]
  viewMode: string
  isLoading?: boolean
}

const PipelinePanel = ({
  startDay,
  endDay,
  tasks,
  viewMode,
  isLoading,
}: PipelinePanelProps) => {
  return (
    <FlatList
      style={styles.container}
      data={tasks}
      renderItem={({item}) => (
        <PipeLine
          startDay={startDay}
          endDay={endDay}
          task={item}
          isLoading={isLoading}
          viewMode={viewMode}
        />
      )}
      keyExtractor={task => task.id}
    />
  )
}

const styles = StyleSheet.create({
  container: {flex: 1, flexDirection: 'column'},
})

export default PipelinePanel
