import styled from '@emotion/styled'
import { ICustomTheme } from 'providers/ThemeGamification/ThemeGamification'
import { mixinDescription } from 'styles/mixins/fonts'
import { mixinWidth } from 'styles/mixins/width'
import { InheritGlobalStylesComponent } from 'styles/utilities/commonComponent'
import RichText from '../RichText'

export const Empty = InheritGlobalStylesComponent(styled.div<{
  theme?: ICustomTheme
}>`
  ${({ theme }) => mixinWidth(theme, 'full')}
`)

export const Text = styled(RichText)<{ theme?: ICustomTheme; $color: string | null }>`
  ${({ theme, $color }) => mixinDescription(theme, $color)}
`
