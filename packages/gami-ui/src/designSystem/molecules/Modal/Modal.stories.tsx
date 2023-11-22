import React, { useState } from 'react'
import { Meta } from '@storybook/react'

import Modal from '.'
import Button from '../../atoms/Button'

export default {
  title: 'Molecules/Modal',
  component: Modal,
  args: {},
  argTypes: {},
} as Meta

export const Basic = () => {
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

export const WithHeader = () => {
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
export const WithFooter = () => {
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
