import {
  getInheritGlobalStylesStories,
  getStoryConfigStructure,
  madegenericPropsControl,
} from 'core/helpers/storybook.helper'
import Loader from '.'
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
  type: {
    control: 'text',
    description: 'Loader type',
    table: {
      type: { summary: 'string' },
    },
  },
  background: {
    control: 'text',
    description: 'background loader',
    table: {
      type: { summary: 'string' },
    },
  },
  ...genericArgTypes,
}

const docArgTypes = {}

const argTypes = { ...storyArgTypes, ...docArgTypes }

const mainConfig: IStoryMainConfig = {
  title: 'Atoms/Loader 🟢',
  component: Loader,
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

const storiesComponent: IStoryConfig[] = [
  {
    storyName: 'With Loader Types 🙂',
    self: {
      args: {},
      variants: {
        examples: [
          {
            label: 'default',
            value: 'default',
          },
          {
            label: 'points',
            value: 'points',
          },
          {
            label: 'spinner',
            value: 'spinner',
          },
        ],
        field: 'type',
      },
    },
  },
]

const storyConfig = getStoryConfigStructure({
  mainConfig,
  storiesInheritGlobalStyles,
  storiesComponent,
  component: Loader,
})

export { storyConfig, argTypes }
