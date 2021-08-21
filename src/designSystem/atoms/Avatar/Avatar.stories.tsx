import React from 'react'
import { Meta } from '@storybook/react'

import Avatar from '.'
import Icon from '../Icon'

export default {
  title: 'Atoms/Avatar',
  component: Avatar,
  args: {},
  argTypes: {},
} as Meta

export const WithSrc = (args: any) => <Avatar {...args} />
WithSrc.args = {
  src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPegjNNBzO3-k5t6hTm1htv1kxyWSOtCRr3A&usqp=CAU',
}

export const WithText = (args: any) => <Avatar {...args} />
WithText.args = {
  text: 'Yei Linux',
  style: { color: 'white' },
}

export const WithIcon = (args: any) => <Avatar {...args} />
WithIcon.args = {
  icon: <Icon fill="white" size="25px" name="facebook" />,
}
