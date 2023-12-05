import { IStoryMainConfig } from 'core/domain/interfaces/IStorybook'
import {
  getInheritGlobalStylesStories,
  getStoryConfigStructure,
  madegenericPropsControl,
} from 'core/helpers/storybook.helper'
import TextArea from '.'

const genericArgTypes = madegenericPropsControl([])

const storyArgTypes = {
  placeholder: {
    control: 'text',
    description: 'placeholder to Show',
    table: {
      type: { summary: 'string' },
    },
  },
  name: {
    control: 'text',
    description: 'name to Show',
    table: {
      type: { summary: 'string' },
    },
  },
  cols: {
    control: 'number',
    description: 'cols to Show',
    table: {
      type: { summary: 'number' },
    },
  },
  rows: {
    control: 'number',
    description: 'cols to Show',
    table: {
      type: { summary: 'number' },
    },
  },
  ...genericArgTypes,
}

const docArgTypes = {
  onChangeFormItem: {
    control: 'object',
    description: 'onChangeFormItem Prop',
    table: {
      type: { summary: '() => void' },
    },
  },
}

const argTypes = { ...storyArgTypes, ...docArgTypes }

const mainConfig: IStoryMainConfig = {
  title: 'Atoms/TextArea 🟢',
  component: TextArea,
  args: {},
  argTypes: storyArgTypes,
}

const storiesInheritGlobalStyles = getInheritGlobalStylesStories({
  rounded: {
    args: {
      placeholder: 'Type your text',
      width: 'full',
    },
  },
  shadow: {
    args: {
      placeholder: 'Type your text',
      width: 'full',
    },
  },
  width: {
    args: {
      placeholder: 'Type your text',
      width: 'full',
    },
  },
  height: {
    args: {
      placeholder: 'Type your text',
      width: 'full',
    },
  },
  size: {
    args: {
      placeholder: 'Type your text',
      width: 'full',
    },
  },
  fontWeight: {
    args: {
      placeholder: 'Type your text',
      width: 'full',
    },
  },
  textAlign: {
    args: {
      placeholder: 'Type your text',
      width: 'full',
    },
  },
  margin: {
    args: {
      placeholder: 'Type your text',
      width: 'full',
    },
    examples: ['0px', '2px', '4px', '6px', '8px', '10px', 'xs:0 0 1rem 0'],
  },
  padding: {
    args: {
      placeholder: 'Type your text',
      width: 'full',
    },
    examples: ['0px', '2px', '4px', '6px', '8px', '10px', 'xs:0 0 1rem 0'],
  },
})

const storiesComponent = [
  {
    storyName: 'WithText 🙂',
    self: {
      args: { placeholder: 'Type your text', width: 'full' },
      variants: {
        examples: [
          {
            label: 'Basic',
            value: 'This is a TextArea',
          },
        ],
        field: 'text',
      },
    },
  },
]

const storyConfig = getStoryConfigStructure({
  mainConfig,
  storiesInheritGlobalStyles,
  storiesComponent,
  component: TextArea,
})

export { storyConfig, argTypes }
