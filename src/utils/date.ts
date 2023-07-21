/** Returs the number of days in a given month
 * Uses the Date template from js to get the current month and return the numberOfDays
 */
export const getNumberOfDaysInMonth = (year: number, month: number) =>
  new Date(year, month + 1, 0).getDate()

export const getFirstDayOfMonth = (d: Date) => {
  d = new Date(d)
  return new Date(d.setDate(1))
}

export const getLastDayOfMonth = (d: Date) => {
  d = new Date(d)

  const daysInMonth = getNumberOfDaysInMonth(d.getFullYear(), d.getMonth())

  return new Date(d.setDate(daysInMonth))
}

export const getLastMonday = (d: Date) => {
  d = new Date(d)
  const day = d.getDay(),
    diff = d.getDate() - day + (day === 0 ? -6 : 1) // adjust when day is sunday
  return new Date(d.setDate(diff))
}

export const getNextSunday = (d: Date) => {
  d = new Date(d)
  const day = d.getDay(),
    diff = d.getDate() - day + (day === 0 ? 0 : 7) // adjust when day is sunday
  return new Date(d.setDate(diff))
}

export const addDays = (date: Date, days: number) => {
  const newDate = new Date(date)
  newDate.setDate(newDate.getDate() + days)
  return newDate
}

/** Returns an array of dates betwenn start and end (includes both start and end Dates) */
export const getDates = (startDate: Date, stopDate: Date) => {
  const dateArray = []
  var currentDate = new Date(startDate)

  while (currentDate.getTime() <= stopDate.getTime()) {
    dateArray.push(currentDate)
    currentDate = addDays(currentDate, 1)
  }
  return dateArray
}

/** Checks id the task is in progress betwenn two dates */
export const isOnGoingTask = (
  currentDate: Date,
  startDate: Date,
  endDate: Date,
) => {
  return startDate <= currentDate && currentDate <= endDate
}
