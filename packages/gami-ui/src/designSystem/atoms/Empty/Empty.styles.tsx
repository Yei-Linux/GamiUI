import styled from '@emotion/styled'
import { ICustomTheme } from 'providers/ThemeGamification/ThemeGamification'
import { mixinDescription } from 'styles/mixins/fonts'
import RichText from '../RichText'
import { TWithGlobalStylesUI, withGlobalStylesUI } from 'core/utils/base'
import { PartialBy } from 'core/domain/types/mixins'

type TEmptyStyled = PartialBy<TWithGlobalStylesUI, 'theme'>
export const EmptyStyled = styled('div')(
  (props: TEmptyStyled) => ({
    width: props.theme?.tokens.sizes.width.full,
  }),
  (props) => withGlobalStylesUI(props)()
)

type TTextStyled = {
  theme?: ICustomTheme
  $color: string | null
}
export const TextStyled = styled(RichText)(({ theme, $color }: TTextStyled) =>
  mixinDescription(theme, $color)
)
