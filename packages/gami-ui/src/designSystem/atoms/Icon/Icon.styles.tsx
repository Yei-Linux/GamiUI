import styled from '@emotion/styled'
import { PartialBy } from 'core/domain/types/mixins'
import { TWithGlobalStylesUI, withGlobalStylesUI } from 'core/utils/base'
import { flex } from 'styles/mixins/flex'

const flexCenterCSS = flex({ justifyContent: 'center', alignItems: 'center' })

type TIconStyled = PartialBy<TWithGlobalStylesUI, 'theme'>
export const IconStyled = styled('i')(
  ({ theme }: TIconStyled) => ({
    outline: 'none',
    appearance: 'none',
    border: theme?.tokens.spacing.border.none,
    '&.hoverIcon': {
      '&:hover': {
        cursor: 'pointer',
      },
    },
  }),
  (props) => withGlobalStylesUI(props)(),
  () => flexCenterCSS
)

export const SvgStyled = styled('svg')()
