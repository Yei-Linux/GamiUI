import React from 'react'
import {
  IStoryConfig,
  IStoryMainConfig,
} from 'core/domain/interfaces/IStorybook'
import {
  getInheritGlobalStylesStories,
  getStoryConfigStructure,
  madegenericPropsControl,
} from 'core/helpers/storybook.helper'
import Password from '.'

const genericArgTypes = madegenericPropsControl([
  'fontWeight',
  'textAlign',
  'sizes',
  'height',
])

const storyArgTypes = {
  placeholder: {
    control: 'text',
    description: 'Display placeholder',
    table: {
      type: { summary: 'string' },
    },
  },
  name: {
    control: 'text',
    description: 'Passwords name',
    table: {
      type: { summary: 'string' },
    },
  },
  value: {
    control: 'text',
    description: 'Value to set in input',
    table: {
      type: { summary: 'string' },
    },
  },
  positionPrefix: {
    control: { type: 'select', options: ['left', 'right'] },
    description: 'Password Position Preffix',
    table: {
      type: { summary: 'string' },
    },
  },
  type: {
    control: { type: 'select', options: ['password', 'input', 'number'] },
    description: 'Password Type',
    table: {
      type: { summary: 'string' },
    },
  },
  autoComplete: {
    control: { type: 'select', options: ['off', 'on'] },
    description: 'Has autocomplete',
    table: {
      type: { summary: 'string' },
    },
  },
  readOnly: {
    control: 'boolean',
    description: 'Has autocomplete',
    table: {
      type: { summary: 'boolean' },
    },
  },
  ...genericArgTypes,
}

const docArgTypes = {
  preffix: {
    control: 'object',
    description: 'Display prefix Content Password',
    table: {
      type: { summary: 'React.ReactNode' },
    },
  },
  onChangeFormItem: {
    control: 'object',
    description: 'Handle when change value',
  },
}

const argTypes = { ...storyArgTypes, ...docArgTypes }

const mainConfig: IStoryMainConfig = {
  title: 'Atoms/Password 🟢',
  component: Password,
  args: {},
  argTypes: storyArgTypes,
}

const storiesInheritGlobalStyles = getInheritGlobalStylesStories({
  rounded: {
    args: {
      placeholder: 'Please type something...',
      value: 'Password Test',
    },
  },
  shadow: {
    args: {
      placeholder: 'Please type something...',
      value: 'Password Test',
    },
  },
  width: {
    args: {
      placeholder: 'Please type something...',
      value: 'Password Test',
    },
  },
  margin: {
    args: {
      placeholder: 'Please type something...',
      value: 'Password Test',
    },
    examples: ['0px', '2px', '4px', '6px', '8px', '10px'],
    wrapper: (content: React.ReactNode) => (
      <div style={{ border: '1px solid #d1d1d1' }}>{content}</div>
    ),
  },
  padding: {
    args: {
      placeholder: 'Please type something...',
      value: 'Password Test',
    },
    examples: ['0px', '2px', '4px', '6px', '8px', '10px'],
  },
  height: null,
  size: null,
  fontWeight: null,
  textAlign: null,
})

const storiesComponent: IStoryConfig[] = []

const storyConfig = getStoryConfigStructure({
  mainConfig,
  storiesInheritGlobalStyles,
  storiesComponent,
  component: Password,
})

export { storyConfig, argTypes }
