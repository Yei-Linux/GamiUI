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
import styled from '@emotion/styled'

const LayoutContent = styled(Layout.Content)`
  background-color: ${defaultTheme.light.primary.jordyBlue};
`

const LayoutHeader = styled(Layout.Header)`
  background-color: ${defaultTheme.light.primary.mediumPurple};
  box-shadow: 0px 2px 8px 0px rgb(0 0 0 / 5%);
  z-index: 1;
`

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
  title: 'Layout/Layout 🟢',
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
    storyName: 'WithDefault 🙂',
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
    storyName: 'WithSidebar 🙂',
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
                <Layout.Wrapper>
                  <Layout.Sidebar
                    style={{
                      background: defaultTheme.light.primary.hawkesBlue,
                    }}
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
                </Layout.Wrapper>
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
    storyName: 'WithoutFooter 🙂',
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
                <Layout.Wrapper>
                  <Layout.Sidebar
                    style={{
                      background: defaultTheme.light.primary.hawkesBlue,
                    }}
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
                </Layout.Wrapper>
              </Fragment>
            ),
          },
        ],
        field: 'children',
      },
    },
  },

  {
    storyName: 'WithStyled 🙂',
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
                <LayoutHeader>
                  <Container padding="1rem">This is my header</Container>
                </LayoutHeader>
                <LayoutContent>
                  <Container padding="1rem">This is my content</Container>
                </LayoutContent>
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
