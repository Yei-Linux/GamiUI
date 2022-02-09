import React from 'react'
import { getStoryConfigStructure } from 'core/helpers/storybook.helper'
import { DESIGN_TYPES } from 'core/utils/constants'
import Avatar from '.'
import Icon from '../Icon'
import { avatarProfilesImages, options } from './constants'

const mainConfig = {
  title: 'Atoms/Avatar',
  component: Avatar,
  args: {},
  argTypes: {},
}

const storiesInheritGlobalStyles = [
  {
    storyName: 'WithBorders',
    args: {
      variants: {
        examples: DESIGN_TYPES.border.map((border) => ({
          label: border,
          value: border,
        })),
        field: 'border',
      },
      background: '#F76E11',
      src: avatarProfilesImages.one,
      zoomMode: 'inside',
    },
  },
  {
    storyName: 'WithShadows',
    args: {
      variants: {
        examples: DESIGN_TYPES.shadow.map((shadow) => ({
          label: shadow,
          value: shadow,
        })),
        field: 'shadow',
      },
      src: avatarProfilesImages.one,
      zoomMode: 'inside',
      border: 'lg',
    },
  },
  {
    storyName: 'WithPaddings',
    args: {
      variants: {
        examples: ['0px', '2px', '4px', '6px', '8px', '10px'].map(
          (padding) => ({
            label: padding,
            value: padding,
          })
        ),
        field: 'padding',
      },
      background: '#F76E11',
      src: avatarProfilesImages.one,
      zoomMode: 'inside',
      border: 'lg',
    },
  },
  {
    storyName: 'WithMargins',
    args: {
      variants: {
        examples: ['0px', '2px', '4px', '6px', '8px', '10px'].map((margin) => ({
          label: margin,
          value: margin,
        })),
        field: 'margin',
      },
      background: '#F76E11',
      src: avatarProfilesImages.one,
      zoomMode: 'inside',
      border: 'lg',
    },
  },
  {
    storyName: 'WithWidths',
    args: {
      variants: {
        examples: DESIGN_TYPES.width.map((width) => ({
          label: width,
          value: width,
        })),
        field: 'width',
      },
      src: avatarProfilesImages.one,
      heigth: 'auto',
      zoomMode: 'inside',
      border: 'lg',
    },
  },
  {
    storyName: 'WithHeight',
    args: {
      variants: {
        examples: DESIGN_TYPES.height.map((height) => ({
          label: height,
          value: height,
        })),
        field: 'heigth',
      },
      src: avatarProfilesImages.one,
      width: 'sm',
      zoomMode: 'inside',
      border: 'lg',
    },
  },
]

const storiesComponent = [
  {
    storyName: 'WithImage',
    args: {
      variants: {
        examples: Object.entries(avatarProfilesImages).map(
          ([, value], index) => ({
            label: `Image ${index + 1}`,
            value,
          })
        ),
        field: 'src',
      },
      zoomMode: 'inside',
    },
  },
  {
    storyName: 'WithText',
    args: {
      variants: {
        examples: [
          {
            label: 'Textone',
            value: 'Jesus',
            customProps: {
              background: '#54BAB9',
              textColor: 'white',
            },
          },
          {
            label: 'Texttwo',
            value: 'Yei Linux',
            customProps: {
              background: '#54BAB9',
              textColor: 'white',
            },
          },
          {
            label: 'Textthree',
            value: 'Cesar Jesus Alberto',
            customProps: {
              background: '#54BAB9',
              textColor: 'white',
            },
          },
        ],
        field: 'text',
      },
    },
  },
  {
    storyName: 'WithIcon',
    args: {
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
      background: 'white',
      shadow: 'md',
    },
  },
  {
    storyName: 'WithAlt',
    args: {
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
      background: '#F76E11',
      src: avatarProfilesImages.one,
      zoomMode: 'inside',
      shadow: 'md',
    },
  },
  {
    storyName: 'WithSetsAndBreakpoints',
    args: {
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
  },
  {
    storyName: 'WithZoomMode',
    args: {
      variants: {
        examples: options.zoomMode.map((mode) => ({
          label: mode,
          value: mode,
        })),
        field: 'zoomMode',
      },
      background: '#F76E11',
      src: avatarProfilesImages.one,
    },
  },
  {
    storyName: 'WithTextMode',
    args: {
      variants: {
        examples: options.textMode.map((mode) => ({
          label: mode,
          value: mode,
        })),
        field: 'textMode',
      },
      text: 'Jesus Alvan',
    },
  },
]

const storyConfig = getStoryConfigStructure({
  mainConfig,
  storiesInheritGlobalStyles,
  storiesComponent,
  component: Avatar,
})

export { storyConfig }
