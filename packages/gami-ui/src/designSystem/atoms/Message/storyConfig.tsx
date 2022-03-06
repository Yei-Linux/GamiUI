import { IStoryMainConfig } from 'core/domain/interfaces/IStorybook'
import {
  getInheritGlobalStylesStories,
  getStoryConfigStructure,
  madegenericPropsControl,
} from 'core/helpers/storybook.helper'
import Message from '.'

import { options } from 'designSystem/atoms/Message'

const genericArgTypes = madegenericPropsControl(['size', 'rounded'])

const storyArgTypes = {
  text: {
    control: 'text',
    description: 'Message Text',
    table: {
      type: { summary: 'string' },
      defaultValue: Message.defaultProps?.text,
    },
  },
  direction: {
    control: { type: 'select', options: options.directionType },
    description: 'Message Direction',
    table: {
      type: { summary: 'string' },
      defaultValue: Message.defaultProps?.direction,
    },
  },
  background: {
    control: 'text',
    description: 'Background',
    table: {
      type: { summary: 'string' },
      defaultValue: Message.defaultProps?.background,
    },
  },
  hasMarker: {
    control: 'text',
    description: 'Has Marker',
    table: {
      type: { summary: 'string' },
      defaultValue: Message.defaultProps?.hasMarker,
    },
  },
  color: {
    control: 'text',
    description: 'Color',
    table: {
      type: { summary: 'string' },
      defaultValue: Message.defaultProps?.color,
    },
  },
  maxWidth: {
    control: 'text',
    description: 'Max Width',
    table: {
      type: { summary: 'string' },
      defaultValue: Message.defaultProps?.maxWidth,
    },
  },
  ...genericArgTypes,
}

const docArgTypes = {}

const argTypes = { ...storyArgTypes, ...docArgTypes }

const mainConfig: IStoryMainConfig = {
  title: 'Atoms/Message',
  component: Message,
  args: {},
  argTypes: storyArgTypes,
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

export { storyConfig, argTypes }
