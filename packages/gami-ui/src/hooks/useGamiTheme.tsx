import { useTheme } from '@emotion/react'
import { IconsPack } from 'designSystem/atoms/Icon'
import { ICustomTheme } from 'providers/ThemeGamification/ThemeGamification'

const useGamiTheme = () => {
  const themeGlobal = useTheme() as ICustomTheme

  const { tokens, componentsTheme, theme } = themeGlobal

  const globalIcons = (color = '#7f9cf5') => IconsPack(color)

  return { tokens, componentsTheme, theme, globalIcons }
}

export default useGamiTheme
