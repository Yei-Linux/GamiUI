import React from 'react'
import { Meta } from '@storybook/react'

import Sticky from '.'

export default {
  title: 'Atoms/Sticky',
  component: Sticky,
  args: {},
  argTypes: {},
} as Meta

export const Basic = () => (
  <Sticky
    stickyItems={[
      {
        stickyContent: <div>Test</div>,
        hasHideContent: false,
      },
      {
        stickyContent: <div>Test</div>,
        hasHideContent: true,
        stickyHidden: <p>Hi</p>,
      },
      {
        stickyContent: <div>Test</div>,
        hasHideContent: false,
      },
    ]}
  />
)
Basic.args = {}
