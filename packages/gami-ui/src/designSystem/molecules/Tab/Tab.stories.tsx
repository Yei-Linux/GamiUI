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
  <Tab
    defaultActiveTab={{
      index: 0,
      tabId: 'first',
    }}
  >
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

export const WithSuffix = () => (
  <Tab
    width="100%"
    defaultActiveTab={{
      index: 0,
      tabId: 'first',
    }}
  >
    <Tab.List suffixContent={<div>Suffix Content</div>}>
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

export const WithPreffix = () => (
  <Tab
    width="100%"
    defaultActiveTab={{
      index: 0,
      tabId: 'first',
    }}
  >
    <Tab.List preffixContent={<div>Preffix Content</div>}>
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

export const WithPreffixSuffix = () => (
  <Tab
    width="100%"
    defaultActiveTab={{
      index: 0,
      tabId: 'first',
    }}
  >
    <Tab.List
      preffixContent={<div>Preffix Content</div>}
      suffixContent={<div>Suffix Content</div>}
    >
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
