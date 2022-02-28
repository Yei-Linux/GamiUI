import * as React from 'react'

import { IStoryMainConfig } from 'core/domain/interfaces/IStorybook'
import {
  getInheritGlobalStylesStories,
  getStoryConfigStructure,
} from 'core/helpers/storybook.helper'
import Layout from 'designSystem/layouts/Layout'
import { Fragment } from 'react'
import Container from '../Container'
import { defaultTheme } from 'styles/tokens'

const storyArgTypes = {
  className: {
    control: 'text',
    description: 'Classname Prop',
    table: {
      type: { summary: 'string' },
    },
  },
  width: {
    control: 'text',
    description: 'width Prop',
    table: {
      type: { summary: 'string' },
    },
  },
  height: {
    control: 'text',
    description: 'height Prop',
    table: {
      type: { summary: 'string' },
    },
  },
  minHeight: {
    control: 'text',
    description: 'min height Prop',
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
  title: 'Layout/Layout',
  component: Layout,
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
    storyName: 'WithDefault',
    self: {
      args: {
        minHeight: '300px',
      },
      variants: {
        examples: [
          {
            label: 'Basic',
            value: (
              <Fragment>
                <Layout.Header
                  style={{ background: defaultTheme.light.primary.jordyBlue }}
                >
                  <Container padding="1rem">This is my header</Container>
                </Layout.Header>
                <Layout.Content
                  style={{
                    background: defaultTheme.light.primary.mediumPurple,
                  }}
                >
                  <Container padding="1rem">This is my content</Container>
                </Layout.Content>
                <Layout.Footer
                  style={{ background: defaultTheme.light.primary.selago }}
                >
                  <Container padding="1rem">This is my footer</Container>
                </Layout.Footer>
              </Fragment>
            ),
          },
        ],
        field: 'children',
      },
    },
  },

  {
    storyName: 'WithSidebar',
    self: {
      args: {
        minHeight: '300px',
      },
      variants: {
        examples: [
          {
            label: 'Basic',
            value: (
              <Fragment>
                <Layout.Header
                  style={{ background: defaultTheme.light.primary.jordyBlue }}
                >
                  <Container padding="1rem">This is my header</Container>
                </Layout.Header>
                <Layout.Sidebar
                  style={{ background: defaultTheme.light.primary.hawkesBlue }}
                >
                  <Container padding="1rem">This is my sidebar</Container>
                </Layout.Sidebar>
                <Layout.Content
                  style={{
                    background: defaultTheme.light.primary.mediumPurple,
                  }}
                >
                  <Container padding="1rem">This is my content</Container>
                </Layout.Content>
                <Layout.Footer
                  style={{ background: defaultTheme.light.primary.selago }}
                >
                  <Container padding="1rem">This is my footer</Container>
                </Layout.Footer>
              </Fragment>
            ),
          },
        ],
        field: 'children',
      },
    },
  },
]

const storyConfig = getStoryConfigStructure({
  mainConfig,
  storiesInheritGlobalStyles,
  storiesComponent,
  component: Layout,
})

export { storyConfig, argTypes }
