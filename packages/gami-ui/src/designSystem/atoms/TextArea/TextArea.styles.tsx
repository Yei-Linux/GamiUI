import styled from '@emotion/styled'
import { PartialBy } from 'core/domain/types/mixins'
import { TWithGlobalStylesUI } from 'core/utils/base'
import { mixinInput } from 'styles/mixins/input'

type TTextAreaStyled = PartialBy<TWithGlobalStylesUI, 'theme'>
export const TextAreaStyled = styled('textarea')(
  ({ theme }: TTextAreaStyled) => ({
    height: '69px',
    minHeight: '75px',
    maxHeight: '225px',
    boxShadow: '0 1px 3px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 6%)',
    borderRadius: '0.5em',
    margin: theme?.tokens.spacing.margin.none,
    paddingTop: theme?.tokens.spacing.padding.md,
    paddingBottom: theme?.tokens.spacing.padding.md,
  }),
  () => mixinInput('light')
)
