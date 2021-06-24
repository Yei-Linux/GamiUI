import React from 'react'
import { Meta } from '@storybook/react'

import Sider from '.'
import Layout from '../Layout'
import Row from '../Row'
import Menu from '../../molecules/Menu'
import Icon from '../../atoms/Icon'

export default {
  title: 'Layout/Sider',
  component: Sider,
  args: { ...Sider.defaultProps },
  argTypes: {},
} as Meta

export const Basic = (args: any) => (
  <Row isWrap={false}>
    <Sider {...args}>
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
    </Sider>

    <Layout>
      <Layout.Header>This is my header</Layout.Header>
      <Layout.Content>
        <div>This is my content</div>
      </Layout.Content>
      <Layout.Footer>This is my footer</Layout.Footer>
    </Layout>
  </Row>
)

Basic.args = {}
