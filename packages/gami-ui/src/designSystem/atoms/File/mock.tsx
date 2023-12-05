import React, { useState } from 'react'
import File from '.'

export const WithBasic = () => {
  const [value, setValue] = useState([])

  return <File value={value} onChangeFormItem={setValue} />
}

export const WithSingleFile = () => {
  const [value, setValue] = useState([])

  return <File isMultiple={false} value={value} onChangeFormItem={setValue} />
}

export const WithPreview = () => {
  const [value, setValue] = useState([])

  return <File withPreview value={value} onChangeFormItem={setValue} />
}
