import React, { useState } from 'react'
import { Meta } from '@storybook/react'

import Drawer from '.'
import Button from '../../atoms/Button'

export default {
  title: 'Molecules/Drawer',
  component: Drawer,
  args: { ...Drawer.defaultProps },
  argTypes: {},
} as Meta

export const Basic = (args: any) => {
  const [open, setOpen] = useState(false)

  const toggle = () => setOpen(!open)

  return (
    <div>
      <Button width="SMALL" onClick={toggle}>
        Open Drawer
      </Button>
      <Drawer {...args} onClose={toggle} open={open}>
        <p>Hey, whats up</p>
      </Drawer>
    </div>
  )
}
Basic.args = {
  width: '400px',
  height: '100%',
}
