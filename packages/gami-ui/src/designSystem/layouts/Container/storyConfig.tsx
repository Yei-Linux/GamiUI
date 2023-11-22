import { IStoryMainConfig } from 'core/domain/interfaces/IStorybook'
import {
  getInheritGlobalStylesStories,
  getStoryConfigStructure,
  madegenericPropsControl,
} from 'core/helpers/storybook.helper'
import Container from 'designSystem/layouts/Container'

const genericArgTypes = madegenericPropsControl([])

const storyArgTypes = {
  as: {
    control: 'text',
    description: 'Spacing Prop',
    table: {
      type: { summary: 'string' },
      defaultValue: Container.defaultProps?.as,
    },
  },
  ...genericArgTypes,
}

const docArgTypes = {
  children: {
    control: 'object',
    description: 'Content',
    table: {
      type: { summary: 'React.ReactNode' },
    },
  },
}

const argTypes = { ...storyArgTypes, ...docArgTypes }

const mainConfig: IStoryMainConfig = {
  title: 'Layout/Container',
  component: Container,
  args: {},
  argTypes: storyArgTypes,
}

const storiesInheritGlobalStyles = getInheritGlobalStylesStories({
  shadow: {
    args: {
      padding: '1rem',
      children: 'Gami Container',
    },
  },
  margin: {
    args: {
      padding: '1rem',
      children: 'Gami Container',
    },
    examples: ['0px', '2px', '4px', '6px', '8px', '10px'],
  },
  padding: {
    args: {
      padding: '1rem',
      children: 'Gami Container',
    },
    examples: ['0px', '2px', '4px', '6px', '8px', '10px'],
  },
  rounded: {
    args: {
      children: 'Gami Container',
    },
  },
  width: {
    args: {
      padding: '1rem',
      children: 'Gami Container',
    },
  },
  height: {
    args: {
      padding: '1rem',
      children: 'Gami Container',
    },
  },
  size: {
    args: {
      padding: '1rem',
      children: 'Gami Container',
    },
  },
  fontWeight: {
    args: {
      padding: '1rem',
      children: 'Gami Container',
    },
  },
  textAlign: {
    args: {
      padding: '1rem',
      children: 'Gami Container',
    },
  },
})

const storiesComponent = [
  {
    storyName: 'WithAs',
    self: {
      args: {
        padding: '1rem',
        children: 'Gami Container',
      },
      variants: {
        examples: [
          {
            label: 'As p element',
            value: 'p',
          },
          {
            label: 'As div element',
            value: 'div',
          },
        ],
        field: 'as',
      },
    },
  },
  {
    storyName: 'WithDangerousSetInnerHTML',
    self: {
      args: {
        padding: '1rem',
        children: 'Gami Container',
      },
      variants: {
        examples: [
          {
            label: 'With p element',
            value: '<p>Example of dangerous html</p>',
          },
          {
            label: 'With div element',
            value: '<div>Example of dangerous html</div>',
          },
        ],
        field: 'dangerouslySetInnerHTML',
      },
    },
  },
]

const storyConfig = getStoryConfigStructure({
  mainConfig,
  storiesInheritGlobalStyles,
  storiesComponent,
  component: Container,
})

export { storyConfig, argTypes }
