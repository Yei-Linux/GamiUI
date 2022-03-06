import { Container, Row, TableStories } from "@gamiui/standard"
import React from "react"

const RowWithDirection = (
  <Row gap="1rem" height="auto">
    <TableStories field="flexDirection" item="" labelStory="Row">
      <Row flexDirection="row">
        <Container
          padding="1rem"
          style={{
            minHeight: "50px",
            minWidth: "50px",
          }}
        >
          1
        </Container>
        <Container
          padding="1rem"
          style={{
            minHeight: "50px",
            minWidth: "50px",
          }}
        >
          2
        </Container>
        <Container
          padding="1rem"
          style={{
            minHeight: "50px",
            minWidth: "50px",
          }}
        >
          3
        </Container>
      </Row>
    </TableStories>
    <TableStories field="flexDirection" item="" labelStory="Column">
      <Row flexDirection="column">
        <Container
          padding="1rem"
          style={{
            minHeight: "50px",
            minWidth: "50px",
          }}
        >
          1
        </Container>
        <Container
          padding="1rem"
          style={{
            minHeight: "50px",
            minWidth: "50px",
          }}
        >
          2
        </Container>
        <Container
          padding="1rem"
          style={{
            minHeight: "50px",
            minWidth: "50px",
          }}
        >
          3
        </Container>
      </Row>
    </TableStories>
  </Row>
)

const RowWithGap = (
  <Row gap="1rem" height="auto">
    <TableStories field="flexDirection" item="" labelStory="Row">
      <Row flexDirection="row">
        <Container
          padding="1rem"
          style={{
            minHeight: "50px",
            minWidth: "50px",
          }}
        >
          1
        </Container>
        <Container
          padding="1rem"
          style={{
            minHeight: "50px",
            minWidth: "50px",
          }}
        >
          2
        </Container>
        <Container
          padding="1rem"
          style={{
            minHeight: "50px",
            minWidth: "50px",
          }}
        >
          3
        </Container>
      </Row>
    </TableStories>
    <TableStories field="flexDirection" item="" labelStory="Column">
      <Row flexDirection="column">
        <Container
          padding="1rem"
          style={{
            minHeight: "50px",
            minWidth: "50px",
          }}
        >
          1
        </Container>
        <Container
          padding="1rem"
          style={{
            minHeight: "50px",
            minWidth: "50px",
          }}
        >
          2
        </Container>
        <Container
          padding="1rem"
          style={{
            minHeight: "50px",
            minWidth: "50px",
          }}
        >
          3
        </Container>
      </Row>
    </TableStories>
  </Row>
)

export { RowWithDirection, RowWithGap }
