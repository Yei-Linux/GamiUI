import React, { useState } from 'react'
import { Meta } from '@storybook/react'

import TextEditor from '.'
import Row from 'designSystem/layouts/Row'
import { theme } from 'styles/tokens'
import Button from '../Button'
import CodeView from 'designSystem/molecules/CodeView'

export default {
  title: 'Atoms/TextEditor',
  component: TextEditor,
  args: {},
  argTypes: {},
} as Meta

export const Basic = () => {
  const [value, setValue] = useState('')

  return <TextEditor defaultValue={value} onChange={setValue} />
}
Basic.args = {}

export const WithCodeBlocks = () => {
  const DEFAULT_CODE =
    '<p><strong>Hi this is my solution:</strong></p><pre>import React from "react";<br><br>const Component = () =&gt; {<br>&nbsp;&nbsp;&nbsp;&nbsp;return (Hello World)<br>}\n\nexport default Component<br></pre><p>Thanks</p>'

  const [valueCodeView, setValueCodeView] = useState(DEFAULT_CODE)
  const [value, setValue] = useState(DEFAULT_CODE)

  return (
    <Row height="auto" justifyContent="space-around">
      <div
        style={{
          background: theme.light.primary.hawkesBlue,
          borderRadius: '0.5em',
          padding: '1rem',
        }}
      >
        <TextEditor defaultValue={value} onChange={setValue} />
        <Button onClick={() => setValueCodeView(value)}>Save</Button>
      </div>

      <CodeView valueString={valueCodeView} />
    </Row>
  )
}
WithCodeBlocks.args = {}
