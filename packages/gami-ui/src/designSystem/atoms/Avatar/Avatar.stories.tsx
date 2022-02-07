import React from 'react'
import { Meta } from '@storybook/react'

import Avatar from '.'
import Icon from '../Icon'
import { IAvatar } from './Avatar'
import { avatarProfilesImages } from './constants'
import { getTemplate } from 'core/helpers/storybook.helper'

export default {
  title: 'Atoms/Avatar',
  component: Avatar,
  args: {},
  argTypes: {},
} as Meta

const Template = getTemplate(Avatar)

export const WithImage = Template.bind({})
WithImage.args = {
  zoomMode: 'inside',
  src: avatarProfilesImages.one,
}

export const WithText = (args: IAvatar) => <Avatar {...args} />
WithText.args = {
  text: 'Yei Linux',
  style: { color: 'white' },
}

export const WithIcon = (args: IAvatar) => <Avatar {...args} />
WithIcon.args = {
  icon: <Icon fill="none" size="25px" name="facebook__transparent" />,
}
