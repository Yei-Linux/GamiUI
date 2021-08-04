import { css } from '@emotion/react'
import styled from '@emotion/styled'
import tw from 'twin.macro'

export const SurveyWrapper = styled.div`
  ${tw`w-full flex`}
  overflow: hidden;
  transition: margin-left 800ms cubic-bezier(0.77, 0, 0.175, 1);
`

export const SurveyContainer = styled.div<{
  isFirstQuestion: boolean
  marginLeft: string
}>`
  background-color: white;
  flex-shrink: 0;
  position: relative;
  width: 100%;
  height: min-content;
  transition: 0.6s;

  ${(props) =>
    props.isFirstQuestion &&
    css`
      margin-left: ${props.marginLeft};
    `}
`

export const SurveyOption = styled.div<{ width: string }>`
  width: ${(props) => props.width};
`
export const SurveyContentBox = styled.div``

export const SurveyControlsItem = styled.div`
  &:hover {
    cursor: pointer;
  }
`
