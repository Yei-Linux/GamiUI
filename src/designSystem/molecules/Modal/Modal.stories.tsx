import React, { useState } from 'react'
import { Meta } from '@storybook/react'
import { stylesControl } from '../../../core/helpers/storybook.helper'

import Modal from '.'
import Button from '../../atoms/Button'

export default {
  title: 'Molecules/Modal',
  component: Modal,
  args: {},
  argTypes: {
    ...stylesControl,
  },
} as Meta

export const Basic = () => {
  const [visible, setVisible] = useState(false)

  const onOpen = () => setVisible(true)

  const onClose = () => setVisible(false)

  return (
    <div>
      <Button
        onClick={onOpen}
        border="md"
        heigth="sm"
        variant="secondary"
        width="sm"
      >
        Show Modal
      </Button>
      <Modal visible={visible} onClose={onClose} title="Title">
        <p style={{ padding: '1rem' }}>Hola como estas</p>
      </Modal>
    </div>
  )
}
