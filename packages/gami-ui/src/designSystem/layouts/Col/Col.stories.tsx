import React from 'react'
import { Meta, ComponentStory } from '@storybook/react'
import { TJSXElements } from 'core/domain/interfaces/common'

import { storyConfig } from './storyConfig'
import Col from '.'
import Row from 'designSystem/layouts/Row'
import RichText from 'designSystem/atoms/RichText'
import { defaultTheme } from 'styles/tokens'

const { mainConfig } = storyConfig

export default mainConfig as Meta

/**
 * Custom Stories
 * @param args
 * @returns
 */

const StorySizes = (args: any) => (
  <Row>
    <Col xs={12} sm={6} md={4} lg={3} spacing="sm" {...args}>
      <RichText
        style={{
          background: defaultTheme.light.primary.jordyBlue,
          color: defaultTheme.light.neutral[800],
          padding: '16px',
        }}
        text="1"
      />
    </Col>

    <Col xs={12} sm={6} md={4} lg={3} spacing="sm" {...args}>
      <RichText
        style={{
          background: defaultTheme.light.primary.jordyBlue,
          color: defaultTheme.light.neutral[800],
          padding: '16px',
        }}
        text="2"
      />
    </Col>

    <Col xs={12} sm={6} md={4} lg={3} spacing="sm" {...args}>
      <RichText
        style={{
          background: defaultTheme.light.primary.jordyBlue,
          color: defaultTheme.light.neutral[800],
          padding: '16px',
        }}
        text="3"
      />
    </Col>

    <Col xs={12} sm={6} md={4} lg={3} spacing="sm" {...args}>
      <RichText
        style={{
          background: defaultTheme.light.primary.jordyBlue,
          color: defaultTheme.light.neutral[800],
          padding: '16px',
        }}
        text="4"
      />
    </Col>
  </Row>
)
export const StorySizesTemplate: ComponentStory<TJSXElements> = StorySizes.bind(
  {}
)
StorySizesTemplate.storyName = 'With Sizes And Spacing 🙂'
StorySizesTemplate.args = {
  spacing: 'sm',
}
