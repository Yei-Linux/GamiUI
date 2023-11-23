interface IDateHelper {
  date?: Date
}

export interface ICalendarItem {
  id: number
  dayNumber: number
  fromMonth: boolean
  today: boolean
}

export interface IGetCalendar {
  calendar: ICalendarItem[]
}

export class DateHelper {
  private _date: Date = new Date()
  static daysWeek = 7
  static indexMonths = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  static indexDays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]

  get date() {
    return this._date
  }

  get year() {
    return this.date.getFullYear()
  }

  get month() {
    return this.date.getMonth()
  }

  get day() {
    return this.date.getDay()
  }

  get getTimeStampByDate() {
    if (!this.date) return 0

    const year = this.date.getFullYear()
    const month = this.date.getMonth()
    const dayNumber = this.date.getDate()

    const timestamp = new Date(year, month, dayNumber)
    return timestamp.getTime()
  }

  get today() {
    const year = new Date().getFullYear()
    const month = new Date().getMonth()
    const day = new Date().getDate()

    return new Date(year, month, day)
  }

  get monthName() {
    return DateHelper.indexMonths[this.month]
  }

  constructor({ date }: IDateHelper) {
    if (date) {
      this._date = date
    }
  }

  private getIndexOfFirstDayFromMonth() {
    const year = this.year
    const month = this.month

    const firstDay = new Date(year, month, 1).getDay()
    return firstDay
  }

  getDateByTimeStamp(timestamp: number) {
    return new Date(timestamp)
  }

  getDaysByMonth(monthProp?: number) {
    const year = this.year
    const month = (monthProp ?? this.month) + 1

    const numDays = new Date(year, month, 0).getDate()
    return numDays
  }

  getWeeksByMonth() {
    const indexOfFirstDay = this.getIndexOfFirstDayFromMonth()
    const daysSizeFromMonth = this.getDaysByMonth()

    if (['Sunday', 'Monday'].includes(DateHelper.indexDays[indexOfFirstDay])) {
      const plusDays = DateHelper.indexDays[indexOfFirstDay] == 'Sunday' ? 0 : 6
      const diff = indexOfFirstDay + plusDays + daysSizeFromMonth
      const ceiled = Math.ceil(diff / DateHelper.daysWeek)

      return ceiled
    }

    const firstDayOfWeek = 0
    const firstWeekDay =
      (indexOfFirstDay - firstDayOfWeek + DateHelper.daysWeek) %
      DateHelper.daysWeek
    const diff = firstWeekDay + daysSizeFromMonth
    const ceiled = Math.ceil(diff / DateHelper.daysWeek)

    return ceiled
  }

  getCalendar(): IGetCalendar {
    const formatCalendar =
      (month: number, todayTimestamp: number, fromMonth: boolean) =>
      (dayNumber: number) => {
        const date = new Date(this.year, month, dayNumber)
        const timeStamp = date.getTime()

        return {
          id: timeStamp,
          dayNumber,
          today: timeStamp === todayTimestamp,
          fromMonth,
        }
      }

    const indexOfFirstDay = this.getIndexOfFirstDayFromMonth()
    const daysSizeFromMonth = this.getDaysByMonth()
    const daysSizeFromBeforeMonth = this.getDaysByMonth(this.month - 1)
    const weeks = this.getWeeksByMonth()
    const totalSize = weeks * DateHelper.daysWeek
    const todayTimestamp = this.today.getTime()

    let concatArr = []
    const initialArr = Array.from(Array(indexOfFirstDay).keys())
      .map((day) => daysSizeFromBeforeMonth - day)
      .reverse()
      .map(formatCalendar(this.month - 1, todayTimestamp, false))

    const daysFromMonth = Array.from(Array(daysSizeFromMonth).keys())
      .map((day) => day + 1)
      .map(formatCalendar(this.month, todayTimestamp, true))

    concatArr = [...initialArr, ...daysFromMonth]
    const onRestArr = Array.from(Array(totalSize - concatArr.length).keys())
      .map((day) => day + 1)
      .map(formatCalendar(this.month + 1, todayTimestamp, false))
    concatArr = [...concatArr, ...onRestArr]

    return { calendar: concatArr }
  }
}

export const dateHelper = (props: IDateHelper) => {
  return new DateHelper(props)
}
