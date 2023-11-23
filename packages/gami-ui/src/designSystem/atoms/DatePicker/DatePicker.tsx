import Container from 'designSystem/layouts/Container'
import Input from 'designSystem/atoms/Input'
import * as S from './DatePicker.styles'

import React, { useState, useRef, useEffect } from 'react'
import Calendar from '../Calendar'
import { usePickerTooltip } from 'hooks/usePickerTooltip'
import { cls } from 'core/utils/cls'
import { TOnChangeFormItem } from '../Input/Input'
import { dateFormatter, TPattern } from 'core/helpers/date-formatter'
import { dateHelper } from 'core/helpers/date.helper'

export interface IDatePicker {
  onChangeFormItem?: TOnChangeFormItem
  value?: Date
  formatter?: TPattern
}

const DatePicker = ({
  onChangeFormItem,
  value,
  formatter = 'dd/MM/yyyy',
}: IDatePicker) => {
  const dateManager = dateHelper({ date: value })
  const daySelected = dateManager.getTimeStampByDate

  const [currentDate, setCurrentDate] = useState<Date>(
    (value as any) == '' || !value ? new Date() : value
  )

  useEffect(() => {
    value && setCurrentDate(value)
  }, [value])

  const [isVisible, setIsVisible] = useState(false)
  const tooltipRef =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement>
  const inputRef =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement>
  usePickerTooltip({
    tooltipRef,
    inputRef,
    handleOnClickOutside: () => setIsVisible(false),
  })

  const formatDate = () => {
    if (daySelected <= 0) return ''
    const currentDateCloned = new Date(daySelected)
    return dateFormatter(currentDateCloned, formatter)
  }

  const handleClick = () => setIsVisible(!isVisible)

  return (
    <Container>
      <S.PickerCalendar
        ref={tooltipRef}
        className={cls({
          hide: !isVisible,
        })}
      >
        <Calendar
          daySelected={daySelected}
          currentDate={currentDate}
          handleSelectDay={(dayId) =>
            onChangeFormItem?.(dateManager.getDateByTimeStamp(dayId))
          }
          handleSelectCurrentDate={setCurrentDate}
        />
      </S.PickerCalendar>

      <div ref={inputRef}>
        <Input readOnly value={formatDate()} onClick={handleClick} />
      </div>
    </Container>
  )
}

export default DatePicker
