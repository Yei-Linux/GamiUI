import React from 'react'
import { Meta } from '@storybook/react'

import FeaturedCard from '.'

export default {
  title: 'Molecules/FeaturedCard',
  component: FeaturedCard,
  args: { ...FeaturedCard.defaultProps },
  argTypes: {},
} as Meta

export const Basic = (args: any) => <FeaturedCard {...args} />
Basic.args = {}
