import {
  getInheritGlobalStylesStories,
  getStoryConfigStructure,
  madegenericPropsControl,
} from 'core/helpers/storybook.helper'
import Form, { options } from '.'
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
  ...genericArgTypes,
}

const docArgTypes = {
  children: {
    control: 'object',
    description: 'Children Prop',
    table: {
      type: { summary: 'React.ReactNode' },
    },
  },
  onSubmitForm: {
    control: 'object',
    description: 'Handler triggered on submit a form',
    table: {
      type: { summary: '() => void' },
    },
  },
  form: {
    control: 'object',
    description: 'FormValues by default, you can get it from useForm hook',
  },
}

const argTypes = { ...storyArgTypes, ...docArgTypes }

const mainConfig: IStoryMainConfig = {
  title: 'Molecules/Form 🟢',
  component: Form,
  args: {},
  argTypes: storyArgTypes,
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
  component: Form,
})

export { storyConfig, argTypes }
