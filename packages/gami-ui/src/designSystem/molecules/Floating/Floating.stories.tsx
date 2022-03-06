import { ComponentStory, Meta } from '@storybook/react'

import Floating from '.'
import React, { useState } from 'react'
import Button from '../../atoms/Button'
import { storyConfig } from './storyConfig'
import { TJSXElements } from 'core/domain/interfaces/common'
import RichText from 'designSystem/atoms/RichText'
import Row from 'designSystem/layouts/Row'
import Icon from 'designSystem/atoms/Icon'
import { FloatingTypes } from 'core/domain/types'

const { mainConfig, stories } = storyConfig

export default mainConfig as Meta

// eslint-disable-next-line no-empty-pattern
const [] = stories

const StoryDefault = (args: unknown) => {
  const [open, setOpen] = useState(false)

  const toggle = () => setOpen(!open)

  return (
    <Row gap="10px">
      <Button type="button" width="fit" onClick={toggle}>
        Toggle
      </Button>
      <Floating
        height="auto"
        width="auto"
        direction="right"
        open={open}
        onClose={toggle}
        {...args}
      >
        <RichText text="Gami Floating!" />
      </Floating>
    </Row>
  )
}
export const StoryDefaultTemplate: ComponentStory<TJSXElements> =
  StoryDefault.bind({})
StoryDefaultTemplate.storyName = 'WithDefault'
StoryDefaultTemplate.args = {
  hasCloseIcon: true,
  zIndex: 2,
}

const StoryCustomCloseIcon = (args: unknown) => {
  const [customCloseIcon, setCustomCloseIcon] = useState(true)
  const [open, setOpen] = useState(false)

  const toggle = (hasMask: boolean) => {
    setCustomCloseIcon(hasMask)
    setOpen(!open)
  }

  return (
    <Row gap="10px">
      <Button type="button" width="fit" onClick={() => toggle(true)}>
        CustomCloseIcon
      </Button>
      <Button type="button" width="fit" onClick={() => toggle(false)}>
        Not CustomCloseIcon
      </Button>
      <Floating
        height="auto"
        width="auto"
        direction="right"
        open={open}
        customCloseIcon={
          customCloseIcon ? (
            <Icon name="close" color="black" size="20px" />
          ) : null
        }
        onClose={() => setOpen(!open)}
        {...args}
      >
        <RichText text="Gami Floating!" />
      </Floating>
    </Row>
  )
}
export const StoryCustomCloseIconTemplate: ComponentStory<TJSXElements> =
  StoryCustomCloseIcon.bind({})

StoryCustomCloseIconTemplate.storyName = 'WithCustomCloseIcon'
StoryCustomCloseIconTemplate.args = {
  hasCloseIcon: true,
  zIndex: 2,
}

const StoryCloseIcon = (args: unknown) => {
  const [closeIcon, setCloseIcon] = useState(true)
  const [open, setOpen] = useState(false)

  const toggle = (hasMask: boolean) => {
    setCloseIcon(hasMask)
    setOpen(!open)
  }

  return (
    <Row gap="10px">
      <Button type="button" width="fit" onClick={() => toggle(true)}>
        Close Icon
      </Button>
      <Button type="button" width="fit" onClick={() => toggle(false)}>
        Not Close Icon
      </Button>
      <Floating
        height="auto"
        width="auto"
        direction="right"
        open={open}
        hasCloseIcon={closeIcon}
        onClose={() => setOpen(!open)}
        {...args}
      >
        <RichText text="Gami Floating!" />
      </Floating>
    </Row>
  )
}
export const StoryCloseIconTemplate: ComponentStory<TJSXElements> =
  StoryCloseIcon.bind({})

StoryCloseIconTemplate.storyName = 'WithCloseIcon'
StoryCloseIconTemplate.args = {
  zIndex: 2,
}

const StoryDirection = (args: unknown) => {
  const [direction, setDirection] = useState<FloatingTypes>('left')
  const [open, setOpen] = useState(false)

  const toggle = (directionProp: FloatingTypes) => {
    setDirection(directionProp)
    setOpen(!open)
  }

  return (
    <Row gap="10px">
      <Button type="button" width="fit" onClick={() => toggle('left')}>
        Left
      </Button>
      <Button type="button" width="fit" onClick={() => toggle('right')}>
        Right
      </Button>
      <Button type="button" width="fit" onClick={() => toggle('top')}>
        Top
      </Button>
      <Button type="button" width="fit" onClick={() => toggle('bottom')}>
        Bottom
      </Button>
      <Floating
        height="auto"
        width="auto"
        direction={direction}
        open={open}
        onClose={() => setOpen(!open)}
        {...args}
      >
        <RichText text="Gami Floating!" />
      </Floating>
    </Row>
  )
}
export const StoryDirectionTemplate: ComponentStory<TJSXElements> =
  StoryDirection.bind({})
StoryDirectionTemplate.storyName = 'WithDirection'
StoryDirectionTemplate.args = {
  zIndex: 2,
}
