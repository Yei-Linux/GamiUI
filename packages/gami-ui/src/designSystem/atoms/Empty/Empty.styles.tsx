import styled from '@emotion/styled'
import { ICustomTheme } from 'providers/ThemeGamification/ThemeGamification'
import { mixinDescription } from 'styles/mixins/fonts'
import { mixinWidth } from 'styles/mixins/width'
import { WithDesignStyledComponent } from 'styles/utilities/commonComponent'
import RichText from '../RichText'

export const Empty = WithDesignStyledComponent(styled.div<{
  theme?: ICustomTheme
}>`
  ${({ theme }) => mixinWidth(theme, 'full')}
`)

export const Text = styled(RichText)<{
  theme?: ICustomTheme
  $color: string | null
}>`
  ${({ theme, $color }) => mixinDescription(theme, $color)}
`
