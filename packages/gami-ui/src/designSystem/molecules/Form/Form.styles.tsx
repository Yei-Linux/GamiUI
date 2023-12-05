import styled from '@emotion/styled'
import { OnlyTheme } from 'core/domain/types/mixins'
import RichText from 'designSystem/atoms/RichText'
import Container from 'designSystem/layouts/Container'
import { flex } from 'styles/mixins/flex'

const flexDirectionCSS = flex({
  justifyContent: 'center',
  alignItems: 'center',
  direction: 'column',
})
type TFormStyled = OnlyTheme
export const FormStyled = styled('form')(
  ({ theme }: TFormStyled) => ({
    background: theme?.theme.neutral[800],
    width: 'auto',
    padding: '25px',
    borderRadius: '25px',
  }),
  () => flexDirectionCSS
)

type TFormItemStyled = OnlyTheme
export const FormItemStyled = styled('div')(
  ({ theme }: TFormItemStyled) => ({
    width: theme?.tokens.sizes.width.full,
    position: 'relative',
    marginBottom: '1rem',
    paddingBottom: '20px',
    '&.error': {
      'input,textarea': {
        '&:focus': {
          borderBottom: '1px solid red !important',
        },
      },
    },
  }),
  () => flex({ justifyContent: 'center', direction: 'column' })
)

export const FormLabelStyled = styled(RichText)(() => ({
  marginBottom: '1rem',
}))

export const FormErrorLabelStyled = styled(RichText)(() => ({
  marginLeft: '1rem',
}))

type TFormErrorStyled = OnlyTheme
export const FormErrorStyled = styled('div')(
  ({ theme }: TFormErrorStyled) => ({
    color: theme?.theme.semantic.danger,
    position: 'absolute',
    bottom: '0px',
    fontSize: '10px',
    fontWeight: theme?.tokens.font.weight.semibold,
  }),
  () => flex({ alignItems: 'center' })
)

export const FormCustomFieldStyled = styled(Container)()
