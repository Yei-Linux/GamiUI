import { useEffect, useState } from 'react'

export type TUseColorPickerLocal = {
  value: string
}

export const useColorPickerLocal = ({ value }: TUseColorPickerLocal) => {
  const [colorPickerLocal, setColorPickerLocal] = useState(value)

  useEffect(() => {
    setColorPickerLocal(value)
  }, [value])

  return { colorPickerLocal, setColorPickerLocal }
}
