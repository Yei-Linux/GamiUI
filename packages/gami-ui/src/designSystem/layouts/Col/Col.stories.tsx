import React from 'react'
import { Meta } from '@storybook/react'

import Col from '.'
import Row from '../Row'
import { defaultTheme } from 'styles/tokens'
export default {
  title: 'Layout/Col',
  component: Col,
  args: {},
  argTypes: {},
} as Meta

export const Basic = (args: any) => (
  <Row>
    <Col {...args}>
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

    <Col {...args}>
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

    <Col {...args}>
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

    <Col {...args}>
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
Basic.args = {
  spacing: 'sm',
  xs: 12,
  sm: 6,
  md: 4,
  lg: 3,
}
