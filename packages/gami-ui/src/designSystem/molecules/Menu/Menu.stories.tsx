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
      title="Documentation"
      hasIcon={false}
      contentLeft={<Icon name="bullet__item" />}
    ></Menu.SubMenu>
    <Menu.SubMenu
      isOpen
      title="Home"
      contentLeft={<Icon name="bullet__item" />}
    ></Menu.SubMenu>
    <Menu.SubMenu
      isOpen
      title="Home"
      href="/"
      contentLeft={<Icon name="bullet__item" />}
    ></Menu.SubMenu>
    <Menu.SubMenu
      title="Courses"
      href="/courses"
      contentLeft={<Icon name="bullet__item" />}
    ></Menu.SubMenu>
    <Menu.SubMenu
      title="Exams"
      href="/exams"
      contentLeft={<Icon name="bullet__item" />}
    ></Menu.SubMenu>
  </Menu>
)
Basic.args = {}
