import React, { useState } from 'react'
import { Meta } from '@storybook/react'

import Chat from '.'

export default {
  title: 'Molecules/Chat',
  component: Chat,
  args: {},
  argTypes: {},
} as Meta

export const Basic = () => {
  const [messages, setMessages] = useState<any>([
    {
      isMe: false,
      author: {
        username: 'Lucas',
        id: '464eaa3c-1159-499a-b862-2da7a04930f8',
        avatarUrl: 'https://www.nretnil.com/avatar/LawrenceEzekielAmos.png',
      },
      textDetail: [
        {
          type: 'text',
          text: 'Hi, im a newbie dev',
          timestamp: 1578366389250,
        },
      ],
    },
    {
      isMe: true,
      author: null,
      textDetail: [
        {
          type: 'text',
          text: 'Hey man, me too',
          timestamp: 1578366389250,
        },
      ],
    },
    {
      isMe: false,
      author: {
        username: 'Lucas',
        id: '464eaa3c-1159-499a-b862-2da7a04930f8',
        avatarUrl: 'https://www.nretnil.com/avatar/LawrenceEzekielAmos.png',
      },
      textDetail: [
        {
          type: 'text',
          text: 'This course is so interesting',
          timestamp: 1578366389250,
        },
        {
          type: 'text',
          text: 'i will expect learn too much about styled components',
          timestamp: 1578366389250,
        },
      ],
    },
  ])

  const onSubmitMessage = (value: string): any => {
    setMessages([
      ...messages,
      {
        isMe: true,
        author: null,
        textDetail: [
          {
            type: 'text',
            text: value,
            timestamp: 1578366389250,
          },
        ],
      },
    ])
  }

  return (
    <div style={{ maxWidth: '400px' }}>
      <Chat messages={messages} onSubmitMessage={onSubmitMessage} />
    </div>
  )
}
