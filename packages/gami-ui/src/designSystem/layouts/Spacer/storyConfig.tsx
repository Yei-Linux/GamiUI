import {
  getInheritGlobalStylesStories,
  getStoryConfigStructure,
} from 'core/helpers/storybook.helper'
import Spacer from '.'
import {
  IStoryConfig,
  IStoryMainConfig,
} from 'core/domain/interfaces/IStorybook'

const mainConfig: IStoryMainConfig = {
  title: 'Layout/Spacer',
  component: Spacer,
  args: {},
  argTypes: {},
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
  component: Spacer,
})

export { storyConfig }
