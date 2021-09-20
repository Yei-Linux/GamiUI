import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { theme } from 'styles/tokens'

export const TitleContainer = styled.div`
  font-weight: bold;
  color: ${theme.light.neutral[0]};
  margin-bottom: 3px;
`

export const SubtitleContainer = styled.div`
  color: ${theme.light.neutral[300]};
  font-size: 0.9em;
`

export const ScrollBar = () => css`
  overflow: auto;
  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    background: #ffffff8a;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${theme.light.primary.hawkesBlue};
    border-radius: 20px;
  }
`
