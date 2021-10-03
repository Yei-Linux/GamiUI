import { Meta } from '@storybook/react'
import {
  getTemplate,
  stylesControl,
} from '../../../core/helpers/storybook.helper'

import Switch from '.'

const Template = getTemplate(Switch)

export default {
  title: 'Atoms/Switch',
  component: Switch,
  args: {},
  argTypes: {
    ...stylesControl,
  },
} as Meta

export const BasicActiveSwitch = Template.bind({})
BasicActiveSwitch.args = {
  width: 'NORMAL',
  shadow: '',
}

export const BasicInactiveSwitch = Template.bind({})
BasicInactiveSwitch.args = {
  width: 'NORMAL',
  shadow: '',
  defaultChecked: false,
}
