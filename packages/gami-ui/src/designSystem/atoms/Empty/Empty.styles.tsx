import styled from '@emotion/styled'
import { ICustomTheme } from 'providers/ThemeGamification/ThemeGamification'
import { mixinDescription } from 'styles/mixins/fonts'
import { mixinWidth } from 'styles/mixins/width'
import RichText from '../RichText'

export const Empty = styled.div<{ theme?: ICustomTheme }>`
  ${({ theme }) => mixinWidth(theme, 'full')}
`

export const Text = styled(RichText)<{ theme?: ICustomTheme }>`
  ${({ theme }) => mixinDescription(theme)}
`
