import { IStoryMainConfig } from 'core/domain/interfaces/IStorybook'
import {
  getInheritGlobalStylesStories,
  getStoryConfigStructure,
  madegenericPropsControl,
} from 'core/helpers/storybook.helper'
import Title, { options } from '.'

const genericArgTypes = madegenericPropsControl([])

const storyArgTypes = {
  level: {
    control: { type: 'select', options: options.typeLevel },
    description: 'Level Title',
    table: {
      type: { summary: 'string' },
      defaultValue: Title.defaultProps?.level,
    },
  },
  ...genericArgTypes,
}

const docArgTypes = {
  children: {
    control: 'object',
    description: 'Title Text Content',
    table: {
      type: { summary: 'React.ReactNode' },
    },
  },
}

const argTypes = { ...storyArgTypes, ...docArgTypes }

const mainConfig: IStoryMainConfig = {
  title: 'Atoms/Title 🟢',
  component: Title,
  args: {},
  argTypes: storyArgTypes,
}

const storiesInheritGlobalStyles = getInheritGlobalStylesStories({
  rounded: {
    args: {
      children: 'Gami Title',
      fontWeight: 'semibold',
      level: 'h4',
      textAlign: 'center',
      shadow: 'sm',
      padding: '10px',
    },
  },
  shadow: {
    args: {
      children: 'Gami Title',
      fontWeight: 'semibold',
      level: 'h4',
      textAlign: 'center',
      shadow: 'sm',
      padding: '10px',
    },
  },
  width: {
    args: {
      children: 'GamiUI',
      fontWeight: 'semibold',
      level: 'h4',
      textAlign: 'center',
      shadow: 'sm',
      padding: '10px',
    },
  },
  height: {
    args: {
      children: 'GamiUI',
      fontWeight: 'semibold',
      level: 'h4',
      textAlign: 'center',
      shadow: 'sm',
      padding: '10px',
    },
  },
  size: {
    args: {
      children: 'GamiUI',
      fontWeight: 'semibold',
      level: 'h4',
      textAlign: 'center',
      shadow: 'sm',
      padding: '10px',
    },
  },
  fontWeight: {
    args: {
      children: 'GamiUI',
      textAlign: 'center',
      shadow: 'sm',
      padding: '10px',
    },
  },
  textAlign: {
    args: {
      width: 'lg',
      children: 'GamiUI',
      level: 'h4',
      shadow: 'sm',
      padding: '10px',
    },
  },
  margin: {
    args: {
      children: 'Gami Title',
      level: 'h4',
      textAlign: 'center',
      shadow: 'sm',
      padding: '10px',
    },
    examples: ['0px', '2px', '4px', '6px', '8px', '10px'],
  },
  padding: {
    args: {
      children: 'Gami Title',
      level: 'h4',
      textAlign: 'center',
      shadow: 'sm',
    },
    examples: ['0px', '2px', '4px', '6px', '8px', '10px'],
  },
})

const storiesComponent = [
  {
    storyName: 'WithChildren 🙂',
    self: {
      args: {},
      variants: {
        examples: [
          {
            label: 'Title A',
            value: 'Text A',
          },
          {
            label: 'Title B',
            value: 'Text B',
          },
        ],
        field: 'children',
      },
    },
  },
  {
    storyName: 'WithLevels 🙂',
    self: {
      args: { children: 'GamiUI Text' },
      variants: {
        examples: options.typeLevel.map((level) => ({
          label: level,
          value: level,
        })),
        field: 'level',
      },
    },
  },
]

const storyConfig = getStoryConfigStructure({
  mainConfig,
  storiesInheritGlobalStyles,
  storiesComponent,
  component: Title,
})

export { storyConfig, argTypes }
