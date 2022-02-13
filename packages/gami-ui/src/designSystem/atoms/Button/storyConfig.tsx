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
  rounded: {
    args: {
      children: 'Gami Button',
      fontWeight: 'semibold',
    },
  },
  shadow: {
    args: {
      children: 'Gami Button',
      fontWeight: 'semibold',
    },
  },
  width: {
    args: {
      children: 'GamiUI',
      fontWeight: 'semibold',
    },
  },
  height: {
    args: {
      children: 'GamiUI',
      fontWeight: 'semibold',
    },
  },
  size: {
    args: {
      children: 'GamiUI',
      fontWeight: 'semibold',
    },
  },
  fontWeight: {
    args: {
      children: 'GamiUI',
    },
  },
  textAlign: {
    args: {
      width: 'lg',
      children: 'GamiUI',
    },
  },
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
        shadow: 'flat',
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
        fontWeight: 'semibold',
      },
      variants: {
        examples: options.type.map((variant) => ({
          label: variant,
          value: variant,
          customProps: {
            shadow: variant,
          },
        })),
        field: 'variant',
      },
    },
  },
  {
    storyName: 'WithBordered',
    self: {
      args: {
        children: 'Gami Button',
        bordered: true,
        fontWeight: 'semibold',
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
    storyName: 'WithGhost',
    self: {
      args: {
        children: 'Gami Button',
        ghost: true,
        fontWeight: 'semibold',
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
    storyName: 'WithLight',
    self: {
      args: {
        children: 'Gami Button',
        shadow: 'none',
        light: true,
        fontWeight: 'semibold',
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
    storyName: 'WithFlat',
    self: {
      args: {
        children: 'Gami Button',
        shadow: 'none',
        flat: true,
        fontWeight: 'semibold',
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
        variant: 'info',
        shadow: 'info',
        flat: true,
        fontWeight: 'semibold',
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
        fontWeight: 'semibold',
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
