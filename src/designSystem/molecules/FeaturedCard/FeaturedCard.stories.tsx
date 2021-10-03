import React from 'react'
import { Meta } from '@storybook/react'

import FeaturedCard from '.'

export default {
  title: 'Molecules/FeaturedCard',
  component: FeaturedCard,
  args: {},
  argTypes: {},
} as Meta

export const BasicVertical = (args: any) => <FeaturedCard {...args} />
BasicVertical.args = {}

export const BasicHorizontal = (args: any) => <FeaturedCard {...args} />
BasicHorizontal.args = {
  themeType: 'warm',
  iconId: 'preview',
  direction: 'vertical',
  iconSize: '40px',
}
