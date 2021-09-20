import React, { Fragment } from 'react'

import { isLastOne } from 'core/helpers/validations.helper'

import Avatar from 'designSystem/atoms/Avatar'
import Message from 'designSystem/atoms/Message'
import Row from 'designSystem/layouts/Row'
import Spacer from 'designSystem/layouts/Spacer'

import { IMessage, ITextDetail } from './Chat'
import * as S from './Chat.styles'
import { theme } from 'styles/tokens'

export interface ChatUserMessageProps {
  message: IMessage
}

const ChatUserMessage = ({ message }: ChatUserMessageProps) => {
  return (
    <S.ChatUser>
      <Row
        alignItems="flex-end"
        justifyContent={message?.isMe ? 'flex-end' : 'flex-start'}
        isWrap={false}
      >
        {message?.author && (
          <S.ChatUserAvatar>
            <Avatar src={message?.author?.avatarUrl} />
          </S.ChatUserAvatar>
        )}

        <S.ChatUserMessages>
          {message?.textDetail?.map(
            (textDetail: ITextDetail, index: number) => (
              <Fragment key={index}>
                <S.ChatUserMessageContent
                  $direction={message?.isMe ? 'flex-end' : 'flex-start'}
                >
                  <Message
                    color={
                      !message?.isMe
                        ? theme.light.secondary.oxfordBlue
                        : 'white'
                    }
                    maxWidth="none"
                    background={
                      message?.isMe ? theme.light.secondary.oxfordBlue : 'white'
                    }
                    heigth="auto"
                    width="auto"
                    text={textDetail?.text}
                    border="md"
                    hasMarker={false}
                    shadow="md"
                  />
                </S.ChatUserMessageContent>

                {!isLastOne(message?.textDetail?.length, index) && (
                  <Spacer customSize="5px" direction="bottom" />
                )}
              </Fragment>
            )
          )}
        </S.ChatUserMessages>
      </Row>
    </S.ChatUser>
  )
}

export default ChatUserMessage
