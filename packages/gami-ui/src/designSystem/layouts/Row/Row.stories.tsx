import React from 'react'
import { Meta } from '@storybook/react'

import Row from '.'
import Col from '../Col'
import { defaultTheme } from 'styles/tokens'

export default {
  title: 'Layout/Row',
  component: Row,
  args: {},
  argTypes: {},
} as Meta

export const Basic = (args: any) => (
  <Row {...args}>
    <Col spacing="sm">
      <p
        style={{
          background: defaultTheme.light.primary.jordyBlue,
          color: defaultTheme.light.neutral[800],
          padding: '16px',
        }}
      >
        1
      </p>
    </Col>

    <Col spacing="sm">
      <p
        style={{
          background: defaultTheme.light.primary.jordyBlue,
          color: defaultTheme.light.neutral[800],
          padding: '16px',
        }}
      >
        2
      </p>
    </Col>

    <Col spacing="sm">
      <p
        style={{
          background: defaultTheme.light.primary.jordyBlue,
          color: defaultTheme.light.neutral[800],
          padding: '16px',
        }}
      >
        3
      </p>
    </Col>

    <Col spacing="sm">
      <p
        style={{
          background: defaultTheme.light.primary.jordyBlue,
          color: defaultTheme.light.neutral[800],
          padding: '16px',
        }}
      >
        4
      </p>
    </Col>
  </Row>
)
Basic.args = {}
