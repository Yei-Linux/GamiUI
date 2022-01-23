import styled from '@emotion/styled'
import { ICustomTheme } from 'providers/ThemeGamification/ThemeGamification'
import { mixinWidth } from 'styles/mixins/width'

export const CodeEditor = styled.div<{ $maxWidth: string, theme: ICustomTheme }>`
  max-width: ${({ $maxWidth }) => $maxWidth};
  ${({ theme }) => mixinWidth(theme, 'full')}
`
