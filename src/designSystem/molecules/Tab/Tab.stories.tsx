import React from 'react'
import { Meta } from '@storybook/react'

import Tab from '.'

export default {
  title: 'Molecules/Tab',
  component: Tab,
  args: {},
  argTypes: {},
} as Meta

export const Basic = () => (
  <Tab defaultActiveTab="first">
    <Tab.List>
      <Tab.ListItem label="First Tab" tabId="first" />
      <Tab.ListItem label="Second Tab" tabId="second" />
    </Tab.List>
    <Tab.Content>
      <Tab.ContentItem tabId="first">
        <p>Hola1</p>
      </Tab.ContentItem>
      <Tab.ContentItem tabId="second">
        <p>Hola2</p>
      </Tab.ContentItem>
    </Tab.Content>
  </Tab>
)
