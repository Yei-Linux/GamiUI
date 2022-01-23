import { useTheme } from '@emotion/react'
import { ICustomTheme } from 'providers/ThemeGamification/ThemeGamification'

const useGamiTheme = () => {
  const themeGlobal = useTheme() as ICustomTheme

  const { tokens, componentsTheme, theme } = themeGlobal

  return { tokens, componentsTheme, theme }
}

export default useGamiTheme
