import styled from '@emotion/styled'
import RichText from '../../atoms/RichText'

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: 'white';
  width: auto;
  padding: 25px;
  border-radius: 25px;
`

export const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin-bottom: 1rem;

  position: relative;
  padding-bottom: 20px;
`

export const FormLabel = styled(RichText)`
  margin-bottom: 1rem;
`

export const FormErrorLabel = styled(RichText)`
  margin-left: 10px;
`

export const FormError = styled.div`
  color: #e32b2b;
  position: absolute;
  bottom: 0px;
  font-size: 10px;
  font-weight: 600;
  display: flex;
  align-items: center;
`
