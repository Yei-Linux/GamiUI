import React from 'react'
import { IStoryMainConfig } from 'core/domain/interfaces/IStorybook'
import {
  getInheritGlobalStylesStories,
  getStoryConfigStructure,
  madegenericPropsControl,
} from 'core/helpers/storybook.helper'
import Collapse from '.'
import RichText from '../RichText'
import Title from '../Title'
import Avatar from '../Avatar'
import { options } from '../Button'
import { TitleCollapses } from './constants'

const genericArgTypes = madegenericPropsControl([
  'size',
  'fontWeight',
  'textAlign',
  'height',
  'width',
])

const storyArgTypes = {
  variant: {
    control: { type: 'select', options: options.type },
    description: 'Display theme button variants',
    table: {
      type: { summary: 'string' },
      defaultValue: Collapse.defaultProps?.variant,
    },
  },
  bordered: {
    control: 'boolean',
    description: 'Set bordered or not',
    table: {
      type: { summary: 'boolean' },
      defaultValue: Collapse.defaultProps?.bordered,
    },
  },
  expanded: {
    control: 'boolean',
    description: 'Set default visible',
    table: {
      type: { summary: 'boolean' },
      defaultValue: Collapse.defaultProps?.expanded,
    },
  },
  ...genericArgTypes,
}

const docArgTypes = {
  title: {
    control: 'object',
    description: 'Display title collapse',
    table: {
      type: { summary: 'React.ReactNode' },
    },
  },
  subtitle: {
    control: 'object',
    description: 'Display subtitle collapse',
    table: {
      type: { summary: 'React.ReactNode' },
    },
  },
  contentLeft: {
    control: 'object',
    description: 'Display content Left of Collapse Header',
    table: {
      type: { summary: 'React.ReactNode' },
    },
  },
  icon: {
    control: 'object',
    description: 'Display icon of Collapse Header',
    table: {
      type: { summary: 'React.ReactNode' },
    },
  },
  children: {
    control: 'object',
    description: 'Display content Of Collapse',
    table: {
      type: { summary: 'React.ReactNode' },
    },
  },
}

const argTypes = { ...storyArgTypes, ...docArgTypes }

const mainConfig: IStoryMainConfig = {
  title: 'Atoms/Collapse',
  component: Collapse,
  args: {},
  argTypes: storyArgTypes,
}

const textContentMock = () => (
  <RichText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
)
const storiesInheritGlobalStyles = getInheritGlobalStylesStories({
  rounded: {
    args: {
      style: { maxWidth: '300px' },
      title: <Title level="h3">Title</Title>,
      subtitle: 'Subtitle',
      children: textContentMock(),
      shadow: 'xs',
    },
  },
  shadow: {
    args: {
      style: { maxWidth: '300px' },
      title: <Title level="h3">Title</Title>,
      subtitle: 'Subtitle',
      children: textContentMock(),
    },
  },
  margin: {
    args: {
      style: { maxWidth: '300px' },
      title: <Title level="h3">Title</Title>,
      subtitle: 'Subtitle',
      children: textContentMock(),
      shadow: 'xs',
    },
    examples: ['0px', '2px', '4px', '6px', '8px', '10px'],
  },
  padding: {
    args: {
      style: { maxWidth: '300px' },
      title: <Title level="h3">Title</Title>,
      subtitle: 'Subtitle',
      children: textContentMock(),
      shadow: 'xs',
    },
    examples: ['0px', '2px', '4px', '6px', '8px', '10px'],
  },
  width: null,
  height: null,
  size: null,
  fontWeight: null,
  textAlign: null,
})

const storiesComponent = [
  {
    storyName: 'WithGroupAndDivider',
    parent: {
      args: { divider: true },
      variants: [
        {
          label: 'WithDivider',
          value: TitleCollapses.map((Title) => ({
            props: { title: Title, children: textContentMock() },
            Component: Collapse,
          })),
        },
      ],
    },
  },
  {
    storyName: 'WithGroupAndNotDivider',
    parent: {
      args: { divider: false },
      variants: [
        {
          label: 'WithNotDivider',
          value: TitleCollapses.map((Title) => ({
            props: { title: Title, children: textContentMock() },
            Component: Collapse,
          })),
        },
      ],
    },
  },
  {
    storyName: 'WithGroupAndAccordion',
    parent: {
      args: { accordion: true },
      variants: [
        {
          label: 'WithAccordion',
          value: TitleCollapses.map((Title) => ({
            props: { title: Title, children: textContentMock() },
            Component: Collapse,
          })),
        },
      ],
    },
  },
  {
    storyName: 'WithTitle',
    self: {
      args: {
        children: textContentMock(),
      },
      variants: {
        examples: [
          {
            label: 'Title A',
            value: <Title level="h3">Title A</Title>,
          },
          {
            label: 'Title B',
            value: <Title level="h3">Title B</Title>,
          },
          {
            label: 'Title C',
            value: <Title level="h3">Title C</Title>,
          },
        ],
        field: 'title',
      },
    },
  },
  {
    storyName: 'WithSubTitle',
    self: {
      args: {
        title: <Title level="h3">Title</Title>,
        children: textContentMock(),
      },
      variants: {
        examples: [
          {
            label: 'Subtitle A',
            value: 'Subtitle A',
          },
          {
            label: 'Subtitle B',
            value: 'Subtitle B',
          },
          {
            label: 'Subtitle C',
            value: 'Subtitle C',
          },
        ],
        field: 'subtitle',
      },
    },
  },
  {
    storyName: 'WithExpanded',
    self: {
      args: {
        title: <Title level="h3">Title</Title>,
        subtitle: 'Subtitle',
        children: textContentMock(),
      },
      variants: {
        examples: [
          {
            label: 'Initial Expanded',
            value: true,
          },
          {
            label: 'Not initial expanded',
            value: false,
          },
        ],
        field: 'expanded',
      },
    },
  },
  {
    storyName: 'WithVariants',
    self: {
      args: {
        title: <Title level="h2">Title</Title>,
        subtitle: 'Subtitle',
        rounded: 'md',
        children: textContentMock(),
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
        title: <Title level="h2">Title</Title>,
        subtitle: 'Subtitle',
        rounded: 'md',
        bordered: true,
        children: textContentMock(),
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
    storyName: 'WithContentLeft',
    self: {
      args: {
        title: <Title level="h3">Title</Title>,
        subtitle: 'Subtitle',
        children: textContentMock(),
      },
      variants: {
        examples: [
          {
            label: 'Exm A',
            value: (
              <Avatar
                rounded="lg"
                shadow="flat"
                src="https://i.imgur.com/vyW3w3r.png"
                zoomMode="inside"
              />
            ),
          },
          {
            label: 'Exm B',
            value: (
              <Avatar
                rounded="lg"
                shadow="flat"
                src="https://i.imgur.com/lkIgoZP.png"
                zoomMode="inside"
              />
            ),
          },
          {
            label: 'Exm C',
            value: (
              <Avatar
                rounded="lg"
                shadow="flat"
                src="https://i.imgur.com/IXPZxIr.png"
                zoomMode="inside"
              />
            ),
          },
        ],
        field: 'contentLeft',
      },
    },
  },
]

const storyConfig = getStoryConfigStructure({
  mainConfig,
  storiesInheritGlobalStyles,
  storiesComponent,
  component: Collapse,
  parentComponent: Collapse.Group,
})

export { storyConfig, argTypes }
