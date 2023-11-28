import {
  getInheritGlobalStylesStories,
  getStoryConfigStructure,
  madegenericPropsControl,
} from 'core/helpers/storybook.helper'
import Select from '.'
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
  isMultiple: {
    control: 'boolean',
    description: 'isMultiple',
    table: {
      type: { summary: 'boolean' },
    },
  },
  isClearable: {
    control: 'boolean',
    description: 'isClearable',
    table: {
      type: { summary: 'boolean' },
    },
  },
  ...genericArgTypes,
}

const docArgTypes = {
  options: {
    control: 'object',
    description: 'options Prop',
    table: {
      type: { summary: 'React.ReactNode' },
    },
  },
  value: {
    control: 'object',
    description: 'value Prop',
    table: {
      type: { summary: 'React.ReactNode' },
    },
  },
}

const argTypes = { ...storyArgTypes, ...docArgTypes }

const mainConfig: IStoryMainConfig = {
  title: 'Molecules/Select 🟢',
  component: Select,
  args: {},
  argTypes: storyArgTypes,
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
  component: Select,
})

export { storyConfig, argTypes }
