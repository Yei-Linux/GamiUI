import React, { Fragment, useState } from 'react'

import Icon from 'designSystem/atoms/Icon'
import Input from 'designSystem/atoms/Input/Input'
import Spacer from 'designSystem/layouts/Spacer'

import ChatUserMessage from './ChatUserMessage'
import * as S from './Chat.styles'

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
  /**
   * Messages to show on chat
   */
  messages: IMessage[]
  /**
   * Action to execute on send message
   */
  onSubmitMessage: (value: string) => void
}

const Chat = ({ messages, onSubmitMessage }: IChat) => {
  const [typeValue, setTypeValue] = useState('')

  const clearTypeValue = () => setTypeValue('')

  const putTypeValue = (value: string) => setTypeValue(value)

  const handleClickSubmitMessageIcon = () => {
    clearTypeValue()
    onSubmitMessage(typeValue)
  }

  return (
    <S.Chat>
      <S.ChatContent>
        {messages?.map((message: IMessage, index: number) => (
          <Fragment key={index}>
            <ChatUserMessage message={message} />
            <Spacer direction="bottom" />
          </Fragment>
        ))}
      </S.ChatContent>

      <S.ChatTyping>
        <Input
          width="full"
          name="chat__input"
          value={typeValue}
          onChangeFormItem={putTypeValue}
          placeholder="Type something"
          prefix={<Icon name="send" onClick={handleClickSubmitMessageIcon} />}
          positionPrefix="right"
        ></Input>
      </S.ChatTyping>
    </S.Chat>
  )
}

export default Chat
