import {
  getInheritGlobalStylesStories,
  getStoryConfigStructure,
} from 'core/helpers/storybook.helper'
import Col from '.'
import {
  IStoryConfig,
  IStoryMainConfig,
} from 'core/domain/interfaces/IStorybook'

const mainConfig: IStoryMainConfig = {
  title: 'Layout/Col',
  component: Col,
  args: {},
  argTypes: {},
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    docs: {
      source: {
        type: 'code',
      },
    },
  },
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
  component: Col,
})

export { storyConfig }
