import styled from '@emotion/styled'
import tw from 'twin.macro'
import Steps from '../Steps'

export const SurveyWrapper = styled(Steps.Body)``

export const SurveyContainer = styled(Steps.Item)`
  background-color: white;
  position: relative;
  height: min-content;
`

export const SurveyOption = styled.div<{ width: string }>`
  width: ${(props) => props.width};
`
export const SurveyContentBox = styled.div`
  ${tw`w-full`}
`

export const SurveyControlsItem = styled.div`
  &:hover {
    cursor: pointer;
  }
`
