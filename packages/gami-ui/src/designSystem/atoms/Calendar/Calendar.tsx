import { DateHelper } from 'core/helpers/date.helper'
import { cls } from 'core/utils/cls'
import React from 'react'
import * as S from './Calendar.styles'
import { TCalendarComponent } from './type'
import { useCalendar } from './useCalendar'
import { handleChangeDateByMonth } from './helper'
import useCssHandle from 'hooks/useCssHandle'
import withDefaults from 'hocs/WithDefault'

const Calendar = React.forwardRef(
  (
    {
      className,
      handleSelectCurrentDate,
      currentDate,
      handleSelectDay,
      daySelected,
    }: TCalendarComponent,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const { handles } = useCssHandle({
      classes: {
        wrapper: ['wrapper'],
        header: ['header'],
        header__prev: ['header__prev'],
        header__month: ['header__month'],
        header__next: ['header__next'],
        body: ['body'],

        body__day_head: ['body__day_head'],
        body__day_head__item: ['body__day_head__item'],
        body__day_head__span: ['body__day_head__span'],

        body__day_body: ['body__day_body'],
        body__day_body_week_item: ['body__day_body_week_item'],
        body__day_body_span: ['body__day_body_span'],
      },
      componentPrefixCls: 'button',
      customPrexiCls: className,
    })

    const { weeks, calendar, month, year } = useCalendar({ currentDate })

    const prevMonth = () =>
      handleChangeDateByMonth('prev', currentDate, handleSelectCurrentDate)

    const nextMonth = () =>
      handleChangeDateByMonth('next', currentDate, handleSelectCurrentDate)

    return (
      <S.Calendar className={cls(handles.wrapper)} ref={ref}>
        <S.Header className={cls(handles.header)}>
          <S.Prev
            className={cls(handles.header__prev)}
            padding="5px"
            rounded="full"
            shadow="md"
            name="arrow__left"
            onClick={prevMonth}
            color="black"
          />
          <S.Month className={cls(handles.header__month)}>
            {month} {year}
          </S.Month>
          <S.Next
            className={cls(handles.header__next)}
            padding="5px"
            rounded="full"
            shadow="md"
            name="arrow__right"
            onClick={nextMonth}
            color="black"
          />
        </S.Header>
        <S.Body className={cls(handles.body)}>
          <S.DayHead className={cls(handles.body__day_head)}>
            {DateHelper.indexDays.map((day: string) => (
              <S.DayItem
                key={day}
                className={cls(handles.body__day_head__item)}
              >
                <S.DayNameSpan className={cls(handles.body__day_head__span)}>
                  {day.slice(0, 2)}
                </S.DayNameSpan>
              </S.DayItem>
            ))}
          </S.DayHead>
          <S.DayBody $rows={weeks} className={cls(handles.body__day_body)}>
            {calendar.map(({ id, dayNumber, today, fromMonth }) => (
              <S.DayWeekItem
                key={id}
                className={cls(handles.body__day_body_week_item)}
              >
                <S.DaySpan
                  onClick={() => handleSelectDay?.(id)}
                  className={cls(handles.body__day_body_span, {
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

const defaultProps = {}

Calendar.displayName = 'Calendar'

type CalendarComponent<P> = React.NamedExoticComponent<P> & {
  defaultProps: P
}

export default withDefaults(
  Calendar,
  defaultProps
) as CalendarComponent<TCalendarComponent>
