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
`

export const FormLabel = styled(RichText)`
  margin-bottom: 1rem;
`
