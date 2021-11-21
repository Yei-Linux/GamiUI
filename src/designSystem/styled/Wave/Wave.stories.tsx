import React from 'react'
import { Meta } from '@storybook/react'

import Wave from '.'
import { options as optionsWave } from './constants'

export default {
  title: 'Styled/Wave',
  component: Wave,
  args: {},
  argTypes: {
    name: { control: { type: 'select', options: optionsWave.names } },
  },
} as Meta

export const Basic = () => (
  <Wave direction="top" isWaveLikeBackground>
    <div style={{ height: '300px', width: '100%', backgroundColor: '#7f9cf5' }}>
      Text for test
    </div>
  </Wave>
)

export const LikeBackground = () => (
  <Wave direction="top" isWaveLikeBackground>
    <div style={{ height: '300px', width: '100%', backgroundColor: '#7f9cf5' }}>
      Text for test
    </div>
  </Wave>
)
