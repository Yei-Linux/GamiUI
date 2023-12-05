import {
  getInheritGlobalStylesStories,
  getStoryConfigStructure,
} from 'core/helpers/storybook.helper'
import Col, { options } from '.'
import {
  IStoryConfig,
  IStoryMainConfig,
} from 'core/domain/interfaces/IStorybook'

const storyArgTypes = {
  className: {
    control: 'text',
    description: 'Classname Prop',
    table: {
      type: { summary: 'string' },
      defaultValue: Col.defaultProps?.className,
    },
  },
  spacing: {
    control: { type: 'select', options: options.spacingType },
    description: 'Spacing Prop',
    table: {
      type: { summary: 'string' },
      defaultValue: Col.defaultProps?.spacing,
    },
  },
  customSpacing: {
    control: 'text',
    description: 'Custom Spacing Prop',
    table: {
      type: { summary: 'string' },
      defaultValue: Col.defaultProps?.customSpacing,
    },
  },
  xs: {
    control: { type: 'select', options: options.type },
    description: 'Extra Small Size',
    table: {
      type: { summary: 'string' },
      defaultValue: Col.defaultProps?.xs,
    },
  },
  sm: {
    control: { type: 'select', options: options.type },
    description: 'Small Size',
    table: {
      type: { summary: 'string' },
      defaultValue: Col.defaultProps?.sm,
    },
  },
  md: {
    control: { type: 'select', options: options.type },
    description: 'Medium Size',
    table: {
      type: { summary: 'string' },
      defaultValue: Col.defaultProps?.md,
    },
  },
  lg: {
    control: { type: 'select', options: options.type },
    description: 'Large Size',
    table: {
      type: { summary: 'string' },
      defaultValue: Col.defaultProps?.lg,
    },
  },
}

const docArgTypes = {
  children: {
    control: 'object',
    description: 'Children Prop',
    table: {
      type: { summary: 'React.ReactNode' },
    },
  },
}

const argTypes = { ...storyArgTypes, ...docArgTypes }

const mainConfig: IStoryMainConfig = {
  title: 'Layout/Col 🟢',
  component: Col,
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
  component: Col,
})

export { storyConfig, argTypes }
