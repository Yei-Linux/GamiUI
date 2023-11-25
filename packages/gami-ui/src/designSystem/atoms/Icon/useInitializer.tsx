import { useEffect, useState } from 'react'
import { IconsPack } from './constants'
import { TIconComponent } from './type'

type TUseInitializer = Required<Pick<TIconComponent, 'color' | 'name'>>
export const useInitializer = ({ color, name }: TUseInitializer) => {
  const [icon, setIcon] = useState(IconsPack(color)?.[name])

  useEffect(() => {
    setIcon(IconsPack(color)?.[name])
  }, [name, color])
  return { icon }
}
