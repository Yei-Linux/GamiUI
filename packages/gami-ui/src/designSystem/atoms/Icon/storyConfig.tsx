import { IStoryMainConfig } from 'core/domain/interfaces/IStorybook'
import {
  getInheritGlobalStylesStories,
  getStoryConfigStructure,
} from 'core/helpers/storybook.helper'
import { lightTheme } from 'styles/tokens/lightTheme'
import Icon from '.'

const mainConfig: IStoryMainConfig = {
  title: 'Atoms/Icon',
  component: Icon,
  args: {},
  argTypes: {},
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
    storyName: 'WithFills',
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
        ],
        field: 'fill',
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

export { storyConfig }
