import { Row, TableStories, Title, Transition } from "@gamiui/standard"
import React from "react"

const TransitionWithEase = (
  <Row gap="1rem" height="auto">
    <TableStories
      field="isReadyToInitAnimation"
      item=""
      labelStory="Basic"
      style={{
        height: "90px",
        maxWidth: "250px",
        position: "relative",
        width: "100%",
      }}
    >
      <Transition
        isReadyToInitAnimation
        to={{
          delay: 0,
          duration: 2.5,
          ease: "elastic.out(1,0.3)",
          position: {
            axis: "xPercent",
            value: 20,
          },
        }}
      >
        <Title
          level="h3"
          style={{
            position: "absolute",
          }}
        >
          Hi, this a test
        </Title>
      </Transition>
    </TableStories>
  </Row>
)

const TransitionWithOpacity = (
  <Row gap="1rem" height="auto">
    <TableStories
      field="isReadyToInitAnimation"
      item=""
      labelStory="Basic"
      style={{
        height: "90px",
        maxWidth: "250px",
        position: "relative",
        width: "100%",
      }}
    >
      <Transition
        from={{
          duration: 15,
          opacity: 0.01,
        }}
        isReadyToInitAnimation
        to={{
          opacity: 1,
        }}
      >
        <Title
          level="h3"
          style={{
            position: "absolute",
          }}
        >
          Hi, this a test
        </Title>
      </Transition>
    </TableStories>
  </Row>
)

export { TransitionWithEase, TransitionWithOpacity }
