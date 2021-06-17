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
  const [open, setOpen] = useState(true)

  return (
    <div>
      <Button width="SMALL" onClick={() => setOpen(!open)}>
        Open Drawer
      </Button>
      <Drawer open={open} {...args}>
        <p>Hey, whats up</p>
      </Drawer>
    </div>
  )
}
Basic.args = {
  width: '400px',
  height: '100%',
}
