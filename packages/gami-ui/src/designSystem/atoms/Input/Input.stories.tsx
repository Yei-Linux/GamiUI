import { Meta } from '@storybook/react'

import { storyConfig } from './storyConfig'
import React, { useState } from 'react'
import Input from './Input'
import Icon from '../Icon'

const { mainConfig, stories } = storyConfig

export default mainConfig as Meta

const [one, two, three, four, five] = stories

export { one, two, three, four, five }

/**
 * Custom Stories
 * @returns
 */
export const WithBasicInteraction = () => {
  const [value, setValue] = useState('test')

  const handleChange = (newValue: string) => setValue(newValue)

  return (
    <Input
      placeholder="Type your name"
      width="auto"
      height="auto"
      prefix={null}
      value={value}
      onChangeFormItem={handleChange}
    />
  )
}
WithBasicInteraction.storyName = 'With Basic Interaction 🙂'

export const WithIconInput = () => {
  const [value, setValue] = useState('')

  const handleChange = (newValue: string) => setValue(newValue)

  return (
    <Input
      placeholder="Type your name"
      width="auto"
      height="auto"
      prefix={<Icon name="user" />}
      value={value}
      onChangeFormItem={handleChange}
      positionPrefix="left"
    />
  )
}
WithIconInput.storyName = 'With Basic Interaction 🙂'
