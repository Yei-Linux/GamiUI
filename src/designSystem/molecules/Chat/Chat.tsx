import React, { Fragment, useState } from 'react'
import Icon from '../../atoms/Icon'
import Input from '../../atoms/Input'
import Spacer from '../../layouts/Spacer'
import { ChatContainer, ChatTyping, ChatWrapper } from './Chat.styles'
import ChatUserMessage from './ChatUserMessage'

interface IAuthor {
  username: string
  id: string
  avatarUrl?: string
}

export interface ITextDetail {
  type: string
  text: string
  timestamp: number
}

export interface IMessage {
  isMe: boolean
  author?: IAuthor
  textDetail: ITextDetail[]
}

export interface IChat {
  messages: IMessage[]
  onSubmitMessage: (value: string) => any
}

const Chat = ({ messages, onSubmitMessage }: IChat) => {
  const [typeValue, setTypeValue] = useState('')

  const clearTypeValue = () => setTypeValue('')

  return (
    <ChatWrapper>
      <ChatContainer>
        {messages?.map((message: IMessage, index: number) => (
          <Fragment key={index}>
            <ChatUserMessage message={message} />
            <Spacer direction="bottom" />
          </Fragment>
        ))}
      </ChatContainer>

      <ChatTyping>
        <Input
          width="FULL"
          name="chat__input"
          value={typeValue}
          onChangeFormItem={setTypeValue}
          placeholder="Type something"
          prefix={
            <Icon
              name="send"
              onClick={() => {
                clearTypeValue()
                onSubmitMessage(typeValue)
              }}
            />
          }
          positionPrefix="right"
        ></Input>
      </ChatTyping>
    </ChatWrapper>
  )
}

Chat.defaultProps = {}

export default Chat
