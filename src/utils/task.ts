import uuid from 'react-native-uuid'

export const createTask = (startDate: Date, endDate?: Date) => {
  const id = uuid.v4()
  return {
    id: id,
    startDate: startDate,
    endDate: endDate,
    title: 'Test',
    description: id,
  }
}
