import styled from '@emotion/styled'
import { theme } from 'styles/tokens'
import Title from '../Title'

export const Question = styled.div`
  background-color: ${theme.light.neutral[800]};
  border-bottom-left-radius: 3em;
  border-bottom-right-radius: 3em;
`

export const QuestionText = styled(Title)`
  color: ${theme.light.neutral[0]};
`
