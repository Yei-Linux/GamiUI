import React, { useState } from 'react'
import { Meta } from '@storybook/react'

import File from '.'

export default {
  title: 'Atoms/File',
  component: File,
  args: {},
  argTypes: {},
} as Meta

export const Basic = () => {
  const [value, setValue] = useState([])

  return <File value={value} onChangeFormItem={setValue} />
}

export const SingleFile = () => {
  const [value, setValue] = useState([])

  return <File isMultiple={false} value={value} onChangeFormItem={setValue} />
}

export const WithPreview = () => {
  const [value, setValue] = useState([])

  return <File withPreview value={value} onChangeFormItem={setValue} />
}
