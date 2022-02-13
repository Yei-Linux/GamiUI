import React from 'react'
import {
  getInheritGlobalStylesStories,
  getStoryConfigStructure,
} from 'core/helpers/storybook.helper'
import Avatar from '.'
import Icon from '../Icon'
import { avatarProfilesImages, options, withTextExamples } from './constants'
import { IStoryMainConfig } from 'core/domain/interfaces/IStorybook'

const mainConfig: IStoryMainConfig = {
  title: 'Atoms/Avatar',
  component: Avatar,
  args: {},
  argTypes: {
    src: {
      control: 'text',
      description: 'Image source',
      table: {
        type: { summary: 'string' },
        defaultValue: Avatar.defaultProps?.src,
      },
    },
    text: {
      control: 'text',
      description: 'Display text when image is missing',
      table: {
        type: { summary: 'string' },
        defaultValue: Avatar.defaultProps?.text,
      },
    },
    alt: {
      control: 'text',
      description: 'Display altText in avatar',
      table: {
        type: { summary: 'string' },
        defaultValue: Avatar.defaultProps?.alt,
      },
    },
    background: {
      control: 'color',
      description: 'Change avatar background',
      table: {
        type: { summary: 'string' },
        defaultValue: Avatar.defaultProps?.background,
      },
    },
    textColor: {
      control: 'color',
      description: 'Change avatar text color',
      table: {
        type: { summary: 'string' },
        defaultValue: Avatar.defaultProps?.textColor,
      },
    },
    borderColor: {
      control: 'color',
      description: 'Change avatar border color',
      table: {
        type: { summary: 'string' },
        defaultValue: Avatar.defaultProps?.borderColor,
      },
    },
    zoomMode: {
      control: { type: 'select', options: options.zoomMode },
      description: 'Display avatar zoom',
      table: {
        type: { summary: 'string' },
        defaultValue: Avatar.defaultProps?.zoomMode,
      },
    },
    textMode: {
      control: { type: 'select', options: options.textMode },
      description: 'Display avatar text mode',
      table: {
        type: { summary: 'string' },
        defaultValue: Avatar.defaultProps?.textMode,
      },
    },
  },
}

const storiesInheritGlobalStyles = getInheritGlobalStylesStories({
  border: {
    args: {
      background: '#F76E11',
      src: avatarProfilesImages.one,
      zoomMode: 'inside',
    },
  },
  shadow: {
    args: {
      src: avatarProfilesImages.one,
      zoomMode: 'inside',
      border: 'lg',
    },
  },
  width: {
    args: {
      src: avatarProfilesImages.one,
      height: 'auto',
      zoomMode: 'inside',
      border: 'lg',
    },
  },
  height: {
    args: {
      src: avatarProfilesImages.one,
      width: 'sm',
      zoomMode: 'inside',
      border: 'lg',
    },
  },
  size: {
    args: {
      src: avatarProfilesImages.one,
      zoomMode: 'inside',
      border: 'lg',
    },
  },
  fontWeight: null,
  textAlign: null,
  margin: {
    args: {
      background: '#F76E11',
      src: avatarProfilesImages.one,
      zoomMode: 'inside',
      border: 'lg',
    },
    examples: ['0px', '2px', '4px', '6px', '8px', '10px'],
  },
  padding: {
    args: {
      background: '#F76E11',
      src: avatarProfilesImages.one,
      zoomMode: 'inside',
      border: 'lg',
    },
    examples: ['0px', '2px', '4px', '6px', '8px', '10px'],
  },
})

const storiesComponent = [
  {
    storyName: 'WithGroup',
    parent: {
      args: {
        count: 12,
      },
      variants: [
        {
          label: 'WithImage',
          value: Object.entries(avatarProfilesImages).map(
            ([, value], index) => (
              <Avatar zoomMode="outside" src={value} key={index} />
            )
          ),
        },
        {
          label: 'WithText',
          value: withTextExamples.map(({ value, customProps }, index) => (
            <Avatar
              zoomMode="outside"
              text={value}
              key={index}
              {...customProps}
            />
          )),
        },
      ],
    },
  },
  {
    storyName: 'WithImage',
    self: {
      args: {
        zoomMode: 'inside',
      },
      variants: {
        examples: Object.entries(avatarProfilesImages).map(
          ([, value], index) => ({
            label: `Image ${index + 1}`,
            value,
          })
        ),
        field: 'src',
      },
    },
  },
  {
    storyName: 'WithText',
    self: {
      args: {},
      variants: {
        examples: withTextExamples,
        field: 'text',
      },
    },
  },
  {
    storyName: 'WithIcon',
    self: {
      args: {
        background: 'white',
        shadow: 'md',
      },
      variants: {
        examples: [
          {
            label: 'Icon 1',
            value: (
              <Icon fill="none" size="25px" name="facebook__transparent" />
            ),
          },
          {
            label: 'Icon 2',
            value: (
              <Icon fill="none" size="25px" name="facebook__transparent" />
            ),
          },
          {
            label: 'Icon 3',
            value: (
              <Icon fill="none" size="25px" name="facebook__transparent" />
            ),
          },
        ],
        field: 'icon',
      },
    },
  },
  {
    storyName: 'WithAlt',
    self: {
      args: {
        background: '#F76E11',
        src: avatarProfilesImages.one,
        zoomMode: 'inside',
        shadow: 'md',
      },
      variants: {
        examples: [
          {
            label: 'Alt 1',
            value: 'Example Alt Avatar 1',
          },
          {
            label: 'Alt 2',
            value: 'Example Alt Avatar 2',
          },
          {
            label: 'Alt 3',
            value: 'Example Alt Avatar 3',
          },
        ],
        field: 'alt',
      },
    },
  },
  {
    storyName: 'WithSetsAndBreakpoints',
    self: {
      args: {
        breakpoints: [
          { mediaMaxWidth: '320px', size: '280px' },
          { mediaMaxWidth: '480px', size: '440px' },
          { size: '800px' },
        ],
        background: '#F76E11',
        src: avatarProfilesImages.one,
        zoomMode: 'inside',
        shadow: 'md',
      },
      variants: {
        examples: [
          {
            label: 'For Sets device',
            value: [
              { setSrc: avatarProfilesImages.one, setWidth: '320w' },
              { setSrc: avatarProfilesImages.one, setWidth: '480w' },
              { setSrc: avatarProfilesImages.one, setWidth: '800w' },
            ],
          },
        ],
        field: 'sets',
      },
    },
  },
  {
    storyName: 'WithZoomMode',
    self: {
      args: {
        background: '#F76E11',
        src: avatarProfilesImages.one,
      },
      variants: {
        examples: options.zoomMode.map((mode) => ({
          label: mode,
          value: mode,
        })),
        field: 'zoomMode',
      },
    },
  },
  {
    storyName: 'WithTextMode',
    self: {
      args: {
        text: 'Jesus Alvan',
      },
      variants: {
        examples: options.textMode.map((mode) => ({
          label: `${mode}: (Jesus Alvan)`,
          value: mode,
        })),
        field: 'textMode',
      },
    },
  },
]

const storyConfig = getStoryConfigStructure({
  mainConfig,
  storiesInheritGlobalStyles,
  storiesComponent,
  component: Avatar,
  parentComponent: Avatar.Group,
})

export { storyConfig }
