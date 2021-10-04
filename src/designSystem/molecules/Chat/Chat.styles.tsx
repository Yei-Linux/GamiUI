import styled from '@emotion/styled'
import { mixinFlexVariants } from 'styles/mixins/flex'
import { spacing, theme } from 'styles/tokens'
import { ScrollBar } from 'styles/utilities/commonComponent'

const HEIGHT = '300px'

export const Chat = styled.div`
  background-color: ${theme.light.neutral[700]};
  min-width: fit-content;
  padding: ${spacing.padding.md};
`

export const ChatContent = styled.div`
  height: ${HEIGHT};
  padding: 0 1rem;
  ${ScrollBar()}
`

export const ChatTyping = styled.div`
  ${mixinFlexVariants({ justifyContent: 'center' })}
`

export const ChatUser = styled.div``

export const ChatUserAvatar = styled.div`
  padding: 0 1rem 0 0;
`

export const ChatUserMessages = styled.div`
  max-width: fit-content;
`

export const ChatUserMessageContent = styled.div<{ $direction: string }>`
  display: flex;
  justify-content: ${({ $direction }) => $direction};
`
