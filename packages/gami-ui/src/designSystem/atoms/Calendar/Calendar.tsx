import { DateHelper, dateHelper, ICalendarItem } from 'core/helpers/date.helper'
import { cls } from 'core/utils/cls'
import React, { useEffect, useState } from 'react'
import * as S from './Calendar.styles'

export interface ICalendar {
  /**
   * Default Date
   */
  defaultDate?: Date
  /**
   * Handler on date selection
   */
  onDateSelected?: (date?: Date) => void

  daySelected: number
  handleSelectDay: (dayId: number) => void
  handleSelectCurrentDate: (date: Date) => void
  currentDate: Date
}

const Calendar = React.forwardRef(
  (
    {
      handleSelectCurrentDate,
      currentDate,
      handleSelectDay,
      daySelected,
    }: ICalendar,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const [weeks, setWeeks] = useState<number>(0)
    const [calendar, setCalendar] = useState<ICalendarItem[]>([])
    const [month, setMonth] = useState<string>('')
    const [year, setYear] = useState<number>(0)

    const handleChangeDateByMonth = (type: 'prev' | 'next') => {
      const currentDateCloned = new Date(currentDate.getTime())
      const currentMonth = currentDateCloned.getMonth()

      const monthOperation = currentMonth + (type === 'prev' ? -1 : +1)
      currentDateCloned.setMonth(monthOperation)

      handleSelectCurrentDate(currentDateCloned)
    }

    const handleCalendar = () => {
      const weekDays = dateHelper({ date: currentDate }).getWeeksByMonth()
      const { calendar } = dateHelper({
        date: currentDate,
      }).getCalendar()
      const monthName = dateHelper({ date: currentDate }).monthName
      const year = dateHelper({ date: currentDate }).year

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

    const prevMonth = () => handleChangeDateByMonth('prev')

    const nextMonth = () => handleChangeDateByMonth('next')

    return (
      <S.Calendar ref={ref}>
        <S.Header>
          <S.Prev
            padding="5px"
            rounded="full"
            shadow="md"
            name="arrow__left"
            onClick={prevMonth}
            color="black"
          />
          <S.Month>
            {month} {year}
          </S.Month>
          <S.Next
            padding="5px"
            rounded="full"
            shadow="md"
            name="arrow__right"
            onClick={nextMonth}
            color="black"
          />
        </S.Header>
        <S.Body>
          <S.DayHead>
            {DateHelper.indexDays.map((day: string) => (
              <S.DayItem key={day}>
                <S.DayNameSpan>{day.slice(0, 2)}</S.DayNameSpan>
              </S.DayItem>
            ))}
          </S.DayHead>
          <S.DayBody $rows={weeks}>
            {calendar.map(({ id, dayNumber, today, fromMonth }) => (
              <S.DayWeekItem key={id}>
                <S.DaySpan
                  onClick={() => handleSelectDay(id)}
                  className={cls({
                    today: today,
                    month: fromMonth,
                    selected: daySelected === id,
                  })}
                >
                  {dayNumber}
                </S.DaySpan>
              </S.DayWeekItem>
            ))}
          </S.DayBody>
        </S.Body>
      </S.Calendar>
    )
  }
)

export default Calendar
