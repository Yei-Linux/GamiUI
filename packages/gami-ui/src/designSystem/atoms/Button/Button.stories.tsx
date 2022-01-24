import { Meta } from '@storybook/react'
import React from 'react'
import {
  getListTemplate,
  stylesControl,
} from '../../../core/helpers/storybook.helper'

import Button from '.'
import { options as optionsButton } from './constants'
import { DESIGN_TYPES as optionsStyles } from 'core/utils/constants'

const ListTemplate = getListTemplate(Button)

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    children: { control: 'text' },
    type: { control: { type: 'select', options: optionsButton.type } },
    ...stylesControl,
  },
} as Meta

export const Basic = () => (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Button preffix="Test">Test</Button>
    </div>
)

export const TypesButton = ListTemplate.bind({})
TypesButton.args = {
  items: optionsButton.type.map((type) => ({ variant: type })),
  field: 'variant',
  children: 'Text',
  width: 'lg',
  border: 'md',
}

export const WidthButton = ListTemplate.bind({})
WidthButton.args = {
  items: optionsStyles.width.map((width) => ({ width })),
  field: 'width',
  children: 'Text',
  border: 'md',
}
WidthButton.storyName = 'Width Sizes'
