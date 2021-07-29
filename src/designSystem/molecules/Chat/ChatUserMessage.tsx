import React, { Fragment } from 'react'
import { isLastOne } from '../../../core/helpers/validations.helper'
import { colorLight } from '../../../styles/theme'
import Avatar from '../../atoms/Avatar'
import Message from '../../atoms/Message'
import Row from '../../layouts/Row'
import Spacer from '../../layouts/Spacer'
import { IMessage, ITextDetail } from './Chat'
import {
  ChatUserContainer,
  ChatUserAvatar,
  ChatUserMessages,
  ChatUserMessageContainer,
} from './Chat.styles'

export interface ChatUserMessageProps {
  message: IMessage
}

const ChatUserMessage = ({ message }: ChatUserMessageProps) => {
  return (
    <ChatUserContainer>
      <Row
        alignItems="flex-end"
        justifyContent={message?.isMe ? 'flex-end' : 'flex-start'}
        isWrap={false}
      >
        {message?.author && (
          <ChatUserAvatar>
            <Avatar src={message?.author?.avatarUrl} />
          </ChatUserAvatar>
        )}

        <ChatUserMessages>
          {message?.textDetail?.map(
            (textDetail: ITextDetail, index: number) => (
              <Fragment key={index}>
                <ChatUserMessageContainer
                  direction={message?.isMe ? 'flex-end' : 'flex-start'}
                >
                  <Message
                    color={
                      !message?.isMe ? colorLight.secondary.three : 'white'
                    }
                    maxWidth="none"
                    background={
                      message?.isMe ? colorLight.secondary.three : 'white'
                    }
                    heigth="NORMAL"
                    width="NORMAL"
                    text={textDetail?.text}
                    border="MEDIUM"
                    hasMarker={false}
                    shadow="MEDIUM"
                  />
                </ChatUserMessageContainer>

                {!isLastOne(message?.textDetail?.length, index) && (
                  <Spacer customSize="5px" direction="bottom" />
                )}
              </Fragment>
            )
          )}
        </ChatUserMessages>
      </Row>
    </ChatUserContainer>
  )
}

export default ChatUserMessage
