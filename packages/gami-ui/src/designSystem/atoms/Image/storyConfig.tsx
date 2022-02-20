import React from 'react'
import { IStoryMainConfig } from 'core/domain/interfaces/IStorybook'
import {
  getInheritGlobalStylesStories,
  getStoryConfigStructure,
} from 'core/helpers/storybook.helper'
import Image from '.'
import Title from '../Title'
import Container from 'designSystem/layouts/Container'
import { imagesExamples } from './constants'

const mainConfig: IStoryMainConfig = {
  title: 'Atoms/Image',
  component: Image,
  args: {},
  argTypes: {},
}

const storiesInheritGlobalStyles = getInheritGlobalStylesStories({
  shadow: {
    args: {
      src: imagesExamples.two,
      alt: 'Game Character',
    },
  },
  rounded: {
    args: {
      shadow: 'xs',
      src: imagesExamples.two,
      alt: 'Game Character',
    },
  },
  margin: {
    args: {
      src: imagesExamples.two,
      alt: 'Game Character',
    },
    examples: ['0px', '2px', '4px', '6px', '8px', '10px'],
  },
  padding: null,
  width: null,
  height: null,
  size: null,
  fontWeight: null,
  textAlign: null,
})

const storiesComponent = [
  {
    storyName: 'WithSrcsAndAlts',
    self: {
      args: {
        alt: 'Image Story',
      },
      variants: {
        examples: [
          {
            label: 'Image A',
            value: imagesExamples.two,
          },
          {
            label: 'Image B',
            value: imagesExamples.one,
          },
          {
            label: 'Image C',
            value: imagesExamples.three,
          },
          {
            label: 'Image D',
            value: imagesExamples.four,
          },
        ],
        field: 'src',
      },
    },
  },
  {
    storyName: 'WithLink',
    self: {
      args: {
        alt: 'Image Story',
        src: imagesExamples.one,
      },
      variants: {
        examples: [
          {
            label: 'Link One on new tab',
            value: {
              url: 'https://gamiui.com/',
              newTab: true,
            },
          },
          {
            label: 'Link Two on self tab',
            value: {
              url: 'https://gamiui.com/',
              newTab: false,
            },
          },
        ],
        field: 'link',
      },
    },
  },
  {
    storyName: 'WithBackground',
    self: {
      args: {
        alt: 'Image Story',
        src: imagesExamples.one,
      },
      variants: {
        examples: [
          {
            label: 'Image A with Contain Prop(Auto Sizes)',
            value: (
              <Title level="h3" textAlign="center">
                My Image A
              </Title>
            ),
            customProps: {
              backgroundSize: 'contain',
            },
          },
          {
            label: 'Image B with Cover Prop(Auto Sizes)',
            value: (
              <Title level="h3" textAlign="center">
                My Image B
              </Title>
            ),
            customProps: {
              backgroundSize: 'cover',
            },
          },
          {
            label: 'Image A with Contain Prop(Static Sizes)',
            value: (
              <Container
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                width="full"
                height="full"
              >
                <Title level="h3" textAlign="center">
                  My Image A
                </Title>
              </Container>
            ),
            customProps: {
              backgroundSize: 'contain',
              width: '200px',
              height: '262px',
            },
          },
          {
            label: 'Image B with Cover Prop(Static Sizes)',
            value: (
              <Container
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                width="full"
                height="full"
              >
                <Title level="h3" textAlign="center">
                  My Image B
                </Title>
              </Container>
            ),
            customProps: {
              backgroundSize: 'cover',
              width: '200px',
              height: '262px',
            },
          },
        ],
        field: 'children',
      },
    },
  },
  {
    storyName: 'WithSetsAndBreakpoints',
    self: {
      args: {
        alt: 'Image Story',
        breakpoints: [
          { mediaMaxWidth: '320px', size: '280px' },
          { mediaMaxWidth: '480px', size: '440px' },
          { size: '800px' },
        ],
        src: imagesExamples.two,
        shadow: 'md',
      },
      variants: {
        examples: [
          {
            label: 'For Sets device',
            value: [
              {
                setSrc: imagesExamples.two,
                setWidth: '320w',
              },
              {
                setSrc: imagesExamples.two,
                setWidth: '480w',
              },
              {
                setSrc: imagesExamples.two,
                setWidth: '800w',
              },
            ],
          },
        ],
        field: 'sets',
      },
    },
  },
  {
    storyName: 'WithMaxSizes',
    self: {
      args: {
        alt: 'Image Story',
        height: 'auto',
        src: imagesExamples.one,
      },
      variants: {
        examples: [
          {
            label: 'Max Width(100px)',
            value: 'auto',
            customProps: {
              maxWidth: '100px',
            },
          },
          {
            label: 'Max Height(100px)',
            value: 'auto',
            customProps: {
              maxHeight: '100px',
            },
          },
          {
            label: 'Min Width(300px)',
            value: 'auto',
            customProps: {
              minWidth: '300px',
            },
          },
          {
            label: 'Min Height(300px)',
            value: 'auto',
            customProps: {
              minHeight: '300px',
            },
          },
        ],
        field: 'width',
      },
    },
  },
]

const storyConfig = getStoryConfigStructure({
  mainConfig,
  storiesInheritGlobalStyles,
  storiesComponent,
  component: Image,
})

export { storyConfig }
