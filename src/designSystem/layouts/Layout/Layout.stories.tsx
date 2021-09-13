import React from 'react'
import { Meta } from '@storybook/react'

import Layout from '.'

export default {
  title: 'Layout/Layout',
  component: Layout,
  args: { },
  argTypes: {},
} as Meta

export const Basic = (args: any) => (
  <Layout {...args}>
    <Layout.Header>This is my header</Layout.Header>
    <Layout.Content>
      <div>This is my content</div>
    </Layout.Content>
    <Layout.Footer>This is my footer</Layout.Footer>
  </Layout>
)
Basic.args = {}
