import {createTask} from '../task'

// Mock the react-native-uuid module
jest.mock('react-native-uuid', () => ({
  v4: jest.fn(() => 'mocked-uuid'),
}))

describe('createTask function', () => {
  it('should return a task object with generated ID, startDate, and title', () => {
    const startDate = new Date('2023-07-21T12:00:00.000Z')
    const task = createTask(startDate)

    expect(task).toHaveProperty('id', 'mocked-uuid')
    expect(task).toHaveProperty('startDate', startDate)
    expect(task).toHaveProperty('title', 'Test')
  })

  it('should return a task object with endDate if provided', () => {
    const startDate = new Date('2023-07-21T12:00:00.000Z')
    const endDate = new Date('2023-07-22T12:00:00.000Z')
    const task = createTask(startDate, endDate)

    expect(task).toHaveProperty('endDate', endDate)
  })

  it('should return a task object with description set to the generated ID', () => {
    const startDate = new Date('2023-07-21T12:00:00.000Z')
    const task = createTask(startDate)

    expect(task).toHaveProperty('description', 'mocked-uuid')
  })
})
