import { dateHelper } from 'core/helpers/date.helper'
import React, { useEffect, useState } from 'react'
import Calendar from './Calendar'

interface ICalendarWithInteractionForStorybook {
  defaultValue: Date
}
export const CalendarWithInteractionForStorybook = ({
  defaultValue,
}: ICalendarWithInteractionForStorybook) => {
  const [value, setValue] = useState(defaultValue)
  const [currentDate, setCurrentDate] = useState<Date>(
    (value as any) == '' || !value ? new Date() : value
  )
  const dateManager = dateHelper({ date: value })
  const daySelected = dateManager.getTimeStampByDate

  useEffect(() => {
    value && setCurrentDate(value)
  }, [value])

  return (
    <Calendar
      daySelected={daySelected}
      currentDate={currentDate}
      handleSelectDay={(dayId) =>
        setValue(dateManager.getDateByTimeStamp(dayId))
      }
      handleSelectCurrentDate={setCurrentDate}
    />
  )
}
