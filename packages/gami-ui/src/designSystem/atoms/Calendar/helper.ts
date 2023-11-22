import { TCalendar } from './type'

export const handleChangeDateByMonth = (
  type: 'prev' | 'next',
  currentDate: Date,
  handleSelectCurrentDate: TCalendar['handleSelectCurrentDate']
) => {
  const currentDateCloned = new Date(currentDate.getTime())
  const currentMonth = currentDateCloned.getMonth()

  const monthOperation = currentMonth + (type === 'prev' ? -1 : +1)
  currentDateCloned.setMonth(monthOperation)

  handleSelectCurrentDate(currentDateCloned)
}
