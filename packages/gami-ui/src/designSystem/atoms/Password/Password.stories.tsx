import React from 'react'
import { Meta } from '@storybook/react'

import Password from '.'
import Icon from '../Icon'

export default {
  title: 'Atoms/Password',
  component: Password,
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

export const BasicPassword = (args: any) => <Password {...args} />
BasicPassword.args = {
  placeholder: 'Type your password',
  width: 'NORMAL',
  height: 'SMALL',
}
