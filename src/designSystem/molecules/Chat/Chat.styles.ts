import styled from '@emotion/styled'
import { colorLight } from '../../../styles/theme'

export const ChatWrapper = styled.div`
  background-color: ${colorLight.neutral.eight};
  width: fit-content;
  padding: 1rem;
`

export const ChatContainer = styled.div``

export const ChatTyping = styled.div`
  display: flex;
  justify-content: center;
`

export const ChatUserContainer = styled.div``

export const ChatUserAvatar = styled.div`
  padding: 0 1rem 0 0;
`

export const ChatUserMessages = styled.div``

export const ChatUserMessageContainer = styled.div<{ direction: string }>`
  display: flex;
  justify-content: ${(props) => props.direction};
`
