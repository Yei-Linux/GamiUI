import React, { useState } from 'react'
import { Meta, ComponentStory } from '@storybook/react'
import Button from 'designSystem/atoms/Button'
import { TJSXElements } from 'core/domain/interfaces/common'

import { storyConfig } from './storyConfig'
import Drawer from '.'
import { DrawerPlacementTypes } from 'core/domain/types'
import Row from 'designSystem/layouts/Row'
import Icon from 'designSystem/atoms/Icon'
import RichText from 'designSystem/atoms/RichText'

const { mainConfig, stories } = storyConfig

export default mainConfig as Meta

// eslint-disable-next-line no-empty-pattern
const [] = stories

const StoryDefault = (args: any) => {
  const [open, setOpen] = useState(false)

  const toggle = () => setOpen(!open)

  return (
    <Row gap="10px">
      <Button type="button" width="fit" onClick={toggle}>
        Toggle
      </Button>
      <Drawer onClose={() => setOpen(!open)} open={open} {...args}>
        <RichText text="Hey, whats up!" />
      </Drawer>
    </Row>
  )
}
export const StoryDefaultTemplate: ComponentStory<TJSXElements> =
  StoryDefault.bind({})
StoryDefaultTemplate.storyName = 'WithDefault'
StoryDefaultTemplate.args = {
  height: 300,
  width: 280,
  zIndex: 2,
}

const StoryCustomCloseIcon = (args: any) => {
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
      <Drawer
        customCloseIcon={
          customCloseIcon ? (
            <Icon name="close" color="black" size="20px" />
          ) : null
        }
        onClose={() => setOpen(!open)}
        open={open}
        {...args}
      >
        <RichText text="Hey, whats up!" />
      </Drawer>
    </Row>
  )
}
export const StoryCustomCloseIconTemplate: ComponentStory<TJSXElements> =
  StoryCustomCloseIcon.bind({})

StoryCustomCloseIconTemplate.storyName = 'WithCustomCloseIcon'
StoryCustomCloseIconTemplate.args = {
  hasCloseIcon: true,
  placement: 'left',
  height: 300,
  width: 280,
  zIndex: 2,
}

const StoryCloseIcon = (args: any) => {
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
      <Drawer
        hasCloseIcon={closeIcon}
        onClose={() => setOpen(!open)}
        open={open}
        {...args}
      >
        <RichText text="Hey, whats up!" />
      </Drawer>
    </Row>
  )
}
export const StoryCloseIconTemplate: ComponentStory<TJSXElements> =
  StoryCloseIcon.bind({})

StoryCloseIconTemplate.storyName = 'WithCloseIcon'
StoryCloseIconTemplate.args = {
  placement: 'left',
  height: 300,
  width: 280,
  zIndex: 2,
}

const StoryMask = (args: any) => {
  const [mask, setMask] = useState(true)
  const [open, setOpen] = useState(false)

  const toggle = (hasMask: boolean) => {
    setMask(hasMask)
    setOpen(!open)
  }

  return (
    <Row gap="10px">
      <Button type="button" width="fit" onClick={() => toggle(true)}>
        Mask
      </Button>
      <Button type="button" width="fit" onClick={() => toggle(false)}>
        Not Mask
      </Button>
      <Drawer
        withMask={mask}
        onClose={() => setOpen(!open)}
        open={open}
        {...args}
      >
        <RichText text="Hey, whats up!" />
      </Drawer>
    </Row>
  )
}
export const StoryMaskTemplate: ComponentStory<TJSXElements> = StoryMask.bind(
  {}
)

StoryMaskTemplate.storyName = 'WithMask'
StoryMaskTemplate.args = {
  height: 300,
  width: 280,
  zIndex: 2,
}

const StoryDirection = (args: any) => {
  const [placement, setPlacement] = useState<DrawerPlacementTypes>('left')
  const [open, setOpen] = useState(false)

  const toggle = (placementProp: DrawerPlacementTypes) => {
    setPlacement(placementProp)
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
      <Drawer
        onClose={() => setOpen(!open)}
        open={open}
        placement={placement}
        {...args}
      >
        <RichText text="Hey, whats up!" />
      </Drawer>
    </Row>
  )
}
export const StoryDirectionTemplate: ComponentStory<TJSXElements> =
  StoryDirection.bind({})
StoryDirectionTemplate.storyName = 'WithDirection'
StoryDirectionTemplate.args = {
  height: 300,
  width: 280,
  zIndex: 2,
}
