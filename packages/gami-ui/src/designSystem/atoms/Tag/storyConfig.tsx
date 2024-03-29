import { IStoryMainConfig } from 'core/domain/interfaces/IStorybook'
import {
  getInheritGlobalStylesStories,
  getStoryConfigStructure,
  madegenericPropsControl,
} from 'core/helpers/storybook.helper'
import Tag from '.'
import { Tags } from './constants'

const storyArgTypes = {
  text: {
    control: 'text',
    description: 'Text on tag',
    table: {
      type: { summary: 'string' },
      defaultValue: Tag.defaultProps?.text,
    },
  },
  color: {
    control: 'text',
    description: 'Color on tag',
    table: {
      type: { summary: 'string' },
      defaultValue: Tag.defaultProps?.color,
    },
  },
  background: {
    control: 'text',
    description: 'Background on tag',
    table: {
      type: { summary: 'string' },
      defaultValue: Tag.defaultProps?.background,
    },
  },
  ballMarkerColor: {
    control: 'text',
    description: 'Ball Marker Color',
    table: {
      type: { summary: 'string' },
      defaultValue: Tag.defaultProps?.ballMarkerColor,
    },
  },
}

const docArgTypes = {}

const genericArgTypes = madegenericPropsControl(['size'])

const argTypes = { ...storyArgTypes, ...docArgTypes, ...genericArgTypes }

const mainConfig: IStoryMainConfig = {
  title: 'Atoms/Tag 🟢',
  component: Tag,
  args: {},
  argTypes: storyArgTypes,
}

const storiesInheritGlobalStyles = getInheritGlobalStylesStories({
  rounded: {
    args: {
      text: 'Gami Tag',
    },
  },
  shadow: {
    args: {
      text: 'Gami Tag',
    },
  },
  width: {
    args: {
      text: 'Gami Tag',
    },
  },
  height: {
    args: {
      text: 'Gami Tag',
    },
  },
  fontWeight: {
    args: {
      text: 'Gami Tag',
    },
  },
  textAlign: {
    args: {
      text: 'Gami Tag',
    },
  },
  margin: {
    args: {
      text: 'Gami Tag',
    },
    examples: ['0px', '2px', '4px', '6px', '8px', '10px'],
  },
  padding: {
    args: {
      text: 'Gami Tag',
    },
    examples: ['0px', '2px', '4px', '6px', '8px', '10px'],
  },
  size: null,
})

const storiesComponent = [
  {
    storyName: 'WithColorsAndMarker 🙂',
    self: {
      args: {
        text: 'Gami Tag',
        ballMarkerColor: '#7f9cf5',
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
  {
    storyName: 'WithGroup 🙂',
    parent: {
      args: {
        max: 2,
      },
      variants: [
        {
          label: 'Default',
          value: Tags.map(() => ({
            props: { text: 'Tag' },
            Component: Tag,
          })),
        },
      ],
    },
  },
]

const storyConfig = getStoryConfigStructure({
  mainConfig,
  storiesInheritGlobalStyles,
  storiesComponent,
  component: Tag,
  parentComponent: Tag.Group,
})

export { storyConfig, argTypes }
