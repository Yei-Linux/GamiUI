import React from 'react'
import {
  IStoryConfig,
  IStoryMainConfig,
} from 'core/domain/interfaces/IStorybook'
import { FloatingTypes } from 'core/domain/types'
import {
  getInheritGlobalStylesStories,
  getStoryConfigStructure,
} from 'core/helpers/storybook.helper'
import Button from 'designSystem/atoms/Button'
import { useState } from 'react'
import Floating from '.'

const mainConfig: IStoryMainConfig = {
  title: 'Atoms/Floating',
  component: Floating,
  args: {},
  argTypes: {},
}

const storiesInheritGlobalStyles = getInheritGlobalStylesStories({
  rounded: {
    args: {
      visible: true,
      children: 'Gami Floating',
    },
  },
  shadow: {
    args: {
      visible: true,
      children: 'Gami Floating',
    },
  },
  width: {
    args: {
      visible: true,
      children: 'Gami Floating',
    },
  },
  height: {
    args: {
      visible: true,
      children: 'Gami Floating',
    },
  },
  fontWeight: null,
  textAlign: null,
  margin: null,
  padding: null,
  size: null,
})

const storiesComponent: IStoryConfig[] = []

const DirectionComponent = ({ direction }: { direction: FloatingTypes }) => {
  const [visible, setIsVisible] = useState(true)

  const toggleVisible = () => setIsVisible(!visible)

  return (
    <div>
      <Floating direction={direction} visible={visible} onClose={toggleVisible}>
        Gami Floating
      </Floating>

      <Button onClick={toggleVisible}>Show Message</Button>
    </div>
  )
}

const customStories = [
  <DirectionComponent key="0" direction="left" />,
  <DirectionComponent key="1" direction="right" />,
  <DirectionComponent key="2" direction="top" />,
  <DirectionComponent key="3" direction="bottom" />,
]

const storyConfig = getStoryConfigStructure({
  mainConfig,
  storiesInheritGlobalStyles,
  storiesComponent,
  component: Floating,
  customStories,
})

export { storyConfig }
