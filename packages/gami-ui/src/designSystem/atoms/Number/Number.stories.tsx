import { Meta } from '@storybook/react'

import Number from '.'
import React from 'react'
import Icon from '../Icon'

export default {
  title: 'Atoms/Number',
  component: Number,
  args: {},
  argTypes: {
    positionPrefix: {
      control: 'select',
      options: ['left', 'right'],
    },
    placeholder: { control: 'text' },
    prefix: {
      options: ['a', 'b'],
      mapping: {
        a: null,
        b: <Icon color="#374a54" />,
      },
      control: {
        type: 'select',
        labels: {
          a: 'withoutIcon',
          b: 'withIcon',
        },
      },
    },
  },
} as Meta

export const Basic = (args: any) => <Number {...args} />
Basic.args = {
  placeholder: 'Type your phone',
  width: 'auto',
  height: 'auto',
  prefix: <Icon name="phone" />,
  positionPrefix: 'left',
}
