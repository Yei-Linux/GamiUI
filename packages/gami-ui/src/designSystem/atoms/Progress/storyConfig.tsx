import { IStoryMainConfig } from 'core/domain/interfaces/IStorybook'
import {
  getInheritGlobalStylesStories,
  getStoryConfigStructure,
} from 'core/helpers/storybook.helper'
import Progress from '.'

const mainConfig: IStoryMainConfig = {
  title: 'Atoms/Progress',
  component: Progress,
  args: {},
  argTypes: {},
}

const storiesInheritGlobalStyles = getInheritGlobalStylesStories({
  shadow: {
    args: { percent: 75 },
  },
  margin: {
    args: { percent: 75 },
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
      args: { percent: 75 },
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
      args: { percent: 75 },
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
      args: { percent: 75 },
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

export { storyConfig }
