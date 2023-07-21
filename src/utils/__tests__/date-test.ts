import {
  addDays,
  getDates,
  getFirstDayOfMonth,
  getLastDayOfMonth,
  getLastMonday,
  getNextSunday,
  getNumberOfDaysInMonth,
  isOnGoingTask,
} from '../date'

describe('Test Date Helpers', () => {
  test('getNumberOfDaysInMonth', () => {
    expect(getNumberOfDaysInMonth(2023, 0)).toEqual(31) // january
    expect(getNumberOfDaysInMonth(2023, 1)).toEqual(28) // february
    expect(getNumberOfDaysInMonth(2023, 2)).toEqual(31) // march
    expect(getNumberOfDaysInMonth(2023, 3)).toEqual(30) // april
    expect(getNumberOfDaysInMonth(2023, 4)).toEqual(31) // may
    expect(getNumberOfDaysInMonth(2023, 5)).toEqual(30) // june
    expect(getNumberOfDaysInMonth(2023, 6)).toEqual(31) // july
    expect(getNumberOfDaysInMonth(2023, 7)).toEqual(31) // august
    expect(getNumberOfDaysInMonth(2023, 8)).toEqual(30) // september
    expect(getNumberOfDaysInMonth(2023, 9)).toEqual(31) // october
    expect(getNumberOfDaysInMonth(2023, 10)).toEqual(30) // november
    expect(getNumberOfDaysInMonth(2023, 11)).toEqual(31) // december
    expect(getNumberOfDaysInMonth(2024, 1)).toEqual(29) // february leap year
  })

  describe('getFirstDayOfMonth', () => {
    test('July 2023', () => {
      // Example with July
      const dateInJuly = new Date(2023, 6, 12)
      const firstDayOfJuly = new Date(2023, 6, 1)
      const lastDayOfJune = new Date(2023, 6, 0)
      const lastDayOfJuly = new Date(2023, 6, 31)
      const firstDayOfAugust = new Date(2023, 6, 32)
      expect(getFirstDayOfMonth(dateInJuly)).toEqual(new Date(2023, 6, 1))
      expect(getFirstDayOfMonth(firstDayOfJuly)).toEqual(new Date(2023, 6, 1))
      expect(getFirstDayOfMonth(lastDayOfJune)).toEqual(new Date(2023, 5, 1))
      expect(getFirstDayOfMonth(lastDayOfJuly)).toEqual(new Date(2023, 6, 1))
      expect(getFirstDayOfMonth(firstDayOfAugust)).toEqual(new Date(2023, 7, 1))
    })

    test('Normal year February', () => {
      const dateInFebruary = new Date(2023, 1, 12)
      const firstDayOfFebruary = new Date(2023, 1, 1)
      const lastDayOfJanuary = new Date(2023, 1, 0)
      const lastDayOfFebruary = new Date(2023, 1, 28)
      const firstDayOfMarch = new Date(2023, 1, 32)
      expect(getFirstDayOfMonth(dateInFebruary)).toEqual(new Date(2023, 1, 1))
      expect(getFirstDayOfMonth(firstDayOfFebruary)).toEqual(
        new Date(2023, 1, 1),
      )
      expect(getFirstDayOfMonth(lastDayOfJanuary)).toEqual(new Date(2023, 0, 1))
      expect(getFirstDayOfMonth(lastDayOfFebruary)).toEqual(
        new Date(2023, 1, 1),
      )
      expect(getFirstDayOfMonth(firstDayOfMarch)).toEqual(new Date(2023, 2, 1))
    })

    test('Leap Year February', () => {
      const dateInLeapFebruary = new Date(2024, 1, 12)
      const firstDayOfLeapFebruary = new Date(2024, 1, 1)
      const lastDayOfLeapJanuary = new Date(2024, 1, 0)
      const lastDayOfLeapFebruary = new Date(2024, 1, 29)
      const firstDayOfLeapMarch = new Date(2024, 1, 30)
      expect(getFirstDayOfMonth(dateInLeapFebruary)).toEqual(
        new Date(2024, 1, 1),
      )
      expect(getFirstDayOfMonth(firstDayOfLeapFebruary)).toEqual(
        new Date(2024, 1, 1),
      )
      expect(getFirstDayOfMonth(lastDayOfLeapJanuary)).toEqual(
        new Date(2024, 0, 1),
      )
      expect(getFirstDayOfMonth(lastDayOfLeapFebruary)).toEqual(
        new Date(2024, 1, 1),
      )
      expect(getFirstDayOfMonth(firstDayOfLeapMarch)).toEqual(
        new Date(2024, 2, 1),
      )
    })
  })

  describe('getLastDayOfMonth', () => {
    test('July 2023', () => {
      // Example with July
      const dateInJuly = new Date(2023, 6, 12)
      const firstDayOfJuly = new Date(2023, 6, 1)
      const lastDayOfJune = new Date(2023, 6, 0)
      const lastDayOfJuly = new Date(2023, 6, 31)
      const firstDayOfAugust = new Date(2023, 6, 32)
      expect(getLastDayOfMonth(dateInJuly)).toEqual(new Date(2023, 6, 31))
      expect(getLastDayOfMonth(firstDayOfJuly)).toEqual(new Date(2023, 6, 31))
      expect(getLastDayOfMonth(lastDayOfJune)).toEqual(new Date(2023, 5, 30))
      expect(getLastDayOfMonth(lastDayOfJuly)).toEqual(new Date(2023, 6, 31))
      expect(getLastDayOfMonth(firstDayOfAugust)).toEqual(new Date(2023, 7, 31))
    })

    test('Normal year Ferburay', () => {
      // Case of February : non leap year
      const dateInFebruary = new Date(2023, 1, 12)
      const firstDayOfFebruary = new Date(2023, 1, 1)
      const lastDayOfJanuary = new Date(2023, 1, 0)
      const lastDayOfFebruary = new Date(2023, 1, 28)
      const firstDayOfMarch = new Date(2023, 1, 32)
      expect(getLastDayOfMonth(dateInFebruary)).toEqual(new Date(2023, 1, 28))
      expect(getLastDayOfMonth(firstDayOfFebruary)).toEqual(
        new Date(2023, 1, 28),
      )
      expect(getLastDayOfMonth(lastDayOfJanuary)).toEqual(new Date(2023, 0, 31))
      expect(getLastDayOfMonth(lastDayOfFebruary)).toEqual(
        new Date(2023, 1, 28),
      )
      expect(getLastDayOfMonth(firstDayOfMarch)).toEqual(new Date(2023, 2, 31))
    })

    test('Leap year Februray', () => {
      // Case of February : leap year
      const dateInLeapFebruary = new Date(2024, 1, 12)
      const firstDayOfLeapFebruary = new Date(2024, 1, 1)
      const lastDayOfLeapJanuary = new Date(2024, 1, 0)
      const lastDayOfLeapFebruary = new Date(2024, 1, 29)
      const firstDayOfLeapMarch = new Date(2024, 1, 30)
      expect(getLastDayOfMonth(dateInLeapFebruary)).toEqual(
        new Date(2024, 1, 29),
      )
      expect(getLastDayOfMonth(firstDayOfLeapFebruary)).toEqual(
        new Date(2024, 1, 29),
      )
      expect(getLastDayOfMonth(lastDayOfLeapJanuary)).toEqual(
        new Date(2024, 0, 31),
      )
      expect(getLastDayOfMonth(lastDayOfLeapFebruary)).toEqual(
        new Date(2024, 1, 29),
      )
      expect(getLastDayOfMonth(firstDayOfLeapMarch)).toEqual(
        new Date(2024, 2, 31),
      )
    })
  })

  describe('getLastMonday', () => {
    test('Inside current month', () => {
      // Test case 1: Monday
      const monday = new Date(2023, 7, 7)
      expect(getLastMonday(monday)).toEqual(monday)

      // Test case 2: Tuesday
      const tuesday = new Date(2023, 7, 8)
      const lastMondayTuesday = new Date(2023, 7, 7)
      expect(getLastMonday(tuesday)).toEqual(lastMondayTuesday)

      // Test case 3: Sunday
      const sunday = new Date(2023, 7, 13)
      const lastMondaySunday = new Date(2023, 7, 7)
      expect(getLastMonday(sunday)).toEqual(lastMondaySunday)
    })

    test('From current month to past', () => {
      // Test case 1: Tuesday
      const monday = new Date(2023, 6, 31)
      const tuesday = new Date(2023, 7, 1)
      expect(getLastMonday(tuesday)).toEqual(monday)

      // Test case 2: Sunday
      const sunday = new Date(2023, 7, 6)
      expect(getLastMonday(sunday)).toEqual(monday)
    })

    it('should not modify the original date', () => {
      const date = new Date('2023-07-11')
      const originalDate = new Date(date)
      getLastMonday(date)
      expect(date).toEqual(originalDate)
    })
  })

  describe('getNextSunday', () => {
    test('Inside current month', () => {
      // Test case 1: Monday
      const sunday = new Date(2023, 6, 30)
      const monday = new Date(2023, 6, 24)
      expect(getNextSunday(monday)).toEqual(sunday)

      // Test case 2: Sunday
      expect(getNextSunday(sunday)).toEqual(sunday)
    })

    test('From current month to next', () => {
      // Test case 1: Tuesday
      const monday = new Date(2023, 6, 31)
      const firstSundayOfAugust = new Date(2023, 7, 6)
      expect(getNextSunday(monday)).toEqual(firstSundayOfAugust)

      // Test case 2: Sunday
      const saturday = new Date(2023, 8, 30)
      const firstSundayOfOctober = new Date(2023, 9, 1)
      expect(getNextSunday(saturday)).toEqual(firstSundayOfOctober)
    })

    it('should not modify the original date', () => {
      const date = new Date('2023-07-11')
      const originalDate = new Date(date)
      getNextSunday(date)
      expect(date).toEqual(originalDate)
    })
  })

  describe('addDays', () => {
    it('should correctly add days to a given date', () => {
      // Test case 1: Add 0 days
      const date1 = new Date('2023-07-10')
      expect(addDays(date1, 0)).toEqual(date1)

      // Test case 2: Add positive days
      const date2 = new Date('2023-07-10')
      const expectedResult2 = new Date('2023-07-15')
      expect(addDays(date2, 5)).toEqual(expectedResult2)

      // Test case 3: Add negative days
      const date3 = new Date('2023-07-15')
      const expectedResult3 = new Date('2023-07-10')
      expect(addDays(date3, -5)).toEqual(expectedResult3)

      // Test case 4: Add large positive days
      const date4 = new Date('2023-07-10')
      const expectedResult4 = new Date('2023-07-20')
      expect(addDays(date4, 10)).toEqual(expectedResult4)

      // Test case 5: Add large negative days
      const date5 = new Date('2023-07-15')
      const expectedResult5 = new Date('2023-07-05')
      expect(addDays(date5, -10)).toEqual(expectedResult5)
    })

    it('should not modify the original date', () => {
      const date = new Date('2023-07-10')
      const originalDate = new Date(date)
      addDays(date, 5)
      expect(date).toEqual(originalDate)
    })
  })

  describe('getDates', () => {
    it('should return an array of dates between the start and stop dates (inclusive)', () => {
      const startDate = new Date('2023-07-10')
      const stopDate = new Date('2023-07-15')
      const expectedDates = [
        new Date('2023-07-10'),
        new Date('2023-07-11'),
        new Date('2023-07-12'),
        new Date('2023-07-13'),
        new Date('2023-07-14'),
        new Date('2023-07-15'),
      ]
      expect(getDates(startDate, stopDate)).toEqual(expectedDates)
    })

    it('should not modify the original start and stop dates', () => {
      const startDate = new Date('2023-07-10')
      const stopDate = new Date('2023-07-15')
      const originalStartDate = new Date(startDate)
      const originalStopDate = new Date(stopDate)
      getDates(startDate, stopDate)
      expect(startDate).toEqual(originalStartDate)
      expect(stopDate).toEqual(originalStopDate)
    })
  })

  describe('isOnGoingTask', () => {
    it('should return true if the current date is within the start and end dates', () => {
      const currentDate1 = new Date('2023-07-10')
      const startDate1 = new Date('2023-07-05')
      const endDate1 = new Date('2023-07-15')
      expect(isOnGoingTask(currentDate1, startDate1, endDate1)).toBe(true)

      const currentDate2 = new Date('2023-07-15')
      const startDate2 = new Date('2023-07-10')
      const endDate2 = new Date('2023-07-20')
      expect(isOnGoingTask(currentDate2, startDate2, endDate2)).toBe(true)

      const currentDate3 = new Date('2023-07-01')
      const startDate3 = new Date('2023-07-01')
      const endDate3 = new Date('2023-07-31')
      expect(isOnGoingTask(currentDate3, startDate3, endDate3)).toBe(true)
    })

    it('should return false if the current date is outside the start and end dates', () => {
      const currentDate1 = new Date('2023-07-01')
      const startDate1 = new Date('2023-07-05')
      const endDate1 = new Date('2023-07-15')
      expect(isOnGoingTask(currentDate1, startDate1, endDate1)).toBe(false)

      const currentDate2 = new Date('2023-07-20')
      const startDate2 = new Date('2023-07-10')
      const endDate2 = new Date('2023-07-15')
      expect(isOnGoingTask(currentDate2, startDate2, endDate2)).toBe(false)

      const currentDate3 = new Date('2023-08-01')
      const startDate3 = new Date('2023-07-01')
      const endDate3 = new Date('2023-07-31')
      expect(isOnGoingTask(currentDate3, startDate3, endDate3)).toBe(false)
    })

    it('should return true if the current date is equal to the start or end date', () => {
      const currentDate1 = new Date('2023-07-05')
      const startDate1 = new Date('2023-07-05')
      const endDate1 = new Date('2023-07-15')
      expect(isOnGoingTask(currentDate1, startDate1, endDate1)).toBe(true)

      const currentDate2 = new Date('2023-07-15')
      const startDate2 = new Date('2023-07-10')
      const endDate2 = new Date('2023-07-15')
      expect(isOnGoingTask(currentDate2, startDate2, endDate2)).toBe(true)
    })
  })
})
