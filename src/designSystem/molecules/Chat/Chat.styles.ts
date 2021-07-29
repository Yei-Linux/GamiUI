import styled from '@emotion/styled'
import { colorLight } from '../../../styles/theme'

const HEIGHT = '300px'

export const ChatWrapper = styled.div`
  background-color: ${colorLight.neutral.eight};
  min-width: fit-content;
  padding: 1rem;
`

export const ChatContainer = styled.div`
  height: ${HEIGHT};
  overflow: auto;
  padding: 0 1rem;
  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    background: #ffffff8a;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${colorLight.primary.oneLight};
    border-radius: 20px;
  }
`

export const ChatTyping = styled.div`
  display: flex;
  justify-content: center;
`

export const ChatUserContainer = styled.div``

export const ChatUserAvatar = styled.div`
  padding: 0 1rem 0 0;
`

export const ChatUserMessages = styled.div`
  max-width: fit-content;
`

export const ChatUserMessageContainer = styled.div<{ direction: string }>`
  display: flex;
  justify-content: ${(props) => props.direction};
`
