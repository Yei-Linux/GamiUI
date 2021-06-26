import React from 'react'
import { Meta } from '@storybook/react'

import Row from '.'
import Col from '../Col'
import { colorLight } from '../../../styles/theme'

export default {
  title: 'Layout/Row',
  component: Row,
  args: { ...Row.defaultProps },
  argTypes: {},
} as Meta

export const Basic = (args: any) => (
  <Row {...args}>
    <Col spacing="sm">
      <p
        style={{
          background: colorLight.primary.one,
          color: colorLight.neutral.nine,
          padding: '16px',
        }}
      >
        1
      </p>
    </Col>

    <Col spacing="sm">
      <p
        style={{
          background: colorLight.primary.one,
          color: colorLight.neutral.nine,
          padding: '16px',
        }}
      >
        2
      </p>
    </Col>

    <Col spacing="sm">
      <p
        style={{
          background: colorLight.primary.one,
          color: colorLight.neutral.nine,
          padding: '16px',
        }}
      >
        3
      </p>
    </Col>

    <Col spacing="sm">
      <p
        style={{
          background: colorLight.primary.one,
          color: colorLight.neutral.nine,
          padding: '16px',
        }}
      >
        4
      </p>
    </Col>
  </Row>
)
Basic.args = {}
