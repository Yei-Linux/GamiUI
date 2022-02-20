import { Meta } from '@storybook/react'
import {
  getTemplate,
  stylesControl,
} from '../../../core/helpers/storybook.helper'

import Number from '.'
import React from 'react'
import Icon from '../Icon'

const Template = getTemplate(Number)

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
        b: <Icon fill="#374a54" />,
      },
      control: {
        type: 'select',
        labels: {
          a: 'withoutIcon',
          b: 'withIcon',
        },
      },
    },
    ...stylesControl,
  },
} as Meta

export const Basic = Template.bind({})
Basic.args = {
  placeholder: 'Type your phone',
  width: 'auto',
  height: 'auto',
  prefix: <Icon name="phone" />,
}