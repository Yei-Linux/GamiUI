import styled from '@emotion/styled'
import { defaultTheme } from 'styles/tokens'
import Title from '../Title'

export const Question = styled.div`
  background-color: ${defaultTheme.light.neutral[800]};
  border-bottom-left-radius: 3em;
  border-bottom-right-radius: 3em;
`

export const QuestionText = styled(Title)`
  color: ${defaultTheme.light.neutral[0]};
`
