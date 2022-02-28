import { IStoryMainConfig } from 'core/domain/interfaces/IStorybook'
import {
  getInheritGlobalStylesStories,
  getStoryConfigStructure,
} from 'core/helpers/storybook.helper'
import Icon, { IconsPack } from '.'

const storyArgTypes = {
  color: {
    control: 'text',
    description: 'Fill Icon',
    table: {
      type: { summary: 'string' },
      defaultValue: Icon.defaultProps?.color,
    },
  },
  name: {
    control: { type: 'select', options: Object.keys(IconsPack()) },
    description: 'Name',
    table: {
      type: { summary: 'string' },
      defaultValue: Icon.defaultProps?.name,
    },
  },
  size: {
    control: 'text',
    description: 'Size icon',
    table: {
      type: { summary: 'string' },
      defaultValue: Icon.defaultProps?.size,
    },
  },
}

const docArgTypes = {}

const argTypes = { ...storyArgTypes, ...docArgTypes }

const mainConfig: IStoryMainConfig = {
  title: 'Atoms/Icon',
  component: Icon,
  args: {},
  argTypes: storyArgTypes,
}

const storiesInheritGlobalStyles = getInheritGlobalStylesStories({
  shadow: {
    args: {},
  },
  margin: {
    args: {},
    examples: ['0px', '2px', '4px', '6px', '8px', '10px'],
  },
  padding: {
    args: {},
    examples: ['0px', '2px', '4px', '6px', '8px', '10px'],
  },
  rounded: {
    args: {},
  },
  width: null,
  height: null,
  size: null,
  fontWeight: null,
  textAlign: null,
})

const storiesComponent = [
  {
    storyName: 'WithColors',
    self: {
      args: {
        name: 'check',
      },
      variants: {
        examples: [
          {
            label: 'Color A',
            value: 'red',
          },
          {
            label: 'Color B',
            value: 'blue',
          },
          {
            label: 'Color C',
            value: 'green',
          },
          {
            label: 'Color D',
            value: '#9879e9',
          },
        ],
        field: 'color',
      },
    },
  },
  {
    storyName: 'WithSize',
    self: {
      args: {
        name: 'code',
        color: '#9879e9',
      },
      variants: {
        examples: [
          {
            label: 'Size A',
            value: '15px',
          },
          {
            label: 'Size B',
            value: '22px',
          },
          {
            label: 'Size C',
            value: '24px',
          },
          {
            label: 'Size D',
            value: '30px',
          },
        ],
        field: 'size',
      },
    },
  },
]

const storyConfig = getStoryConfigStructure({
  mainConfig,
  storiesInheritGlobalStyles,
  storiesComponent,
  component: Icon,
})

export { storyConfig, argTypes }
