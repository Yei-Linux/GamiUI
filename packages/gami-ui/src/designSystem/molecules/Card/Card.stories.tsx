import React from 'react'
import { Meta } from '@storybook/react'

import Card from '.'
import Button from '../../atoms/Button'
import RichText from 'designSystem/atoms/RichText'

export default {
  title: 'Molecules/Card',
  component: Card,
  args: {},
  argTypes: {},
} as Meta

export const Basic = (args: any) => (
  <Card {...args}>
    <p style={{ padding: '1rem' }}>Hola como estas</p>
  </Card>
)

Basic.args = {
  width: 'fit',
  shadow: 'xs',
  rounded: 'xs',
}

export const Content = (args: any) => (
  <Card {...args}>
    <Card.Content
      title={<RichText text="**Hi, this is my title**" />}
      description="Hi this is description"
    />
  </Card>
)

Content.args = {
  width: 'fit',
  shadow: 'xs',
  rounded: 'xs',
}

export const Cover = (args: any) => (
  <Card {...args}>
    <Card.Cover>
      <img
        width="100%"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    </Card.Cover>
    <Card.Content
      title="Hi this is title"
      description="Hi this is description"
    />
  </Card>
)

Cover.args = {
  width: 'fit',
  shadow: 'xs',
  rounded: 'xs',
}

export const Footer = (args: any) => (
  <Card {...args}>
    <Card.Cover>
      <img
        width="100%"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    </Card.Cover>
    <Card.Content
      title="Hi this is title"
      description="Hi this is description"
    />
    <Card.Footer>
      <Button
        type="button"
        rounded="sm"
        height="auto"
        variant="secondary"
        width="auto"
      >
        Text
      </Button>
    </Card.Footer>
  </Card>
)

Footer.args = {
  width: 'fit',
  shadow: 'xs',
  rounded: 'xs',
}
