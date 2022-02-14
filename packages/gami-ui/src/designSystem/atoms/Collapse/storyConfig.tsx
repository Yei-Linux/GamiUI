import React from 'react'
import { IStoryMainConfig } from 'core/domain/interfaces/IStorybook'
import {
  getInheritGlobalStylesStories,
  getStoryConfigStructure,
} from 'core/helpers/storybook.helper'
import Collapse from '.'
import RichText from '../RichText'
import Title from '../Title'
import Avatar from '../Avatar'

const mainConfig: IStoryMainConfig = {
  title: 'Atoms/Collapse',
  component: Collapse,
  args: {},
  argTypes: {},
}

const textContentMock = () => (
  <RichText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
)
const storiesInheritGlobalStyles = getInheritGlobalStylesStories({
  rounded: {
    args: {
      title: <Title level="h3">Title</Title>,
      subtitle: 'Subtitle',
      children: textContentMock(),
      shadow: 'xs',
    },
  },
  shadow: {
    args: {
      title: <Title level="h3">Title</Title>,
      subtitle: 'Subtitle',
      children: textContentMock(),
    },
  },
  margin: {
    args: {
      title: <Title level="h3">Title</Title>,
      subtitle: 'Subtitle',
      children: textContentMock(),
      shadow: 'xs',
    },
    examples: ['0px', '2px', '4px', '6px', '8px', '10px'],
  },
  padding: {
    args: {
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
})

export { storyConfig }
