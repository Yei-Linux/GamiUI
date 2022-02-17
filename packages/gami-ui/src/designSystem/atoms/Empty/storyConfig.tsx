import React from 'react'

import { IStoryMainConfig } from 'core/domain/interfaces/IStorybook'
import {
  getInheritGlobalStylesStories,
  getStoryConfigStructure,
} from 'core/helpers/storybook.helper'
import Empty, { options } from 'designSystem/atoms/Empty'
import Icon from 'designSystem/atoms/Icon'
import { lightTheme } from 'styles/tokens/lightTheme'

const mainConfig: IStoryMainConfig = {
  title: 'Atoms/Empty',
  component: Empty,
  args: {},
  argTypes: {},
}

const storiesInheritGlobalStyles = getInheritGlobalStylesStories({
  shadow: {
    args: {
      text: 'No data',
    },
  },
  margin: {
    args: {
      text: 'No data',
    },
    examples: ['0px', '2px', '4px', '6px', '8px', '10px'],
  },
  padding: {
    args: {
      text: 'No data',
    },
    examples: ['0px', '2px', '4px', '6px', '8px', '10px'],
  },
  rounded: null,
  width: null,
  height: null,
  size: null,
  fontWeight: null,
  textAlign: null,
})

const storiesComponent = [
  {
    storyName: 'WithIconTypes',
    self: {
      args: {
        size: '200px',
        color: lightTheme.neutral[300],
      },
      variants: {
        examples: options.type.map((type) => ({
          label: type,
          value: type,
        })),
        field: 'type',
      },
    },
  },
  {
    storyName: 'WithCustomIcons',
    self: {
      args: {
        text: 'No data!',
        color: lightTheme.neutral[300],
      },
      variants: {
        examples: [
          {
            label: 'code',
            value: <Icon size="100px" name="code" />,
          },
          {
            label: 'voice',
            value: <Icon size="100px" name="voice" />,
          },
          {
            label: 'notes',
            value: <Icon size="100px" name="notes" />,
          },
        ],
        field: 'icon',
      },
    },
  },
  {
    storyName: 'WithText',
    self: {
      args: {
        size: '200px',
        color: lightTheme.neutral[300],
      },
      variants: {
        examples: [
          {
            label: 'Title A',
            value: 'Title A',
          },
          {
            label: 'Title B',
            value: 'Title B',
          },
          {
            label: 'Title C',
            value: 'Title C',
          },
        ],
        field: 'text',
      },
    },
  },
  {
    storyName: 'WithTextColors',
    self: {
      args: {
        text: 'No data!',
      },
      variants: {
        examples: [
          {
            label: lightTheme.neutral[0],
            value: lightTheme.neutral[0],
          },
          {
            label: lightTheme.neutral[100],
            value: lightTheme.neutral[100],
          },
          {
            label: lightTheme.neutral[200],
            value: lightTheme.neutral[200],
          },
          {
            label: lightTheme.neutral[300],
            value: lightTheme.neutral[300],
          },
        ],
        field: 'color',
      },
    },
  },
  {
    storyName: 'WithSize',
    self: {
      args: {
        text: 'No data!',
        color: lightTheme.neutral[300],
      },
      variants: {
        examples: [
          {
            label: '100px',
            value: '100px',
          },
          {
            label: '150px',
            value: '150px',
          },
          {
            label: '200px',
            value: '200px',
          },
          {
            label: '250px',
            value: '250px',
          },
        ],
        field: 'size',
      },
    },
  },
]

const storyConfig = getStoryConfigStructure({
  mainConfig,
  storiesInheritGlobalStyles,
  storiesComponent,
  component: Empty,
})

export { storyConfig }
