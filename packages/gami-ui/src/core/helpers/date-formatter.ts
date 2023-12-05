const dayTypes = ['d' as const, 'dd' as const]
export type TDay = (typeof dayTypes)[number]

const monthTypes = ['M' as const, 'MM' as const]
export type TMonth = (typeof monthTypes)[number]

const yearTypes = ['yy' as const, 'yyyy' as const]
export type TYear = (typeof yearTypes)[number]

const hoursTypes = ['h' as const, 'hh' as const]
export type THour = (typeof hoursTypes)[number]

const minutesTypes = ['m' as const, 'mm' as const]
export type TMinute = (typeof minutesTypes)[number]

const secondTypes = ['s' as const, 'ss' as const]
export type TSecond = (typeof secondTypes)[number]

const modeTypes = ['a' as const, 'A' as const]
export type TMode = (typeof modeTypes)[number]

export type TEmpty = ''

export type TDateFormatWithSlashOrderOne = `${TDay}/${TMonth}/${TYear}`
export type TDateFormatWithSlashOrderTwo = `${TMonth}/${TDay}/${TYear}`
export type TDateFormatWithSlashOrderThree = `${TYear}/${TMonth}/${TDay}`

export type TDateFormatWithLineOrderOne = `${TDay}-${TMonth}-${TYear}`
export type TDateFormatWithLineOrderTwo = `${TMonth}-${TDay}-${TYear}`
export type TDateFormatWithLineOrderThree = `${TYear}-${TMonth}-${TDay}`

export type TDateFormatWithSlash =
  | TDateFormatWithSlashOrderOne
  | TDateFormatWithSlashOrderTwo
  | TDateFormatWithSlashOrderThree
export type TDateFormatWithLine =
  | TDateFormatWithLineOrderOne
  | TDateFormatWithLineOrderTwo
  | TDateFormatWithLineOrderThree

export type TDateFormat = TDateFormatWithSlash | TDateFormatWithLine
export type TTimeFormat = `${THour}:${TMinute}${`:${TSecond}` | TEmpty}${
  | ` ${TMode}`
  | TEmpty}`
export type TDateTimeFormat = `${TDateFormat} ${TTimeFormat}`
export type TDateTimeFormatWithTZ = `${TDateFormat}T${TTimeFormat}Z`

export type TPattern =
  | TDateFormat
  | TTimeFormat
  | TDateTimeFormat
  | TDateTimeFormatWithTZ

const validationDigits = (item: string) => {
  if (!item) return undefined

  if (item.length === 2) {
    return '2-digit' as const
  }
  return 'numeric' as const
}

export const dateFormatter = (date: Date, pattern: TPattern) => {
  const dayPattern = `${dayTypes[0]}|${dayTypes[1]}`
  const monthPattern = `${monthTypes[0]}|${monthTypes[1]}`
  const yearPattern = `${yearTypes[0]}|${yearTypes[1]}`

  const hoursPattern = `${hoursTypes[0]}|${hoursTypes[1]}`
  const minutesPattern = `${minutesTypes[0]}|${minutesTypes[1]}`
  const secondsPattern = `:${`${secondTypes[0]}|${secondTypes[1]}`}|${''}`
  const modesPattern = ` ${`${modeTypes[0]}|${modeTypes[1]}`}|${''}`

  const dateFormatOrderOne = (separator: '/' | '-', pattern: TPattern) => {
    const regex = `(${dayPattern})${separator}(${monthPattern})${separator}(${yearPattern})`
    const isApply = new RegExp(regex).test(pattern)
    const [d, m, y] = pattern.split(separator)
    return { isApply, d, m, y, H: '', M: '', S: '', locale: 'es-ES' }
  }
  const dateFormatOrderTwo = (separator: '/' | '-', pattern: TPattern) => {
    const regex = `(${monthPattern})${separator}(${dayPattern})${separator}(${yearPattern})`
    const isApply = new RegExp(regex).test(pattern)
    const [d, m, y] = pattern.split(separator)
    return { isApply, d, m, y, H: '', M: '', S: '', locale: 'es-ES' }
  }
  const dateFormatOrderThree = (separator: '/' | '-', pattern: TPattern) => {
    const regex = `(${yearPattern})${separator}(${monthPattern})${separator}(${dayPattern})`
    const isApply = new RegExp(regex).test(pattern)
    const [d, m, y] = pattern.split(separator)
    return { isApply, d, m, y, H: '', M: '', S: '', locale: 'es-ES' }
  }

  const timeFormat = (pattern: TPattern) => {
    const timeSeparator = ':'
    const regex = `(${hoursPattern})${timeSeparator}(${minutesPattern})(${secondsPattern})(${modesPattern})`
    const isApply = new RegExp(regex).test(pattern)
    const [time, mode] = pattern.split(' ')
    const [H, M, S] = time.split(timeSeparator)
    return { isApply, d: '', m: '', y: '', H, M, S, mode, locale: 'es-ES' }
  }

  const ruleApplied = [
    dateFormatOrderOne('/', pattern),
    dateFormatOrderOne('-', pattern),
    dateFormatOrderTwo('/', pattern),
    dateFormatOrderTwo('-', pattern),
    dateFormatOrderThree('/', pattern),
    dateFormatOrderThree('-', pattern),
    timeFormat(pattern),
  ].find(({ isApply }) => isApply)

  if (!ruleApplied) return

  const { d, m, y, H, M, S, locale } = ruleApplied

  const dayDigit = validationDigits(d)
  const monthDigit = validationDigits(m)
  const yearDigit = validationDigits(y)
  const hourDigit = validationDigits(H)
  const minuteDigit = validationDigits(M)
  const secondDigit = validationDigits(S)

  const intlDateOptions = {
    year: yearDigit,
    month: monthDigit,
    day: dayDigit,
    hour: hourDigit,
    minute: minuteDigit,
    second: secondDigit,
  }

  const dateFormatted = new Intl.DateTimeFormat(locale, intlDateOptions).format(
    date
  )

  return dateFormatted
}
