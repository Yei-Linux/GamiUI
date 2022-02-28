import { IStoryMainConfig } from 'core/domain/interfaces/IStorybook'
import {
  getInheritGlobalStylesStories,
  getStoryConfigStructure,
} from 'core/helpers/storybook.helper'
import Container from 'designSystem/layouts/Container'

const mainConfig: IStoryMainConfig = {
  title: 'Layout/Container',
  component: Container,
  args: {},
  argTypes: {},
}

const storiesInheritGlobalStyles = getInheritGlobalStylesStories({
  shadow: {
    args: {
      padding: '1rem',
      children: 'Gami Container',
    },
  },
  margin: {
    args: {
      padding: '1rem',
      children: 'Gami Container',
    },
    examples: ['0px', '2px', '4px', '6px', '8px', '10px'],
  },
  padding: {
    args: {
      padding: '1rem',
      children: 'Gami Container',
    },
    examples: ['0px', '2px', '4px', '6px', '8px', '10px'],
  },
  rounded: {
    args: {
      children: 'Gami Container',
    },
  },
  width: {
    args: {
      padding: '1rem',
      children: 'Gami Container',
    },
  },
  height: {
    args: {
      padding: '1rem',
      children: 'Gami Container',
    },
  },
  size: {
    args: {
      padding: '1rem',
      children: 'Gami Container',
    },
  },
  fontWeight: {
    args: {
      padding: '1rem',
      children: 'Gami Container',
    },
  },
  textAlign: {
    args: {
      padding: '1rem',
      children: 'Gami Container',
    },
  },
})

const storiesComponent = [
  {
    storyName: 'WithAs',
    self: {
      args: {
        padding: '1rem',
        children: 'Gami Container',
      },
      variants: {
        examples: [
          {
            label: 'As p element',
            value: 'p',
          },
          {
            label: 'As div element',
            value: 'div',
          },
        ],
        field: 'as',
      },
    },
  },
]

const storyConfig = getStoryConfigStructure({
  mainConfig,
  storiesInheritGlobalStyles,
  storiesComponent,
  component: Container,
})

export { storyConfig }
