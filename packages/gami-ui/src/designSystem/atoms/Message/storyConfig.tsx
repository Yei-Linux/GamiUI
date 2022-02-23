import { IStoryMainConfig } from 'core/domain/interfaces/IStorybook'
import {
  getInheritGlobalStylesStories,
  getStoryConfigStructure,
} from 'core/helpers/storybook.helper'
import Message from '.'

import { options } from 'designSystem/atoms/Message'

const mainConfig: IStoryMainConfig = {
  title: 'Atoms/Message',
  component: Message,
  args: {},
  argTypes: {},
}

const storiesInheritGlobalStyles = getInheritGlobalStylesStories({
  shadow: {
    args: {
      text: 'Gami Message',
    },
  },
  width: {
    args: {
      text: 'Gami Message',
    },
  },
  height: {
    args: {
      text: 'Gami Message',
    },
  },
  fontWeight: {
    args: {
      text: 'Gami Message',
    },
  },
  textAlign: {
    args: {
      text: 'Gami Message',
    },
  },
  margin: {
    args: {
      text: 'Gami Message',
    },
    examples: ['0px', '2px', '4px', '6px', '8px', '10px'],
  },
  padding: {
    args: {
      text: 'Gami Message',
    },
    examples: ['0px', '2px', '4px', '6px', '8px', '10px'],
  },
  size: null,
  rounded: null,
})

const storiesComponent = [
  {
    storyName: 'WithDirections',
    self: {
      args: {
        text: 'Gami Message',
      },
      variants: {
        examples: options.directionType.map((variant) => ({
          label: variant,
          value: variant,
        })),
        field: 'direction',
      },
    },
  },
  {
    storyName: 'WithBackground',
    self: {
      args: {
        text: 'Gami Message',
      },
      variants: {
        examples: [
          {
            label: 'Color A',
            value: '#9879e9',
          },
          {
            label: 'Color B',
            value: '#54BAB9',
          },
        ],
        field: 'background',
      },
    },
  },
  {
    storyName: 'WithColorAndMarker',
    self: {
      args: {
        text: 'Gami Message',
        hasMarker: true,
        background: 'white',
      },
      variants: {
        examples: [
          {
            label: 'Color A',
            value: '#9879e9',
          },
          {
            label: 'Color B',
            value: '#54BAB9',
          },
        ],
        field: 'color',
      },
    },
  },
]

const storyConfig = getStoryConfigStructure({
  mainConfig,
  storiesInheritGlobalStyles,
  storiesComponent,
  component: Message,
})

export { storyConfig }
