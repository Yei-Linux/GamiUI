import React from 'react'
import { Meta } from '@storybook/react'

import Tag from '.'

export default {
  title: 'Atoms/Tag',
  component: Tag,
  args: {},
  argTypes: {},
} as Meta

export const WithOnlyText = (args: any) => <Tag {...args} />
WithOnlyText.args = {
  text: 'Multiplayer',
  background: 'transparent',
}

export const WithMarker = (args: any) => <Tag {...args} />
WithMarker.args = {
  text: 'Online',
  ballMarkerColor: 'green',
}
