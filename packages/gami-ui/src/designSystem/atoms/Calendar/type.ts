import { TDesignUI } from 'core/domain/types/design-system'

export type TCalendar = {
  /**
   * Default Date
   */
  defaultDate?: Date
  /**
   * Handler on date selection
   */
  onDateSelected?: (date?: Date) => void
  /**
   * Day Selected
   */
  daySelected: number
  /**
   * Handler on select only a day
   */
  handleSelectDay: (dayId: number) => void
  /**
   * Handler on select current date
   */
  handleSelectCurrentDate: (date: Date) => void
  /**
   * Current Date
   */
  currentDate: Date
}

export type TCalendarComponent = TCalendar & Pick<TDesignUI, 'className'>
