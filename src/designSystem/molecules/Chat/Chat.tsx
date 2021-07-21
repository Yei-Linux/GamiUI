import React from 'react'
import { colorLight } from '../../../styles/theme'
import Avatar from '../../atoms/Avatar'
import Icon from '../../atoms/Icon'
import Input from '../../atoms/Input'
import Message from '../../atoms/Message'
import Row from '../../layouts/Row'
import Spacer from '../../layouts/Spacer'
import {
  ChatContainer,
  ChatTyping,
  ChatUserAvatar,
  ChatUserContainer,
  ChatUserMessageContainer,
  ChatUserMessages,
  ChatWrapper,
} from './Chat.styles'

export interface IChat {
  prop?: any
}

const Chat = () => {
  return (
    <ChatWrapper>
      <ChatContainer>
        <ChatUserContainer>
          <Row alignItems="flex-end" justifyContent="flex-start" isWrap={false}>
            <ChatUserAvatar>
              <Avatar />
            </ChatUserAvatar>
            <ChatUserMessages>
              <ChatUserMessageContainer direction="flex-start">
                <Message
                  color="black"
                  maxWidth="none"
                  background="white"
                  heigth="NORMAL"
                  width="NORMAL"
                  text="Im a newbie"
                  border="ROUNDED"
                  hasMarker={false}
                  shadow="MEDIUM"
                />
              </ChatUserMessageContainer>
              <Spacer customSize="5px" direction="bottom" />

              <ChatUserMessageContainer direction="flex-start">
                <Message
                  color="black"
                  maxWidth="none"
                  background="white"
                  heigth="NORMAL"
                  width="NORMAL"
                  text="Love this course.. Hello"
                  border="ROUNDED"
                  hasMarker={false}
                  shadow="MEDIUM"
                />
              </ChatUserMessageContainer>
            </ChatUserMessages>
          </Row>
        </ChatUserContainer>

        <Spacer direction="bottom" />

        <ChatUserContainer>
          <Row alignItems="flex-end" justifyContent="flex-end" isWrap={false}>
            <ChatUserMessages>
              <ChatUserMessageContainer direction="flex-end">
                <Message
                  maxWidth="none"
                  background={colorLight.secondary.three}
                  heigth="NORMAL"
                  width="NORMAL"
                  text="Hey!"
                  border="ROUNDED"
                  hasMarker={false}
                  shadow="MEDIUM"
                />
              </ChatUserMessageContainer>

              <Spacer customSize="5px" direction="bottom" />

              <ChatUserMessageContainer direction="flex-end">
                <Message
                  maxWidth="none"
                  background={colorLight.secondary.three}
                  heigth="NORMAL"
                  width="NORMAL"
                  text="Dope introduction, thanks"
                  border="ROUNDED"
                  hasMarker={false}
                  shadow="MEDIUM"
                />
              </ChatUserMessageContainer>
            </ChatUserMessages>
          </Row>
        </ChatUserContainer>

        <Spacer direction="bottom" />
      </ChatContainer>
      <ChatTyping>
        <Input
          placeholder="Type something"
          prefix={<Icon name="send" />}
          positionPrefix="right"
        ></Input>
      </ChatTyping>
    </ChatWrapper>
  )
}

Chat.defaultProps = {}

export default Chat
