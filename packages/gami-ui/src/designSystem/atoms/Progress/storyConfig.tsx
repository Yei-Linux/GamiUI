import { IStoryMainConfig } from 'core/domain/interfaces/IStorybook'
import {
  getInheritGlobalStylesStories,
  getStoryConfigStructure,
  madegenericPropsControl,
} from 'core/helpers/storybook.helper'
import Progress, { options } from '.'

const genericArgTypes = madegenericPropsControl([
  'height',
  'textAlign',
  'fontWeight',
  'padding',
  'size',
  'onChange',
  'rounded',
])

const storyArgTypes = {
  backgroundProgressBar: {
    control: 'text',
    description: 'Background of container',
    table: {
      type: { summary: 'string' },
      defaultValue: Progress.defaultProps?.backgroundProgressBar,
    },
  },
  backgroundProgress: {
    control: 'text',
    description: 'Background of progress',
    table: {
      type: { summary: 'string' },
      defaultValue: Progress.defaultProps?.backgroundProgress,
    },
  },
  percent: {
    control: 'number',
    description: 'Percent Number',
    table: {
      type: { summary: 'number' },
      defaultValue: Progress.defaultProps?.percent,
    },
  },
  type: {
    control: { type: 'select', options: options.type },
    description: 'Progress Type',
    table: {
      type: { summary: 'string' },
      defaultValue: Progress.defaultProps?.type,
    },
  },
  maxWidth: {
    control: 'text',
    description: 'Max Width',
    table: {
      type: { summary: 'string' },
      defaultValue: Progress.defaultProps?.maxWidth,
    },
  },
  maxHeight: {
    control: 'text',
    description: 'Max Height',
    table: {
      type: { summary: 'string' },
      defaultValue: Progress.defaultProps?.maxHeight,
    },
  },
  ...genericArgTypes,
}

const docArgTypes = {}

const argTypes = { ...storyArgTypes, ...docArgTypes }

const mainConfig: IStoryMainConfig = {
  title: 'Atoms/Progress',
  component: Progress,
  args: {},
  argTypes: storyArgTypes,
}

const storiesInheritGlobalStyles = getInheritGlobalStylesStories({
  shadow: {
    args: { percent: 75, style: { width: '100px' } },
  },
  margin: {
    args: { percent: 75, style: { width: '100px' } },
    examples: ['0px', '2px', '4px', '6px', '8px', '10px'],
  },
  rounded: null,
  padding: null,
  width: null,
  height: null,
  size: null,
  fontWeight: null,
  textAlign: null,
})

const storiesComponent = [
  {
    storyName: 'WithTypes',
    self: {
      args: { percent: 75, style: { width: '100px' } },
      variants: {
        examples: [
          {
            label: 'Image A',
            value: 'circle',
          },
          {
            label: 'Image B',
            value: 'bar',
          },
        ],
        field: 'type',
      },
    },
  },
  {
    storyName: 'WithBackgrounProgressBar',
    self: {
      args: { percent: 75, style: { width: '100px' } },
      variants: {
        examples: [
          {
            label: 'Background A',
            value: '#FF8882',
            customProps: {
              type: 'circle',
            },
          },
          {
            label: 'Background B',
            value: '#54BAB9',
            customProps: {
              type: 'bar',
            },
          },
        ],
        field: 'backgroundProgressBar',
      },
    },
  },
  {
    storyName: 'WithMaxSizes',
    self: {
      args: { percent: 75, style: { width: '100px' } },
      variants: {
        examples: [
          {
            label: 'Max Height(50px)',
            value: 75,
            customProps: {
              type: 'circle',
              maxHeight: '50px',
              maxWidth: '50px',
            },
          },
          {
            label: 'Max Width(50px)',
            value: 30,
            customProps: {
              type: 'bar',
              maxWidth: '50px',
            },
          },
        ],
        field: 'percent',
      },
    },
  },
]

const storyConfig = getStoryConfigStructure({
  mainConfig,
  storiesInheritGlobalStyles,
  storiesComponent,
  component: Progress,
})

export { storyConfig, argTypes }
