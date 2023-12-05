import React from 'react'
import {
  IStoryConfig,
  IStoryMainConfig,
} from 'core/domain/interfaces/IStorybook'
import {
  getInheritGlobalStylesStories,
  getStoryConfigStructure,
} from 'core/helpers/storybook.helper'
import ColorPicker from '.'
import { WithColorPickerInteraction } from './mock'

const storyArgTypes = {
  value: {
    control: 'text',
    description: 'Value to display it on input picker',
    table: {
      type: { summary: 'string' },
    },
  },
}

const docArgTypes = {
  onChangeFormItem: {
    control: 'object',
    description: 'Function to handler when is changing color',
    table: { type: { summary: 'object' } },
  },
}

const argTypes = { ...storyArgTypes, ...docArgTypes }

const mainConfig: IStoryMainConfig = {
  title: 'Atoms/ColorPicker 🟢',
  component: ColorPicker,
  args: {},
  argTypes: storyArgTypes,
}

const storiesInheritGlobalStyles = getInheritGlobalStylesStories({
  rounded: null,
  shadow: null,
  margin: null,
  padding: null,
  width: null,
  height: null,
  size: null,
  fontWeight: null,
  textAlign: null,
})

const storiesComponent = [] as IStoryConfig[]

const customStories = [
  {
    storyBuilder: (args: any) => <WithColorPickerInteraction {...args} />,
    storyName: 'With Interaction 🙂',
    args: {},
  },
]

const storyConfig = getStoryConfigStructure({
  mainConfig,
  storiesInheritGlobalStyles,
  storiesComponent,
  customStories,
  component: ColorPicker,
})

export { storyConfig, argTypes }
