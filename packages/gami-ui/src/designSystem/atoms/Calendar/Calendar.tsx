import { DateHelper } from 'core/helpers/date.helper'
import { cls } from 'core/utils/cls'
import React from 'react'
import * as S from './Calendar.styles'
import { TCalendar } from './type'
import { useCalendar } from './useCalendar'
import { handleChangeDateByMonth } from './helper'

const Calendar = React.forwardRef(
  (
    {
      handleSelectCurrentDate,
      currentDate,
      handleSelectDay,
      daySelected,
    }: TCalendar,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const { weeks, calendar, month, year } = useCalendar({ currentDate })

    const prevMonth = () =>
      handleChangeDateByMonth('prev', currentDate, handleSelectCurrentDate)

    const nextMonth = () =>
      handleChangeDateByMonth('next', currentDate, handleSelectCurrentDate)

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
