import React from 'react'
import { Meta } from '@storybook/react'

import ProgressBar from '.'
import Row from '../../layouts/Row'

export default {
  title: 'Atoms/ProgressBar',
  component: ProgressBar,
  args: {},
  argTypes: {},
} as Meta

export const Basic = (args: any) => (
  <Row height="auto" style={{ maxWidth: '250px' }}>
    <ProgressBar {...args} />
  </Row>
)
Basic.args = {
  percent: 50,
}
