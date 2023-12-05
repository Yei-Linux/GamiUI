import styled from '@emotion/styled'
import { OnlyTheme, PartialBy } from 'core/domain/types/mixins'
import { TWithGlobalStylesUI, withGlobalStylesUI } from 'core/utils/base'
import Container from 'designSystem/layouts/Container'
import { flex } from 'styles/mixins/flex'
import { mixinInput } from 'styles/mixins/input'

const inputCSS = mixinInput('light', '')
type TInputStyled = OnlyTheme
export const InputStyled = styled('input')(
  ({ theme }: TInputStyled) => ({
    paddingTop: theme?.tokens.spacing.padding.md,
    paddingBottom: theme?.tokens.spacing.padding.xs,
  }),
  () => inputCSS
)

export const PrefixContainerStyled = styled(Container)(() => ({
  marginBottom: '5px',
}))

const flexEndCSS = flex({ alignItems: 'flex-end' })

type TInputBoxStyled = PartialBy<TWithGlobalStylesUI, 'theme'>
export const InputBoxStyled = styled('div')(
  ({ theme }: TInputBoxStyled) => ({
    overflow: 'hidden',
    background: 'white',
    maxWidth: '300px',
    boxShadow: '0 1px 3px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 6%)',
    borderRadius: '0.5em',
    "input[type='password']": {
      fontFamily: 'system-ui !important',
    },
    '&.positionPrefixRight': {
      flexDirection: 'row-reverse',
      justifyContent: 'space-between',
      paddingRight: '0.5rem',
      input: {
        marginRight: theme?.tokens.spacing.padding.sm,
      },
    },
    '&.positionPrefixLeft': {
      flexDirection: 'row',
      paddingLeft: '0.5rem',

      input: {
        marginLeft: theme?.tokens.spacing.padding.sm,
      },
    },
  }),
  () => flexEndCSS,
  (props) => withGlobalStylesUI(props)()
)
