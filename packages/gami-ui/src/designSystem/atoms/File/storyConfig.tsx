import React from 'react'
import {
  IStoryConfig,
  IStoryMainConfig,
} from 'core/domain/interfaces/IStorybook'
import {
  getInheritGlobalStylesStories,
  getStoryConfigStructure,
} from 'core/helpers/storybook.helper'
import File from '.'
import { WithBasic, WithPreview, WithSingleFile } from './mock'

const storyArgTypes = {
  className: {
    control: 'text',
    description: 'Display className prefix',
    table: {
      type: { summary: 'string' },
    },
  },
  withPreview: {
    control: 'boolean',
    description: 'Get the current date and manage it in the calendar',
  },
  isMultiple: {
    control: 'boolean',
    description: 'Get the current timestamp and select the day in the calendar',
  },
}

const docArgTypes = {
  onChangeFormItem: {
    control: 'object',
    description: 'Function to handler when is changing file list',
    table: { type: { summary: 'object' } },
  },
  value: {
    control: 'object',
    description: 'File Values',
    table: { type: { summary: 'object' } },
  },
}

const argTypes = { ...storyArgTypes, ...docArgTypes }

const mainConfig: IStoryMainConfig = {
  title: 'Atoms/File 🟢',
  component: File,
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
    storyBuilder: (args: any) => <WithSingleFile {...args} />,
    storyName: 'With Single File 🙂',
    args: {},
  },
  {
    storyBuilder: (args: any) => <WithPreview {...args} />,
    storyName: 'With Preview 🙂',
    args: {},
  },
]

const storyConfig = getStoryConfigStructure({
  mainConfig,
  storiesInheritGlobalStyles,
  storiesComponent,
  customStories,
  component: File,
})

export { storyConfig, argTypes }
