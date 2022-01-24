import { useEffect, useState } from 'react'
import addons from '@storybook/addons'

const channel = addons.getChannel()

export const useStorybookTheme = () => {
  const [isDark, setDark] = useState(false)

  useEffect(() => {
    channel.on('DARK_MODE', setDark)
    return () => channel.off('DARK_MODE', setDark)
  }, [channel, setDark])

  const paletteType = isDark ? 'dark' : 'light'

  return paletteType
}
