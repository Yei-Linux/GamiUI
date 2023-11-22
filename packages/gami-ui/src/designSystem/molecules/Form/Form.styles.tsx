import styled from '@emotion/styled'
import RichText from 'designSystem/atoms/RichText'
import Container from 'designSystem/layouts/Container'
import { flex } from 'styles/mixins/flex'

export const Form = styled.form`
  ${flex({ justifyContent: 'center', alignItems: 'center' })}

  flex-direction: column;
  background: 'white';
  width: auto;
  padding: 25px;
  border-radius: 25px;
`

export const FormItem = styled.div`
  ${flex({ justifyContent: 'center' })}

  flex-direction: column;
  width: 100%;

  position: relative;

  margin-bottom: 1rem;
  padding-bottom: 20px;

  &.error {
    input,
    textarea {
      &:focus {
        border-bottom: 1px solid red !important;
      }
    }
  }
`

export const FormLabel = styled(RichText)`
  margin-bottom: 1rem;
`

export const FormErrorLabel = styled(RichText)`
  margin-left: 10px;
`

export const FormError = styled.div`
  ${flex({ alignItems: 'center' })}

  color: #e32b2b;
  position: absolute;
  bottom: 0px;
  font-size: 10px;
  font-weight: 600;
`

export const FormCustomField = styled(Container)``
