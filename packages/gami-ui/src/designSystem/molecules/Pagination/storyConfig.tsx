import {
  getInheritGlobalStylesStories,
  getStoryConfigStructure,
  madegenericPropsControl,
} from 'core/helpers/storybook.helper'
import Pagination from '.'
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
  numberPages: {
    control: 'number',
    description: 'Number of pages',
    table: {
      type: { summary: 'number' },
    },
  },
  initialPage: {
    control: 'number',
    description: 'Initial Page',
    table: {
      type: { summary: 'number' },
    },
  },
  page: {
    control: 'number',
    description: 'Page',
    table: {
      type: { summary: 'number' },
    },
  },
  ...genericArgTypes,
}

const docArgTypes = {
  onChangePage: {
    control: 'object',
    description: 'Action on change page',
    table: {
      type: { summary: '() => void' },
    },
  },
}

const argTypes = { ...storyArgTypes, ...docArgTypes }

const mainConfig: IStoryMainConfig = {
  title: 'Molecules/Pagination 🟢',
  component: Pagination,
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
    storyName: 'With Number Pages 🙂',
    self: {
      args: {},
      variants: {
        examples: [
          {
            label: '5 pages',
            value: 5,
          },
          {
            label: '7 pages',
            value: 7,
          },
          {
            label: '10 pages',
            value: 10,
          },
        ],
        field: 'numberPages',
      },
    },
  },
]

const storyConfig = getStoryConfigStructure({
  mainConfig,
  storiesInheritGlobalStyles,
  storiesComponent,
  component: Pagination,
})

export { storyConfig, argTypes }
