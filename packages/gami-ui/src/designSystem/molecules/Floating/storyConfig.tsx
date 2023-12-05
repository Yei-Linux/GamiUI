import {
  getInheritGlobalStylesStories,
  getStoryConfigStructure,
  madegenericPropsControl,
} from 'core/helpers/storybook.helper'
import Floating, { options } from '.'
import {
  IStoryConfig,
  IStoryMainConfig,
} from 'core/domain/interfaces/IStorybook'

const genericArgTypes = madegenericPropsControl([
  'size',
  'fontWeight',
  'textAlign',
  'margin',
  'padding',
  'width',
  'height',
])
const storyArgTypes = {
  open: {
    control: 'boolean',
    description: 'Is visible or not floating',
    table: {
      type: { summary: 'boolean' },
    },
  },
  direction: {
    control: { type: 'select', options: options.type },
    description: 'Floating direction',
    table: {
      type: { summary: 'string' },
    },
  },
  height: {
    control: 'text',
    description: 'Height',
    table: {
      type: { summary: 'string' },
    },
  },
  width: {
    control: 'text',
    description: 'Width',
    table: {
      type: { summary: 'string' },
    },
  },
  zIndex: {
    control: 'number',
    description: 'ZIndex',
    table: {
      type: { summary: 'number' },
    },
  },
  hasCloseIcon: {
    control: 'boolean',
    description: 'Has Close Icon',
    table: {
      type: { summary: 'boolean' },
    },
  },
  ...genericArgTypes,
}

const docArgTypes = {
  children: {
    control: 'object',
    description: 'Children Prop',
    table: {
      type: { summary: 'React.ReactNode' },
    },
  },
  customCloseIcon: {
    control: 'object',
    description: 'Custom Icon',
    table: {
      type: { summary: 'React.ReactNode' },
    },
  },
  onClose: {
    control: 'object',
    description: 'Action on close floating message',
    table: {
      type: { summary: '() => void' },
    },
  },
}

const argTypes = { ...storyArgTypes, ...docArgTypes }

const mainConfig: IStoryMainConfig = {
  title: 'Molecules/Floating 🟢',
  component: Floating,
  args: {},
  argTypes: storyArgTypes,
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    docs: {
      source: {
        type: 'code',
      },
    },
  },
}

const storiesInheritGlobalStyles = getInheritGlobalStylesStories({
  rounded: null,
  shadow: null,
  width: null,
  height: null,
  size: null,
  fontWeight: null,
  textAlign: null,
  margin: null,
  padding: null,
})

const storiesComponent: IStoryConfig[] = []

const storyConfig = getStoryConfigStructure({
  mainConfig,
  storiesInheritGlobalStyles,
  storiesComponent,
  component: Floating,
})

export { storyConfig, argTypes }
