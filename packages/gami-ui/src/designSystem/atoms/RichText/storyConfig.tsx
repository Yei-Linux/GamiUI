import { IStoryMainConfig } from 'core/domain/interfaces/IStorybook'
import {
  getInheritGlobalStylesStories,
  getStoryConfigStructure,
  madegenericPropsControl,
} from 'core/helpers/storybook.helper'
import RichText from '.'

const genericArgTypes = madegenericPropsControl([])

const storyArgTypes = {
  text: {
    control: 'text',
    description: 'Text to Show',
    table: {
      type: { summary: 'string' },
      defaultValue: RichText.defaultProps?.text,
    },
  },
  ...genericArgTypes,
}

const docArgTypes = {}

const argTypes = { ...storyArgTypes, ...docArgTypes }

const mainConfig: IStoryMainConfig = {
  title: 'Atoms/RichText 🟢',
  component: RichText,
  args: {},
  argTypes: storyArgTypes,
}

const storiesInheritGlobalStyles = getInheritGlobalStylesStories({
  rounded: {
    args: {
      text: 'Gami RichText',
      fontWeight: 'semibold',
      textAlign: 'center',
      shadow: 'sm',
      padding: '10px',
    },
  },
  shadow: {
    args: {
      text: 'Gami RichText',
      fontWeight: 'semibold',
      textAlign: 'center',
      shadow: 'sm',
      padding: '10px',
    },
  },
  width: {
    args: {
      text: 'Gami RichText',
      fontWeight: 'semibold',
      textAlign: 'center',
      shadow: 'sm',
      padding: '10px',
    },
  },
  height: {
    args: {
      text: 'Gami RichText',
      fontWeight: 'semibold',
      textAlign: 'center',
      shadow: 'sm',
      padding: '10px',
    },
  },
  size: {
    args: {
      text: 'Gami RichText',
      fontWeight: 'semibold',
      textAlign: 'center',
      shadow: 'sm',
      padding: '10px',
    },
  },
  fontWeight: {
    args: {
      text: 'Gami RichText',
      textAlign: 'center',
      shadow: 'sm',
      padding: '10px',
    },
  },
  textAlign: {
    args: {
      width: 'lg',
      text: 'Gami RichText',
      shadow: 'sm',
      padding: '10px',
    },
  },
  margin: {
    args: {
      text: 'Gami RichText',
      textAlign: 'center',
      shadow: 'sm',
      padding: '10px',
    },
    examples: ['0px', '2px', '4px', '6px', '8px', '10px', 'xs:0 0 1rem 0'],
  },
  padding: {
    args: {
      text: 'Gami RichText',
      textAlign: 'center',
      shadow: 'sm',
    },
    examples: ['0px', '2px', '4px', '6px', '8px', '10px', 'xs:0 0 1rem 0'],
  },
})

const storiesComponent = [
  {
    storyName: 'WithText 🙂',
    self: {
      args: {},
      variants: {
        examples: [
          {
            label: 'Basic',
            value: 'This is a basic text',
          },
          {
            label: 'Link',
            value: 'This is a link [help](https://google.com).',
          },
          {
            label: 'ExternalLink',
            value:
              'This is an external link [help](https://google.com?target=_blank).',
          },
          {
            label: 'Italic',
            value: '*This is an italic text*',
          },
          {
            label: 'Bold',
            value: '**This is a bold text**',
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
  component: RichText,
})

export { storyConfig, argTypes }
