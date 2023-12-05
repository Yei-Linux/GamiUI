import Container from 'designSystem/layouts/Container'
import Input from 'designSystem/atoms/Input'
import * as S from './DatePicker.styles'

import React, { useRef } from 'react'
import Calendar from '../Calendar'
import { usePickerTooltip } from 'hooks/usePickerTooltip'
import { cls } from 'core/utils/cls'
import { dateFormatter } from 'core/helpers/date-formatter'
import { dateHelper } from 'core/helpers/date.helper'
import { TDatePickerComponent } from './type'
import withDefaults from 'hocs/WithDefault'
import useToggle from 'hooks/useToggle'
import { useCurrentDate } from './useCurrentDate'
import useCssHandle from 'hooks/useCssHandle'

const DatePicker = ({
  onChangeFormItem,
  value,
  className,
  formatter = 'dd/MM/yyyy',
}: TDatePickerComponent) => {
  const { handles } = useCssHandle({
    classes: {
      date__picker__wrapper: ['date__picker__wrapper'],
      date__picker__calendar__container: ['date__picker__calendar__container'],
      date__picker__calendar: ['date__picker__calendar'],
      date__picker__input__container: ['date__picker__input__container'],
      date__picker__input: ['date__picker__input'],
    },
    componentPrefixCls: 'datePicker',
    customPrexiCls: className,
  })
  const dateManager = dateHelper({ date: value })
  const daySelected = dateManager.getTimeStampByDate

  const { isVisible, handleToggle } = useToggle({ defaultVisible: false })
  const { currentDate, setCurrentDate } = useCurrentDate({ value })

  const tooltipRef =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement>
  const inputRef =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement>
  usePickerTooltip({
    tooltipRef,
    inputRef,
    handleOnClickOutside: () => handleToggle(false),
  })

  const formatDate = () => {
    if (daySelected <= 0) return ''
    const currentDateCloned = new Date(daySelected)
    return dateFormatter(currentDateCloned, formatter)
  }

  return (
    <Container className={cls(handles.date__picker__wrapper)}>
      <S.PickerCalendar
        ref={tooltipRef}
        className={cls(handles.date__picker__calendar__container, {
          hide: !isVisible,
        })}
      >
        <Calendar
          className={cls(handles.date__picker__calendar)}
          daySelected={daySelected}
          currentDate={currentDate}
          handleSelectDay={(dayId) =>
            onChangeFormItem?.(dateManager.getDateByTimeStamp(dayId))
          }
          handleSelectCurrentDate={setCurrentDate}
        />
      </S.PickerCalendar>

      <S.InputContainer
        ref={inputRef}
        className={cls(handles.date__picker__input__container)}
      >
        <Input
          readOnly
          value={formatDate()}
          onClick={() => handleToggle()}
          className={cls(handles.date__picker__input)}
        />
      </S.InputContainer>
    </Container>
  )
}

const defaultProps = {}

DatePicker.displayName = 'DatePicker'

type DatePickerComponent<P> = React.NamedExoticComponent<P> & {
  defaultProps: P
}

export default withDefaults(
  DatePicker,
  defaultProps
) as DatePickerComponent<TDatePickerComponent>
