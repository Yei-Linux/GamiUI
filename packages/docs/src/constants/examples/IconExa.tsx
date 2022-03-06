import { Icon, Row, TableStories } from "@gamiui/standard"
import React from "react"

const IconWithRounded = (
  <Row gap="1rem" height="auto">
    <TableStories field="rounded" item="" labelStory="none">
      <Icon />
    </TableStories>
    <TableStories field="rounded" item="" labelStory="xs">
      <Icon rounded="xs" />
    </TableStories>
    <TableStories field="rounded" item="" labelStory="sm">
      <Icon rounded="sm" />
    </TableStories>
    <TableStories field="rounded" item="" labelStory="md">
      <Icon rounded="md" />
    </TableStories>
    <TableStories field="rounded" item="" labelStory="lg">
      <Icon rounded="lg" />
    </TableStories>
    <TableStories field="rounded" item="" labelStory="full">
      <Icon rounded="full" />
    </TableStories>
  </Row>
)

const IconWithShadow = (
  <Row gap="1rem" height="auto">
    <TableStories field="shadow" item="" labelStory="none">
      <Icon />
    </TableStories>
    <TableStories field="shadow" item="" labelStory="xs">
      <Icon shadow="xs" />
    </TableStories>
    <TableStories field="shadow" item="" labelStory="sm">
      <Icon shadow="sm" />
    </TableStories>
    <TableStories field="shadow" item="" labelStory="md">
      <Icon shadow="md" />
    </TableStories>
    <TableStories field="shadow" item="" labelStory="lg">
      <Icon shadow="lg" />
    </TableStories>
    <TableStories field="shadow" item="" labelStory="full">
      <Icon shadow="full" />
    </TableStories>
    <TableStories field="shadow" item="" labelStory="flat">
      <Icon shadow="flat" />
    </TableStories>
    <TableStories field="shadow" item="" labelStory="primary">
      <Icon shadow="primary" />
    </TableStories>
    <TableStories field="shadow" item="" labelStory="secondary">
      <Icon shadow="secondary" />
    </TableStories>
    <TableStories field="shadow" item="" labelStory="tertiary">
      <Icon shadow="tertiary" />
    </TableStories>
    <TableStories field="shadow" item="" labelStory="cuaternary">
      <Icon shadow="cuaternary" />
    </TableStories>
    <TableStories field="shadow" item="" labelStory="success">
      <Icon shadow="success" />
    </TableStories>
    <TableStories field="shadow" item="" labelStory="warning">
      <Icon shadow="warning" />
    </TableStories>
    <TableStories field="shadow" item="" labelStory="danger">
      <Icon shadow="danger" />
    </TableStories>
    <TableStories field="shadow" item="" labelStory="info">
      <Icon shadow="info" />
    </TableStories>
    <TableStories field="shadow" item="" labelStory="gradient">
      <Icon shadow="gradient" />
    </TableStories>
  </Row>
)

const IconWithPadding = (
  <Row gap="1rem" height="auto">
    <TableStories field="padding" item="" labelStory="0px">
      <Icon padding="0px" />
    </TableStories>
    <TableStories field="padding" item="" labelStory="2px">
      <Icon padding="2px" />
    </TableStories>
    <TableStories field="padding" item="" labelStory="4px">
      <Icon padding="4px" />
    </TableStories>
    <TableStories field="padding" item="" labelStory="6px">
      <Icon padding="6px" />
    </TableStories>
    <TableStories field="padding" item="" labelStory="8px">
      <Icon padding="8px" />
    </TableStories>
    <TableStories field="padding" item="" labelStory="10px">
      <Icon padding="10px" />
    </TableStories>
  </Row>
)

const IconWithMargin = (
  <Row gap="1rem" height="auto">
    <TableStories field="margin" item="" labelStory="0px">
      <Icon margin="0px" />
    </TableStories>
    <TableStories field="margin" item="" labelStory="2px">
      <Icon margin="2px" />
    </TableStories>
    <TableStories field="margin" item="" labelStory="4px">
      <Icon margin="4px" />
    </TableStories>
    <TableStories field="margin" item="" labelStory="6px">
      <Icon margin="6px" />
    </TableStories>
    <TableStories field="margin" item="" labelStory="8px">
      <Icon margin="8px" />
    </TableStories>
    <TableStories field="margin" item="" labelStory="10px">
      <Icon margin="10px" />
    </TableStories>
  </Row>
)

const IconWithColors = (
  <Row gap="1rem" height="auto">
    <TableStories field="color" item="" labelStory="Color A">
      <Icon color="red" name="check" />
    </TableStories>
    <TableStories field="color" item="" labelStory="Color B">
      <Icon color="blue" name="check" />
    </TableStories>
    <TableStories field="color" item="" labelStory="Color C">
      <Icon color="green" name="check" />
    </TableStories>
    <TableStories field="color" item="" labelStory="Color D">
      <Icon color="#9879e9" name="check" />
    </TableStories>
  </Row>
)

const IconWithSize = (
  <Row gap="1rem" height="auto">
    <TableStories field="size" item="" labelStory="Size A">
      <Icon color="#9879e9" name="code" size="15px" />
    </TableStories>
    <TableStories field="size" item="" labelStory="Size B">
      <Icon color="#9879e9" name="code" size="22px" />
    </TableStories>
    <TableStories field="size" item="" labelStory="Size C">
      <Icon color="#9879e9" name="code" size="24px" />
    </TableStories>
    <TableStories field="size" item="" labelStory="Size D">
      <Icon color="#9879e9" name="code" size="30px" />
    </TableStories>
  </Row>
)

export {
  IconWithRounded,
  IconWithShadow,
  IconWithPadding,
  IconWithMargin,
  IconWithColors,
  IconWithSize,
}
