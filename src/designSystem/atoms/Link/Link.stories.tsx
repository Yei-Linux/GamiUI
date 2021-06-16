import React from 'react'
import { Meta } from '@storybook/react'

import Link from '.'

export default {
  title: 'Atoms/Link',
  component: Link,
  args: { ...Link.defaultProps },
  argTypes: {},
} as Meta

export const Basic = (args: any) => <Link {...args} />
Basic.args = {
  text: 'Im link',
  href: 'www.google.com'
}
