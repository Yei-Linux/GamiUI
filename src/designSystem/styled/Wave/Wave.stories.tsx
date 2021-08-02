import React from 'react'
import { Meta } from '@storybook/react'

import Wave from '.'
import { options as optionsWave } from './constants'

export default {
  title: 'Styled/Wave',
  component: Wave,
  args: { ...Wave.defaultProps },
  argTypes: {
    name: { control: { type: 'select', options: optionsWave.names } },
  },
} as Meta

export const Basic = (args: any) => (
  <Wave {...args}>
    <div
      style={{ height: '300px', width: '100%', backgroundColor: '#7f9cf5' }}
    />
  </Wave>
)
Basic.args = {}

export const LikeBackground = (args: any) => (
  <Wave {...args}>
    <div style={{ height: '300px', width: '100%' }}>Hii</div>
  </Wave>
)
LikeBackground.args = {
  isWaveLikeBackground: true,
}
