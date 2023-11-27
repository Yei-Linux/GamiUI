import {
  getInheritGlobalStylesStories,
  getStoryConfigStructure,
} from 'core/helpers/storybook.helper'
import Spacer, { options } from '.'
import {
  IStoryConfig,
  IStoryMainConfig,
} from 'core/domain/interfaces/IStorybook'

const storyArgTypes = {
  className: {
    control: 'text',
    description: 'Classname Prop',
    table: {
      type: { summary: 'string' },
    },
  },
  direction: {
    control: { type: 'select', options: options.directionType },
    description: 'Spacer Direction',
    table: {
      type: { summary: 'string' },
    },
  },
  size: {
    control: { type: 'select', options: options.sizeType },
    description: 'Size of spacer',
    table: {
      type: { summary: 'string' },
    },
  },
  customSize: {
    control: 'text',
    description: 'Custom Size',
    table: {
      type: { summary: 'string' },
    },
  },
}

const docArgTypes = {
  children: {
    control: 'object',
    description: 'Children Prop',
    table: {
      type: { summary: 'React.ReactNode' },
    },
  },
}

const argTypes = { ...storyArgTypes, ...docArgTypes }

const mainConfig: IStoryMainConfig = {
  title: 'Layout/Spacer 🟢',
  component: Spacer,
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
  component: Spacer,
})

export { storyConfig, argTypes }
