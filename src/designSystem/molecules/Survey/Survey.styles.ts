import styled from '@emotion/styled'
import tw from 'twin.macro'

export const SurveyWrapper = styled.div`
  ${tw`w-full flex`}
  overflow: hidden;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
`

export const SurveyContainer = styled.div`
  scroll-snap-align: start;
  flex-shrink: 0;
  transform-origin: center center;
  transform: scale(1);
  transition: transform 0.5s;
  position: relative;
  width: 100%;
`

export const SurveyOption = styled.div<{ width: string }>`
  width: ${(props) => props.width};
`
