import React, { useState } from 'react'
import { ComponentStory, Meta } from '@storybook/react'

import Modal from '.'
import Button from '../../atoms/Button'
import { storyConfig } from './storyConfig'
import { TJSXElements } from 'core/domain/interfaces/common'

const { mainConfig } = storyConfig

export default mainConfig as Meta

/**
 * Custom Stories
 * @param args
 * @returns
 */

const StoryBasic = () => {
  const [visible, setVisible] = useState(false)

  const onOpen = () => setVisible(true)

  const onClose = () => setVisible(false)

  return (
    <div>
      <Button
        onClick={onOpen}
        rounded="md"
        height="sm"
        variant="secondary"
        width="auto"
      >
        Show Modal
      </Button>
      <Modal visible={visible} onClose={onClose}>
        <p style={{ padding: '1rem' }}>Hola como estas</p>
      </Modal>
    </div>
  )
}
export const StoryBasicTemplate: ComponentStory<TJSXElements> = StoryBasic.bind(
  {}
)
StoryBasicTemplate.storyName = 'With Default 🙂'
StoryBasicTemplate.args = {}

const StoryWithHeader = () => {
  const [visible, setVisible] = useState(false)

  const onOpen = () => setVisible(true)

  const onClose = () => setVisible(false)

  return (
    <div>
      <Button
        onClick={onOpen}
        rounded="md"
        height="sm"
        variant="secondary"
        width="auto"
      >
        Show Modal
      </Button>
      <Modal visible={visible} onClose={onClose} title="This is my title">
        <p style={{ padding: '1rem' }}>Hola como estas</p>
      </Modal>
    </div>
  )
}
export const StoryWithHeaderTemplate: ComponentStory<TJSXElements> =
  StoryWithHeader.bind({})
StoryWithHeaderTemplate.storyName = 'With Header 🙂'
StoryWithHeaderTemplate.args = {}

export const StoryWithFooter = () => {
  const [visible, setVisible] = useState(false)

  const onOpen = () => setVisible(true)

  const onClose = () => setVisible(false)

  return (
    <div>
      <Button
        onClick={onOpen}
        rounded="md"
        height="sm"
        variant="secondary"
        width="auto"
      >
        Show Modal
      </Button>
      <Modal
        visible={visible}
        onClose={onClose}
        title="This is my title"
        footer="This is my footer"
      >
        <p style={{ padding: '1rem' }}>Hola como estas</p>
      </Modal>
    </div>
  )
}
export const StoryWithFooterTemplate: ComponentStory<TJSXElements> =
  StoryWithFooter.bind({})
StoryWithFooterTemplate.storyName = 'With Footer 🙂'
StoryWithFooterTemplate.args = {}
