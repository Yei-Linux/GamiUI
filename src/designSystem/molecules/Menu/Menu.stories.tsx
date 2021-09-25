import React from 'react'
import { Meta } from '@storybook/react'

import Menu from '.'
import Icon from '../../atoms/Icon'

export default {
  title: 'Molecules/Menu',
  component: Menu,
  args: {},
  argTypes: {},
} as Meta

export const Basic = (args: any) => (
  <Menu {...args}>
    <Menu.SubMenu
      isOpen
      title="Home"
      href="/"
      icon={<Icon name="submit" />}
    ></Menu.SubMenu>
    <Menu.SubMenu
      title="Courses"
      href="/courses"
      icon={<Icon name="submit" />}
    ></Menu.SubMenu>
    <Menu.SubMenu
      title="Exams"
      href="/exams"
      icon={<Icon name="submit" />}
    ></Menu.SubMenu>
  </Menu>
)
Basic.args = {}
