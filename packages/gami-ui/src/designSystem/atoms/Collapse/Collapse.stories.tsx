import React from 'react'
import { Meta } from '@storybook/react'

import Collapse from '.'
import Menu from 'designSystem/molecules/Menu'
import Icon from '../Icon'

export default {
  title: 'Atoms/Collapse',
  component: Collapse,
  args: {},
  argTypes: {},
} as Meta

export const Basic = (args: any) => <Collapse {...args} />
Basic.args = {
  title: 'Test',
  children: (
    <Menu>
      <Menu.SubMenu
        isOpen
        title="Home"
        contentLeft={<Icon name="bullet__item" />}
      ></Menu.SubMenu>
    </Menu>
  ),
}

export const Group = () => (
  <div>
    <Collapse title="Item1">
      <Menu>
        <Menu.SubMenu
          isOpen
          title="Home"
          contentLeft={<Icon name="bullet__item" />}
        ></Menu.SubMenu>
      </Menu>
    </Collapse>
    <Collapse title="Item2" subtitle="Subtitle">
      <Menu>
        <Menu.SubMenu
          isOpen
          title="Home"
          contentLeft={<Icon name="bullet__item" />}
        ></Menu.SubMenu>
      </Menu>
    </Collapse>
  </div>
)
