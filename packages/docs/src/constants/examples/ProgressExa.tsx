import { Progress, Row, TableStories } from "@gamiui/standard"
import React from "react"

const ProgressWithShadow = (
  <Row gap="1rem" height="auto">
    <TableStories field="shadow" item="" labelStory="none">
      <Progress
        percent={75}
        shadow="none"
        style={{
          width: "100px",
        }}
      />
    </TableStories>
    <TableStories field="shadow" item="" labelStory="xs">
      <Progress
        percent={75}
        shadow="xs"
        style={{
          width: "100px",
        }}
      />
    </TableStories>
    <TableStories field="shadow" item="" labelStory="sm">
      <Progress
        percent={75}
        shadow="sm"
        style={{
          width: "100px",
        }}
      />
    </TableStories>
    <TableStories field="shadow" item="" labelStory="md">
      <Progress
        percent={75}
        shadow="md"
        style={{
          width: "100px",
        }}
      />
    </TableStories>
    <TableStories field="shadow" item="" labelStory="lg">
      <Progress
        percent={75}
        shadow="lg"
        style={{
          width: "100px",
        }}
      />
    </TableStories>
    <TableStories field="shadow" item="" labelStory="full">
      <Progress
        percent={75}
        shadow="full"
        style={{
          width: "100px",
        }}
      />
    </TableStories>
    <TableStories field="shadow" item="" labelStory="flat">
      <Progress
        percent={75}
        shadow="flat"
        style={{
          width: "100px",
        }}
      />
    </TableStories>
    <TableStories field="shadow" item="" labelStory="primary">
      <Progress
        percent={75}
        shadow="primary"
        style={{
          width: "100px",
        }}
      />
    </TableStories>
    <TableStories field="shadow" item="" labelStory="secondary">
      <Progress
        percent={75}
        shadow="secondary"
        style={{
          width: "100px",
        }}
      />
    </TableStories>
    <TableStories field="shadow" item="" labelStory="tertiary">
      <Progress
        percent={75}
        shadow="tertiary"
        style={{
          width: "100px",
        }}
      />
    </TableStories>
    <TableStories field="shadow" item="" labelStory="cuaternary">
      <Progress
        percent={75}
        shadow="cuaternary"
        style={{
          width: "100px",
        }}
      />
    </TableStories>
    <TableStories field="shadow" item="" labelStory="success">
      <Progress
        percent={75}
        shadow="success"
        style={{
          width: "100px",
        }}
      />
    </TableStories>
    <TableStories field="shadow" item="" labelStory="warning">
      <Progress
        percent={75}
        shadow="warning"
        style={{
          width: "100px",
        }}
      />
    </TableStories>
    <TableStories field="shadow" item="" labelStory="danger">
      <Progress
        percent={75}
        shadow="danger"
        style={{
          width: "100px",
        }}
      />
    </TableStories>
    <TableStories field="shadow" item="" labelStory="info">
      <Progress
        percent={75}
        shadow="info"
        style={{
          width: "100px",
        }}
      />
    </TableStories>
    <TableStories field="shadow" item="" labelStory="gradient">
      <Progress
        percent={75}
        shadow="gradient"
        style={{
          width: "100px",
        }}
      />
    </TableStories>
  </Row>
)

const ProgressWithMargin = (
  <Row gap="1rem" height="auto">
    <TableStories field="margin" item="" labelStory="0px">
      <Progress
        margin="0px"
        percent={75}
        style={{
          width: "100px",
        }}
      />
    </TableStories>
    <TableStories field="margin" item="" labelStory="2px">
      <Progress
        margin="2px"
        percent={75}
        style={{
          width: "100px",
        }}
      />
    </TableStories>
    <TableStories field="margin" item="" labelStory="4px">
      <Progress
        margin="4px"
        percent={75}
        style={{
          width: "100px",
        }}
      />
    </TableStories>
    <TableStories field="margin" item="" labelStory="6px">
      <Progress
        margin="6px"
        percent={75}
        style={{
          width: "100px",
        }}
      />
    </TableStories>
    <TableStories field="margin" item="" labelStory="8px">
      <Progress
        margin="8px"
        percent={75}
        style={{
          width: "100px",
        }}
      />
    </TableStories>
    <TableStories field="margin" item="" labelStory="10px">
      <Progress
        margin="10px"
        percent={75}
        style={{
          width: "100px",
        }}
      />
    </TableStories>
  </Row>
)

const ProgressWithTypes = (
  <Row gap="1rem" height="auto">
    <TableStories field="type" item="" labelStory="Image A">
      <Progress
        percent={75}
        style={{
          width: "100px",
        }}
        type="circle"
      />
    </TableStories>
    <TableStories field="type" item="" labelStory="Image B">
      <Progress
        percent={75}
        style={{
          width: "100px",
        }}
        type="bar"
      />
    </TableStories>
  </Row>
)

const ProgressWithBackground = (
  <Row gap="1rem" height="auto">
    <TableStories
      field="backgroundProgressBar"
      item=""
      labelStory="Background A"
    >
      <Progress
        backgroundProgressBar="#FF8882"
        percent={75}
        style={{
          width: "100px",
        }}
        type="circle"
      />
    </TableStories>
    <TableStories
      field="backgroundProgressBar"
      item=""
      labelStory="Background B"
    >
      <Progress
        backgroundProgressBar="#54BAB9"
        percent={75}
        style={{
          width: "100px",
        }}
        type="bar"
      />
    </TableStories>
  </Row>
)

const ProgressWithMaxSize = (
  <Row gap="1rem" height="auto">
    <TableStories field="percent" item="" labelStory="Max Height(50px)">
      <Progress
        maxHeight="50px"
        maxWidth="50px"
        percent={75}
        style={{
          width: "100px",
        }}
        type="circle"
      />
    </TableStories>
    <TableStories field="percent" item="" labelStory="Max Width(50px)">
      <Progress
        maxWidth="50px"
        percent={30}
        style={{
          width: "100px",
        }}
        type="bar"
      />
    </TableStories>
  </Row>
)

export {
  ProgressWithShadow,
  ProgressWithMargin,
  ProgressWithTypes,
  ProgressWithBackground,
  ProgressWithMaxSize,
}
