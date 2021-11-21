import React from 'react'
import { Meta } from '@storybook/react'

import Link from '.'

export default {
  title: 'Atoms/Link',
  component: Link,
  args: {},
  argTypes: {},
} as Meta

export const Basic = (args: any) => <Link {...args} />
Basic.args = {
  text: 'Im link',
  href: 'www.google.com',
}

export const WithChildren = () => (
  <Link href="www.google.com" type="text">
    <p>Testing link component</p>
  </Link>
)
