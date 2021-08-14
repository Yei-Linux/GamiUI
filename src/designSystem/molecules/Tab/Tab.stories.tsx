import React from 'react'
import { Meta } from '@storybook/react'

import Tab from '.'
import TabContentItem from './TabContentItem'

export default {
  title: 'Molecules/Tab',
  component: Tab,
  args: { ...Tab.defaultProps },
  argTypes: {},
} as Meta

export const Basic = () => (
  <Tab defaultActiveTab="first">
    <Tab.List>
      <Tab.ListItem label="First Tab" tabId="first" />
      <Tab.ListItem label="Second Tab" tabId="second" />
    </Tab.List>
    <Tab.Content>
      <TabContentItem tabId="first">
        <p>Hola1</p>
      </TabContentItem>
      <TabContentItem tabId="second">
        <p>Hola2</p>
      </TabContentItem>
    </Tab.Content>
  </Tab>
)
