import { Meta } from '@storybook/react'
import { stylesControl } from '../../../core/helpers/storybook.helper'

import Floating from '.'
import React, { useState } from 'react'
import GuideMessage from '../GuideMessage'
import Button from '../../atoms/Button'

export default {
  title: 'Molecules/Floating',
  component: Floating,
  args: { ...Floating.defaultProps },
  argTypes: {
    ...stylesControl,
  },
} as Meta

export const Right = () => {
  const [visible, setIsVisible] = useState(true)

  const toggleVisible = () => setIsVisible(!visible)

  return (
    <div>
      <Floating direction="right" visible={visible} onClose={toggleVisible}>
        <GuideMessage
          guideType="chill"
          message="Toma un descanso!"
          direction="right"
          background="#ff75a0"
        />
      </Floating>

      <Button onClick={toggleVisible}>Show Message</Button>
    </div>
  )
}

export const Left = () => {
  const [visible, setIsVisible] = useState(false)

  const toggleVisible = () => setIsVisible(!visible)

  return (
    <div>
      <Floating direction="left" visible={visible} onClose={toggleVisible}>
        <GuideMessage
          guideType="chill"
          message="Toma un descanso!"
          direction="right"
          background="#ff75a0"
        />
      </Floating>

      <Button onClick={toggleVisible}>Show Message</Button>
    </div>
  )
}

export const Top = () => {
  const [visible, setIsVisible] = useState(true)

  const toggleVisible = () => setIsVisible(!visible)

  return (
    <div>
      <Floating direction="top" visible={visible} onClose={toggleVisible}>
        <GuideMessage
          guideType="chill"
          message="Toma un descanso!"
          direction="right"
          background="#ff75a0"
        />
      </Floating>

      <Button onClick={toggleVisible}>Show Message</Button>
    </div>
  )
}

export const Bottom = () => {
  const [visible, setIsVisible] = useState(false)

  const toggleVisible = () => setIsVisible(!visible)

  return (
    <div>
      <Floating direction="bottom" visible={visible} onClose={toggleVisible}>
        <GuideMessage
          guideType="chill"
          message="Toma un descanso!"
          direction="right"
          background="#ff75a0"
        />
      </Floating>

      <Button onClick={toggleVisible}>Show Message</Button>
    </div>
  )
}
