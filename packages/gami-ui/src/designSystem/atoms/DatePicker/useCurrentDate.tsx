import { useEffect, useState } from 'react'

export type TUseCurrentDate = {
  value?: Date
}
export const useCurrentDate = ({ value }: TUseCurrentDate) => {
  const [currentDate, setCurrentDate] = useState<Date>(
    (value as any) == '' || !value ? new Date() : value
  )

  useEffect(() => {
    value && setCurrentDate(value)
  }, [value])

  return { currentDate, setCurrentDate }
}
