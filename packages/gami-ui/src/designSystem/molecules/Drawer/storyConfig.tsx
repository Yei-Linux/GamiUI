import {
  getInheritGlobalStylesStories,
  getStoryConfigStructure,
  madegenericPropsControl,
} from 'core/helpers/storybook.helper'
import Drawer, { options } from '.'
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
  'rounded',
  'width',
  'height',
])

const storyArgTypes = {
  open: {
    control: 'boolean',
    description: 'Open or not of drawer',
    table: {
      type: { summary: 'boolean' },
    },
  },
  withMask: {
    control: 'boolean',
    description: 'Has Mask',
    table: {
      type: { summary: 'boolean' },
    },
  },
  hasCloseIcon: {
    control: 'boolean',
    description: 'Has Close Icon',
    table: {
      type: { summary: 'boolean' },
    },
  },
  height: {
    control: 'number',
    description: 'Height',
    table: {
      type: { summary: 'number' },
    },
  },
  width: {
    control: 'number',
    description: 'Width',
    table: {
      type: { summary: 'number' },
    },
  },
  zIndex: {
    control: 'number',
    description: 'ZIndex',
    table: {
      type: { summary: 'number' },
    },
  },
  placement: {
    control: { type: 'select', options: options.placementType },
    description: 'Placemente Drawer',
    table: {
      type: { summary: 'string' },
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
    description: 'CAction on close drawer',
    table: {
      type: { summary: '() => void' },
    },
  },
}

const argTypes = { ...storyArgTypes, ...docArgTypes }

const mainConfig: IStoryMainConfig = {
  title: 'Molecules/Drawer',
  component: Drawer,
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
  component: Drawer,
})

export { storyConfig, argTypes }
