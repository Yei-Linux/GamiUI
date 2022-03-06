import { Empty, Icon, Row, TableStories, Title } from "@gamiui/standard"
import React from "react"

const EmptyWithShadows = (
  <Row gap="1rem" height="auto">
    <TableStories field="shadow" item="" labelStory="none">
      <Empty shadow="none" text="No data" />
    </TableStories>
    <TableStories field="shadow" item="" labelStory="xs">
      <Empty shadow="xs" text="No data" />
    </TableStories>
    <TableStories field="shadow" item="" labelStory="sm">
      <Empty shadow="sm" text="No data" />
    </TableStories>
    <TableStories field="shadow" item="" labelStory="md">
      <Empty shadow="md" text="No data" />
    </TableStories>
    <TableStories field="shadow" item="" labelStory="lg">
      <Empty shadow="lg" text="No data" />
    </TableStories>
    <TableStories field="shadow" item="" labelStory="full">
      <Empty shadow="full" text="No data" />
    </TableStories>
    <TableStories field="shadow" item="" labelStory="flat">
      <Empty shadow="flat" text="No data" />
    </TableStories>
    <TableStories field="shadow" item="" labelStory="primary">
      <Empty shadow="primary" text="No data" />
    </TableStories>
    <TableStories field="shadow" item="" labelStory="secondary">
      <Empty shadow="secondary" text="No data" />
    </TableStories>
    <TableStories field="shadow" item="" labelStory="tertiary">
      <Empty shadow="tertiary" text="No data" />
    </TableStories>
    <TableStories field="shadow" item="" labelStory="cuaternary">
      <Empty shadow="cuaternary" text="No data" />
    </TableStories>
    <TableStories field="shadow" item="" labelStory="success">
      <Empty shadow="success" text="No data" />
    </TableStories>
    <TableStories field="shadow" item="" labelStory="warning">
      <Empty shadow="warning" text="No data" />
    </TableStories>
    <TableStories field="shadow" item="" labelStory="danger">
      <Empty shadow="danger" text="No data" />
    </TableStories>
    <TableStories field="shadow" item="" labelStory="info">
      <Empty shadow="info" text="No data" />
    </TableStories>
    <TableStories field="shadow" item="" labelStory="gradient">
      <Empty shadow="gradient" text="No data" />
    </TableStories>
  </Row>
)

const EmptyWithPadding = (
  <Row gap="1rem" height="auto">
    <TableStories field="padding" item="" labelStory="0px">
      <Empty padding="0px" text="No data" />
    </TableStories>
    <TableStories field="padding" item="" labelStory="2px">
      <Empty padding="2px" text="No data" />
    </TableStories>
    <TableStories field="padding" item="" labelStory="4px">
      <Empty padding="4px" text="No data" />
    </TableStories>
    <TableStories field="padding" item="" labelStory="6px">
      <Empty padding="6px" text="No data" />
    </TableStories>
    <TableStories field="padding" item="" labelStory="8px">
      <Empty padding="8px" text="No data" />
    </TableStories>
    <TableStories field="padding" item="" labelStory="10px">
      <Empty padding="10px" text="No data" />
    </TableStories>
  </Row>
)

const EmptyWithMargin = (
  <Row gap="1rem" height="auto">
    <TableStories field="margin" item="" labelStory="0px">
      <Empty margin="0px" text="No data" />
    </TableStories>
    <TableStories field="margin" item="" labelStory="2px">
      <Empty margin="2px" text="No data" />
    </TableStories>
    <TableStories field="margin" item="" labelStory="4px">
      <Empty margin="4px" text="No data" />
    </TableStories>
    <TableStories field="margin" item="" labelStory="6px">
      <Empty margin="6px" text="No data" />
    </TableStories>
    <TableStories field="margin" item="" labelStory="8px">
      <Empty margin="8px" text="No data" />
    </TableStories>
    <TableStories field="margin" item="" labelStory="10px">
      <Empty margin="10px" text="No data" />
    </TableStories>
  </Row>
)

const EmptyWithIconTypes = (
  <Row gap="1rem" height="auto">
    <TableStories field="type" item="" labelStory="base">
      <Empty color="#A4A4A4" size="200px" type="base" />
    </TableStories>
    <TableStories field="type" item="" labelStory="sad">
      <Empty color="#A4A4A4" size="200px" type="sad" />
    </TableStories>
  </Row>
)

const EmptyWithCustomIcons = (
  <Row gap="1rem" height="auto">
    <TableStories field="icon" item="" labelStory="code">
      <Empty
        color="#A4A4A4"
        icon={<Icon name="code" size="50px" />}
        text="No data!"
      />
    </TableStories>
    <TableStories field="icon" item="" labelStory="voice">
      <Empty
        color="#A4A4A4"
        icon={<Icon name="voice" size="50px" />}
        text="No data!"
      />
    </TableStories>
    <TableStories field="icon" item="" labelStory="notes">
      <Empty
        color="#A4A4A4"
        icon={<Icon name="notes" size="50px" />}
        text="No data!"
      />
    </TableStories>
  </Row>
)

const EmptyWithText = (
  <Row gap="1rem" height="auto">
    <TableStories field="text" item="" labelStory="Title A">
      <Empty color="#A4A4A4" size="200px" text="Title A" />
    </TableStories>
    <TableStories field="text" item="" labelStory="Title B">
      <Empty color="#A4A4A4" size="200px" text="Title B" />
    </TableStories>
    <TableStories field="text" item="" labelStory="Title C">
      <Empty color="#A4A4A4" size="200px" text="Title C" />
    </TableStories>
  </Row>
)

const EmptyWithTextColors = (
  <Row gap="1rem" height="auto">
    <TableStories field="color" item="" labelStory="#000000">
      <Empty color="#000000" text="No data!" />
    </TableStories>
    <TableStories field="color" item="" labelStory="#454545">
      <Empty color="#454545" text="No data!" />
    </TableStories>
    <TableStories field="color" item="" labelStory="#686868">
      <Empty color="#686868" text="No data!" />
    </TableStories>
    <TableStories field="color" item="" labelStory="#A4A4A4">
      <Empty color="#A4A4A4" text="No data!" />
    </TableStories>
  </Row>
)

const EmptyWithSize = (
  <Row gap="1rem" height="auto">
    <TableStories field="size" item="" labelStory="100px">
      <Empty color="#A4A4A4" size="100px" text="No data!" />
    </TableStories>
    <TableStories field="size" item="" labelStory="150px">
      <Empty color="#A4A4A4" size="150px" text="No data!" />
    </TableStories>
    <TableStories field="size" item="" labelStory="200px">
      <Empty color="#A4A4A4" size="200px" text="No data!" />
    </TableStories>
    <TableStories field="size" item="" labelStory="250px">
      <Empty color="#A4A4A4" size="250px" text="No data!" />
    </TableStories>
  </Row>
)

export {
  EmptyWithShadows,
  EmptyWithPadding,
  EmptyWithMargin,
  EmptyWithIconTypes,
  EmptyWithCustomIcons,
  EmptyWithText,
  EmptyWithTextColors,
  EmptyWithSize,
}
