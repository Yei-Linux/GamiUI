import React from 'react'
import { Meta } from '@storybook/react'

import CodeView from '.'

export default {
  title: 'Molecules/CodeView',
  component: CodeView,
  args: {},
  argTypes: {},
} as Meta

export const Basic = (args: any) => <CodeView {...args} />
Basic.args = {
  valueString:
    '<p><strong>Hi this is my solution:</strong></p><pre>import React from "react";<br><br>const Component = () =&gt; {<br>&nbsp;&nbsp;&nbsp;&nbsp;return (Hello World)<br>}\n\nexport default Component<br></pre><p>Thanks</p>',
}
