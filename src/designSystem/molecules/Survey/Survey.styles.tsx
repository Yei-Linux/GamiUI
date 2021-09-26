import styled from '@emotion/styled'
import Steps from '../Steps'

export const Survey = styled(Steps.Body)``

export const SurveyContainer = styled(Steps.Item)`
  background-color: white;
  position: relative;
  height: min-content;
`

export const SurveyOption = styled.div<{ $width: string }>`
  width: ${({ $width }) => $width};
`
export const SurveyContentBox = styled.div`
  width: 100%;
`

export const SurveyControlsItem = styled.div`
  &:hover {
    cursor: pointer;
  }
`
