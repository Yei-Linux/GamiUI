import React from 'react'
import { Meta } from '@storybook/react'

import Transition from '.'
import Mask from '../../atoms/Mask'
import Title from 'designSystem/atoms/Title'

export default {
  title: 'Styled/Transition',
  component: Transition,
  args: {},
  argTypes: {},
} as Meta

export const Ease = (args: any) => {
  return (
    <Transition {...args}>
      <Title level="h3" style={{ position: 'absolute' }}>
        Hi, this a test
      </Title>
    </Transition>
  )
}
Ease.args = {
  isReadyToInitAnimation: true,
  to: {
    ease: 'elastic.out(1,0.3)',
    duration: 2.5,
    delay: 0,
    position: { axis: 'xPercent', value: 100 },
  },
}

export const Opacity = (args: any) => {
  return (
    <Transition {...args}>
      <div>
        <Mask />
      </div>
    </Transition>
  )
}

Opacity.args = {
  isReadyToInitAnimation: true,
  from: {
    duration: 15,
    opacity: 0.01,
  },
  to: {
    opacity: 1,
  },
}
