import React from 'react'
import { Meta } from '@storybook/react'

import Spacer from '.'
import Avatar from '../../atoms/Avatar'

export default {
  title: 'Layout/Spacer',
  component: Spacer,
  args: { ...Spacer.defaultProps },
  argTypes: {},
} as Meta

export const Basic = (args: any) => (
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPegjNNBzO3-k5t6hTm1htv1kxyWSOtCRr3A&usqp=CAU" />
    <Spacer {...args} />
    <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPegjNNBzO3-k5t6hTm1htv1kxyWSOtCRr3A&usqp=CAU" />
  </div>
)
Basic.args = {
  direction: 'right',
}
