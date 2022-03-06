import { Container, Layout, Link, Row, TableStories } from "@gamiui/standard"
import React from "react"

const LayoutWithDefault = (
  <Row gap="1rem" height="auto">
    <TableStories field="children" item="" labelStory="Basic">
      <Layout minHeight="300px">
        <Layout.Header
          style={{
            background: "#7f9cf5",
          }}
        >
          <Container padding="1rem">This is my header</Container>
        </Layout.Header>
        <Layout.Content
          style={{
            background: "#9879e9",
          }}
        >
          <Container padding="1rem">This is my content</Container>
        </Layout.Content>
        <Layout.Footer
          style={{
            background: "#FF8882",
          }}
        >
          <Container padding="1rem">This is my footer</Container>
        </Layout.Footer>
      </Layout>
    </TableStories>
  </Row>
)

const LayoutWithSidebar = (
  <Row gap="1rem" height="auto">
    <TableStories field="children" item="" labelStory="Basic">
      <Layout minHeight="300px">
        <Layout.Header
          style={{
            background: "#7f9cf5",
          }}
        >
          <Container padding="1rem">This is my header</Container>
        </Layout.Header>
        <Layout.Sidebar
          style={{
            background: "#54BAB9",
          }}
        >
          <Container padding="1rem">This is my sidebar</Container>
        </Layout.Sidebar>
        <Layout.Content
          style={{
            background: "#9879e9",
          }}
        >
          <Container padding="1rem">This is my content</Container>
        </Layout.Content>
        <Layout.Footer
          style={{
            background: "#FF8882",
          }}
        >
          <Container padding="1rem">This is my footer</Container>
        </Layout.Footer>
      </Layout>
    </TableStories>
  </Row>
)

export { LayoutWithDefault, LayoutWithSidebar }
