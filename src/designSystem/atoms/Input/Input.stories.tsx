import React from 'react'
import { Meta } from '@storybook/react'
import {
  getTemplate,
  stylesControl,
} from '../../../core/helpers/storybook.helper'

import Input from '.'
import Icon from '../Icon'

const Template = getTemplate(Input)

export default {
  title: 'Atoms/Input',
  component: Input,
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

export const BasicInput = Template.bind({})
BasicInput.args = {
  placeholder: 'Type your name',
  width: 'auto',
  heigth: 'auto',
  prefix: null,
}

export const IconInput = Template.bind({})
IconInput.args = {
  placeholder: 'Type your name',
  width: 'auto',
  heigth: 'auto',
  prefix: <Icon name="underline" />,
}
