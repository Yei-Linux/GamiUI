import React from 'react'
import { Meta } from '@storybook/react'

import World from '.'
import CanvasProvider from '../../../context/CanvasProvider'

export default {
  title: 'Game/World',
  component: World,
  args: {},
  decorators: [
    (Story) => (
      <CanvasProvider>
        <Story />
      </CanvasProvider>
    ),
  ],
  argTypes: {},
} as Meta

export const Basic = (args: any) => <World {...args} />
Basic.args = {}
