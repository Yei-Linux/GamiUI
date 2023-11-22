import { ICalendarItem, dateHelper } from 'core/helpers/date.helper'
import { useEffect, useState } from 'react'

export type TUseCalendar = {
  currentDate: Date
}
export const useCalendar = ({ currentDate }: TUseCalendar) => {
  const [weeks, setWeeks] = useState<number>(0)
  const [calendar, setCalendar] = useState<ICalendarItem[]>([])
  const [month, setMonth] = useState<string>('')
  const [year, setYear] = useState<number>(0)

  const handleCalendar = () => {
    const dateHelperHandler = dateHelper({ date: currentDate })

    const weekDays = dateHelperHandler.getWeeksByMonth()
    const { calendar } = dateHelperHandler.getCalendar()
    const monthName = dateHelperHandler.monthName
    const year = dateHelperHandler.year

    setWeeks(weekDays)
    setCalendar(calendar)
    setMonth(monthName)
    setYear(year)
  }

  useEffect(() => {
    handleCalendar()
  }, [])

  useEffect(() => {
    handleCalendar()
  }, [currentDate])

  return { weeks, calendar, month, year }
}
