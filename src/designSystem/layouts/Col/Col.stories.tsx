import React from 'react'
import { Meta } from '@storybook/react'

import Col from '.'
import Row from '../Row'
import { colorLight } from '../../../styles/theme'

export default {
  title: 'Layout/Col',
  component: Col,
  args: { ...Col.defaultProps },
  argTypes: {},
} as Meta

export const Basic = (args: any) => (
  <Row>
    <Col {...args}>
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

    <Col {...args}>
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

    <Col {...args}>
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

    <Col {...args}>
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
Basic.args = {
  spacing: 'sm',
  xs: 12,
  sm: 6,
  md: 4,
  lg: 3,
}