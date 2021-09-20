import styled from '@emotion/styled'
import { mixinFlexVariants } from 'styles/mixins/flex'
import RichText from '../../atoms/RichText'

export const Form = styled.form`
  ${mixinFlexVariants({ justifyContent: 'center', alignItems: 'center' })}

  flex-direction: column;
  background: 'white';
  width: auto;
  padding: 25px;
  border-radius: 25px;
`

export const FormItem = styled.div`
  ${mixinFlexVariants({ justifyContent: 'center' })}

  flex-direction: column;
  width: 100%;

  position: relative;

  margin-bottom: 1rem;
  padding-bottom: 20px;
`

export const FormLabel = styled(RichText)`
  margin-bottom: 1rem;
`

export const FormErrorLabel = styled(RichText)`
  margin-left: 10px;
`

export const FormError = styled.div`
  ${mixinFlexVariants({ alignItems: 'center' })}

  color: #e32b2b;
  position: absolute;
  bottom: 0px;
  font-size: 10px;
  font-weight: 600;
`
