import React from 'react'
import { Meta } from '@storybook/react'

import Video from '.'

export default {
  title: 'Molecules/Video',
  component: Video,
  args: { ...Video.defaultProps },
  argTypes: {},
} as Meta

export const Basic = (args: any) => (
  <div style={{ maxWidth: '500px', height: '300px' }}>
    <Video {...args} />
  </div>
)
Basic.args = {}
