import React from 'react'
import { IStoryMainConfig } from 'core/domain/interfaces/IStorybook'
import {
  getInheritGlobalStylesStories,
  getStoryConfigStructure,
} from 'core/helpers/storybook.helper'
import Button, { options } from '.'
import Icon from '../Icon'

const mainConfig: IStoryMainConfig = {
  title: 'Atoms/Button',
  component: Button,
  args: {},
  argTypes: {},
}

const storiesInheritGlobalStyles = getInheritGlobalStylesStories({
  border: {
    args: {
      children: 'Gami Button',
    },
  },
  shadow: {
    args: {
      children: 'Gami Button',
    },
  },
  width: {
    args: {
      children: 'GamiUI',
    },
  },
  height: {
    args: {
      children: 'GamiUI',
    },
  },
  size: {
    args: {
      children: 'GamiUI',
    },
  },
  fontWeight: null,
  textAlign: null,
  margin: {
    args: {
      children: 'Gami Button',
    },
    examples: ['0px', '2px', '4px', '6px', '8px', '10px'],
  },
  padding: {
    args: {
      children: 'Gami Button',
    },
    examples: ['0px', '2px', '4px', '6px', '8px', '10px'],
  },
})

const storiesComponent = [
  {
    storyName: 'WithDisable',
    self: {
      args: {
        children: 'Gami Button',
      },
      variants: {
        examples: [
          {
            label: 'Disabled',
            value: true,
          },
          {
            label: 'Enable',
            value: false,
          },
        ],
        field: 'disable',
      },
    },
  },
  {
    storyName: 'WithVariants',
    self: {
      args: {
        children: 'Gami Button',
      },
      variants: {
        examples: options.type.map((variant) => ({
          label: variant,
          value: variant,
        })),
        field: 'variant',
      },
    },
  },
  {
    storyName: 'WithPreffix',
    self: {
      args: {
        children: 'Gami Button',
        variant: 'secondary',
      },
      variants: {
        examples: [
          {
            label: 'Icon 1',
            value: <Icon fill="none" size="25px" name="edit" />,
          },
          {
            label: 'Icon 2',
            value: <Icon fill="none" size="25px" name="edit" />,
          },
          {
            label: 'Icon 3',
            value: <Icon fill="none" size="25px" name="edit" />,
          },
        ],
        field: 'preffix',
      },
    },
  },
  {
    storyName: 'WithHtmlButtonTypes',
    self: {
      args: {
        children: 'Gami Button',
      },
      variants: {
        examples: options.typeHtml.map((typeHtml) => ({
          label: typeHtml,
          value: typeHtml,
        })),
        field: 'type',
      },
    },
  },
]

const storyConfig = getStoryConfigStructure({
  mainConfig,
  storiesInheritGlobalStyles,
  storiesComponent,
  component: Button,
})

export { storyConfig }
