import React from 'react'
import {
  IStoryConfig,
  IStoryMainConfig,
} from 'core/domain/interfaces/IStorybook'
import {
  getInheritGlobalStylesStories,
  getStoryConfigStructure,
} from 'core/helpers/storybook.helper'
import { WithBasic, WithTooltipAbove, WithDefault } from './mock'
import DatePicker from './DatePicker'

const storyArgTypes = {
  className: {
    control: 'text',
    description: 'Classname preffix to date picker',
    table: {
      type: { summary: 'string' },
    },
  },
  value: {
    control: 'text',
    description: 'Value to display it on date picker',
    table: {
      type: { summary: 'string' },
    },
  },
  formatter: {
    control: 'text',
    description: 'formatter on date picker',
    table: {
      type: { summary: 'string' },
    },
  },
}

const docArgTypes = {
  onChangeFormItem: {
    control: 'object',
    description: 'Function to handler when is changing date',
    table: { type: { summary: 'object' } },
  },
}

const argTypes = { ...storyArgTypes, ...docArgTypes }

const mainConfig: IStoryMainConfig = {
  title: 'Atoms/DatePicker 🟢',
  component: DatePicker,
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
    storyBuilder: (args: any) => <WithBasic {...args} />,
    storyName: 'With Basic Interaction 🙂',
    args: {},
  },
  {
    storyBuilder: (args: any) => <WithTooltipAbove {...args} />,
    storyName: 'With TooltipAbove 🙂',
    args: {},
  },
  {
    storyBuilder: (args: any) => <WithDefault {...args} />,
    storyName: 'WithDefault 🙂',
    args: {},
  },
]

const storyConfig = getStoryConfigStructure({
  mainConfig,
  storiesInheritGlobalStyles,
  storiesComponent,
  customStories,
  component: DatePicker,
})

export { storyConfig, argTypes }
