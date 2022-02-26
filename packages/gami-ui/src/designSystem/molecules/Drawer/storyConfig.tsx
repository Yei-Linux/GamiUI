import React, { useState } from 'react'
import {
  getInheritGlobalStylesStories,
  getStoryConfigStructure,
} from 'core/helpers/storybook.helper'
import Drawer from '.'
import { IStoryMainConfig } from 'core/domain/interfaces/IStorybook'
import Button from 'designSystem/atoms/Button'

const mainConfig: IStoryMainConfig = {
  title: 'Molecules/Drawer',
  component: Drawer,
  args: {},
  argTypes: {},
}

const storiesInheritGlobalStyles = getInheritGlobalStylesStories({
  rounded: null,
  shadow: null,
  width: null,
  height: null,
  size: null,
  fontWeight: null,
  textAlign: null,
  margin: null,
  padding: null,
})

const Template = (args: unknown) => {
  const [open, setOpen] = useState(true)

  const toggle = () => setOpen(!open)

  return (
    <div>
      <Button type="button" width="fit" onClick={toggle}>
        Open Drawer
      </Button>
      <Drawer onClose={toggle} open={open} {...args}>
        <p>Hey, whats up</p>
      </Drawer>
    </div>
  )
}

const storiesComponent = [
  {
    storyName: 'WithMask',
    templateAction: {
      args: {
        height: 'full',
      },
      variants: {
        examples: [
          {
            label: 'Has',
            value: true,
          },
          {
            label: 'Has not',
            value: false,
          },
        ],
        field: 'withMask',
      },
    },
  },
]

const storyConfig = getStoryConfigStructure({
  mainConfig,
  storiesInheritGlobalStyles,
  storiesComponent,
  component: Template,
})

export { storyConfig }
