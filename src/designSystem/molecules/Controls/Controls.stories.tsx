import React from 'react'
import { Meta } from '@storybook/react'

import Controls from '.'

export default {
  title: 'Molecules/Controls',
  component: Controls,
  args: { ...Controls.defaultProps },
  argTypes: {},
} as Meta

export const Basic = () => (
  <Controls
    controlItems={[
      <p key="1">1</p>,
      <p key="2">2</p>,
      <p key="3">3</p>,
      <p key="4">4</p>,
      <p key="5">5</p>,
      <p key="6">6</p>,
      <p key="7">7</p>,
    ]}
    controlTitle="My questions"
  />
)
