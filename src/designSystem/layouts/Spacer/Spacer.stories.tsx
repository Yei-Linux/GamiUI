import React from 'react'
import { Meta } from '@storybook/react'

import Spacer from '.'
import Avatar from '../../atoms/Avatar'
import Row from '../Row'
import Col from '../Col'

export default {
  title: 'Layout/Spacer',
  component: Spacer,
  args: {},
  argTypes: {},
} as Meta

export const Basic = (args: any) => (
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <Row>
      <Col spacing="none">
        <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPegjNNBzO3-k5t6hTm1htv1kxyWSOtCRr3A&usqp=CAU" />
      </Col>
      <Spacer {...args} />
      <Col spacing="none">
        <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPegjNNBzO3-k5t6hTm1htv1kxyWSOtCRr3A&usqp=CAU" />
      </Col>
    </Row>
  </div>
)
Basic.args = {
  direction: 'right',
}
