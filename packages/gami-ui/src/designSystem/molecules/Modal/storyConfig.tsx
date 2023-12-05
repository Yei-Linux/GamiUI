import {
  getInheritGlobalStylesStories,
  getStoryConfigStructure,
  madegenericPropsControl,
} from 'core/helpers/storybook.helper'
import Modal from '.'
import {
  IStoryConfig,
  IStoryMainConfig,
} from 'core/domain/interfaces/IStorybook'

const genericArgTypes = madegenericPropsControl([
  'size',
  'fontWeight',
  'textAlign',
  'margin',
  'width',
  'height',
])

const storyArgTypes = {
  visible: {
    control: 'boolean',
    description: 'visible modal',
    table: {
      type: { summary: 'boolean' },
    },
  },
  minHegiht: {
    control: 'number',
    description: 'Modal minHegiht',
    table: {
      type: { summary: 'number' },
    },
  },
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
  title: {
    control: 'object',
    description: 'Custom title',
    table: {
      type: { summary: 'React.ReactNode' },
    },
  },
  footer: {
    control: 'object',
    description: 'Custom footer',
    table: {
      type: { summary: 'React.ReactNode' },
    },
  },
  onClose: {
    control: 'object',
    description: 'Action on close modal',
    table: {
      type: { summary: '() => void' },
    },
  },
}

const argTypes = { ...storyArgTypes, ...docArgTypes }

const mainConfig: IStoryMainConfig = {
  title: 'Molecules/Modal 🟢',
  component: Modal,
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
  rounded: {
    args: {
      children: 'Gami Modal',
      title: 'Title',
      visible: true,
      minHeight: '300px',
      shadow: 'sm',
    },
  },
  shadow: {
    args: {
      children: 'Gami Modal',
      title: 'Title',
      visible: true,
      minHeight: '300px',
      rounded: 'sm',
    },
  },
  width: null,
  height: null,
  size: null,
  fontWeight: null,
  textAlign: null,
  margin: null,
  padding: {
    args: {
      children: 'Gami Modal',
      title: 'Title',
      visible: true,
      minHeight: '300px',
      shadow: 'sm',
      rounded: 'sm',
    },
    examples: ['0px', '2px', '4px', '6px', '8px', '10px'],
  },
})

const storiesComponent: IStoryConfig[] = []

const storyConfig = getStoryConfigStructure({
  mainConfig,
  storiesInheritGlobalStyles,
  storiesComponent,
  component: Modal,
})

export { storyConfig, argTypes }
