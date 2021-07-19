import React from 'react'
import { ChatWrapper } from './Chat.styles'

export interface IChat {
  prop?: any
}

const Chat = () => {
  return <ChatWrapper />
}

Chat.defaultProps = {}

export default Chat
