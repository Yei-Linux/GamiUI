import * as React from 'react'

import { IStoryMainConfig } from 'core/domain/interfaces/IStorybook'
import {
  getInheritGlobalStylesStories,
  getStoryConfigStructure,
} from 'core/helpers/storybook.helper'
import Row, { options } from 'designSystem/layouts/Row'
import { Fragment } from 'react'
import Container from '../Container'

const storyArgTypes = {
  gap: {
    control: 'text',
    description: 'Gap',
    table: {
      type: { summary: 'string' },
    },
  },
  width: {
    control: 'text',
    description: 'width Row',
    table: {
      type: { summary: 'string' },
    },
  },
  justifyContent: {
    control: { type: 'select', options: options.justifyContentType },
    description: 'Justify Content',
    table: {
      type: { summary: 'string' },
    },
  },
  alignItems: {
    control: { type: 'select', options: options.alignItemsType },
    description: 'Align Items',
    table: {
      type: { summary: 'string' },
    },
  },
  height: {
    control: 'text',
    description: 'Height Row',
    table: {
      type: { summary: 'string' },
    },
  },
  isWrap: {
    control: 'boolean',
    description: 'Is Wrap',
    table: {
      type: { summary: 'boolean' },
    },
  },
  flexDirection: {
    control: { type: 'select', options: options.directionType },
    description: 'Flex Direction',
    table: {
      type: { summary: 'boolean' },
    },
  },
  className: {
    control: 'text',
    description: 'Classname',
    table: {
      type: { summary: 'string' },
    },
  },
}

const docArgTypes = {
  children: {
    control: 'object',
    description: 'Children Prop',
    table: {
      type: { summary: 'React.ReactNode' },
    },
  },
}

const argTypes = { ...storyArgTypes, ...docArgTypes }

const mainConfig: IStoryMainConfig = {
  title: 'Layout/Row',
  component: Row,
  args: {},
  argTypes: storyArgTypes,
}

const storiesInheritGlobalStyles = getInheritGlobalStylesStories({
  shadow: null,
  margin: null,
  padding: null,
  rounded: null,
  width: null,
  height: null,
  size: null,
  fontWeight: null,
  textAlign: null,
})

const storiesComponent = [
  {
    storyName: 'WithDirection',
    self: {
      args: {
        children: (
          <Fragment>
            <Container
              padding="1rem"
              style={{ minWidth: '50px', minHeight: '50px' }}
            >
              1
            </Container>
            <Container
              padding="1rem"
              style={{ minWidth: '50px', minHeight: '50px' }}
            >
              2
            </Container>
            <Container
              padding="1rem"
              style={{ minWidth: '50px', minHeight: '50px' }}
            >
              3
            </Container>
          </Fragment>
        ),
      },
      variants: {
        examples: [
          {
            label: 'Row',
            value: 'row',
          },
          {
            label: 'Column',
            value: 'column',
          },
        ],
        field: 'flexDirection',
      },
    },
  },

  {
    storyName: 'WithGap',
    self: {
      args: {
        children: (
          <Fragment>
            <Container
              padding="1rem"
              style={{ minWidth: '50px', minHeight: '50px' }}
            >
              1
            </Container>
            <Container
              padding="1rem"
              style={{ minWidth: '50px', minHeight: '50px' }}
            >
              2
            </Container>
            <Container
              padding="1rem"
              style={{ minWidth: '50px', minHeight: '50px' }}
            >
              3
            </Container>
          </Fragment>
        ),
      },
      variants: {
        examples: [
          {
            label: '1rem',
            value: '1rem',
          },
          {
            label: '2rem',
            value: '2rem',
          },
          {
            label: '3rem',
            value: '3rem',
          },
        ],
        field: 'gap',
      },
    },
  },
]

const storyConfig = getStoryConfigStructure({
  mainConfig,
  storiesInheritGlobalStyles,
  storiesComponent,
  component: Row,
})

export { storyConfig, argTypes }
