import React from 'react'
import { Meta } from '@storybook/react'

import Gradient from '.'
import Card from '../../molecules/Card'
import { options as optionsGradient } from './constants'

export default {
  title: 'Styled/Gradient',
  component: Gradient,
  argTypes: {
    name: { control: { type: 'select', options: optionsGradient.names } },
  },
} as Meta

export const Basic = (args: any) => (
  <div
    style={{
      width: '100%',
      background:
        'url(https://res.cloudinary.com/edapp/images/w_680,h_350,c_fill,g_auto/v1615782673/wordpress/production/staff-learning-with-gamification/staff-learning-with-gamification-680x350.jpg) no-repeat center center',
      backgroundSize: 'cover',
      display: 'flex',
      justifyContent: 'center',
      padding: '1rem',
      flexWrap: 'wrap',
    }}
  >
    <Gradient {...args}>
      <Card>
        <p style={{ padding: '1rem' }}>Hola como estas</p>
      </Card>
    </Gradient>
  </div>
)
Basic.args = {}
