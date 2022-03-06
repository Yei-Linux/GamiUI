import { Message, Row, TableStories } from "@gamiui/standard"
import React from "react"

const MessageWithWidth = (
  <Row gap="1rem" height="auto">
    <TableStories field="width" item="" labelStory="fit">
      <Message text="Gami Message" width="fit" />
    </TableStories>
    <TableStories field="width" item="" labelStory="auto">
      <Message text="Gami Message" width="auto" />
    </TableStories>
    <TableStories field="width" item="" labelStory="xs">
      <Message text="Gami Message" width="xs" />
    </TableStories>
    <TableStories field="width" item="" labelStory="sm">
      <Message text="Gami Message" width="sm" />
    </TableStories>
    <TableStories field="width" item="" labelStory="md">
      <Message text="Gami Message" width="md" />
    </TableStories>
    <TableStories field="width" item="" labelStory="lg">
      <Message text="Gami Message" width="lg" />
    </TableStories>
    <TableStories field="width" item="" labelStory="full">
      <Message text="Gami Message" width="full" />
    </TableStories>
  </Row>
)

const MessageWithHeight = (
  <Row gap="1rem" height="auto">
    <TableStories field="height" item="" labelStory="auto">
      <Message height="auto" text="Gami Message" />
    </TableStories>
    <TableStories field="height" item="" labelStory="xs">
      <Message height="xs" text="Gami Message" />
    </TableStories>
    <TableStories field="height" item="" labelStory="sm">
      <Message height="sm" text="Gami Message" />
    </TableStories>
    <TableStories field="height" item="" labelStory="md">
      <Message height="md" text="Gami Message" />
    </TableStories>
    <TableStories field="height" item="" labelStory="lg">
      <Message height="lg" text="Gami Message" />
    </TableStories>
    <TableStories field="height" item="" labelStory="full">
      <Message height="full" text="Gami Message" />
    </TableStories>
  </Row>
)

const MessageWithShadow = (
  <Row gap="1rem" height="auto">
    <TableStories field="shadow" item="" labelStory="none">
      <Message shadow="none" text="Gami Message" />
    </TableStories>
    <TableStories field="shadow" item="" labelStory="xs">
      <Message shadow="xs" text="Gami Message" />
    </TableStories>
    <TableStories field="shadow" item="" labelStory="sm">
      <Message shadow="sm" text="Gami Message" />
    </TableStories>
    <TableStories field="shadow" item="" labelStory="md">
      <Message shadow="md" text="Gami Message" />
    </TableStories>
    <TableStories field="shadow" item="" labelStory="lg">
      <Message shadow="lg" text="Gami Message" />
    </TableStories>
    <TableStories field="shadow" item="" labelStory="full">
      <Message shadow="full" text="Gami Message" />
    </TableStories>
    <TableStories field="shadow" item="" labelStory="flat">
      <Message shadow="flat" text="Gami Message" />
    </TableStories>
    <TableStories field="shadow" item="" labelStory="primary">
      <Message shadow="primary" text="Gami Message" />
    </TableStories>
    <TableStories field="shadow" item="" labelStory="secondary">
      <Message shadow="secondary" text="Gami Message" />
    </TableStories>
    <TableStories field="shadow" item="" labelStory="tertiary">
      <Message shadow="tertiary" text="Gami Message" />
    </TableStories>
    <TableStories field="shadow" item="" labelStory="cuaternary">
      <Message shadow="cuaternary" text="Gami Message" />
    </TableStories>
    <TableStories field="shadow" item="" labelStory="success">
      <Message shadow="success" text="Gami Message" />
    </TableStories>
    <TableStories field="shadow" item="" labelStory="warning">
      <Message shadow="warning" text="Gami Message" />
    </TableStories>
    <TableStories field="shadow" item="" labelStory="danger">
      <Message shadow="danger" text="Gami Message" />
    </TableStories>
    <TableStories field="shadow" item="" labelStory="info">
      <Message shadow="info" text="Gami Message" />
    </TableStories>
    <TableStories field="shadow" item="" labelStory="gradient">
      <Message shadow="gradient" text="Gami Message" />
    </TableStories>
  </Row>
)

const MessageWithTextAligns = (
  <Row gap="1rem" height="auto">
    <TableStories field="textAlign" item="" labelStory="left">
      <Message text="Gami Message" textAlign="left" />
    </TableStories>
    <TableStories field="textAlign" item="" labelStory="center">
      <Message text="Gami Message" textAlign="center" />
    </TableStories>
    <TableStories field="textAlign" item="" labelStory="right">
      <Message text="Gami Message" textAlign="right" />
    </TableStories>
    <TableStories field="textAlign" item="" labelStory="justify">
      <Message text="Gami Message" textAlign="justify" />
    </TableStories>
  </Row>
)

const MessageWithFontWeights = (
  <Row gap="1rem" height="auto">
    <TableStories field="fontWeight" item="" labelStory="light">
      <Message fontWeight="light" text="Gami Message" />
    </TableStories>
    <TableStories field="fontWeight" item="" labelStory="normal">
      <Message fontWeight="normal" text="Gami Message" />
    </TableStories>
    <TableStories field="fontWeight" item="" labelStory="medium">
      <Message fontWeight="medium" text="Gami Message" />
    </TableStories>
    <TableStories field="fontWeight" item="" labelStory="semibold">
      <Message fontWeight="semibold" text="Gami Message" />
    </TableStories>
    <TableStories field="fontWeight" item="" labelStory="bold">
      <Message fontWeight="bold" text="Gami Message" />
    </TableStories>
    <TableStories field="fontWeight" item="" labelStory="extrabold">
      <Message fontWeight="extrabold" text="Gami Message" />
    </TableStories>
    <TableStories field="fontWeight" item="" labelStory="black">
      <Message fontWeight="black" text="Gami Message" />
    </TableStories>
  </Row>
)

const MessageWithPadding = (
  <Row gap="1rem" height="auto">
    <TableStories field="padding" item="" labelStory="0px">
      <Message padding="0px" text="Gami Message" />
    </TableStories>
    <TableStories field="padding" item="" labelStory="2px">
      <Message padding="2px" text="Gami Message" />
    </TableStories>
    <TableStories field="padding" item="" labelStory="4px">
      <Message padding="4px" text="Gami Message" />
    </TableStories>
    <TableStories field="padding" item="" labelStory="6px">
      <Message padding="6px" text="Gami Message" />
    </TableStories>
    <TableStories field="padding" item="" labelStory="8px">
      <Message padding="8px" text="Gami Message" />
    </TableStories>
    <TableStories field="padding" item="" labelStory="10px">
      <Message padding="10px" text="Gami Message" />
    </TableStories>
  </Row>
)

const MessageWithMargin = (
  <Row gap="1rem" height="auto">
    <TableStories field="margin" item="" labelStory="0px">
      <Message margin="0px" text="Gami Message" />
    </TableStories>
    <TableStories field="margin" item="" labelStory="2px">
      <Message margin="2px" text="Gami Message" />
    </TableStories>
    <TableStories field="margin" item="" labelStory="4px">
      <Message margin="4px" text="Gami Message" />
    </TableStories>
    <TableStories field="margin" item="" labelStory="6px">
      <Message margin="6px" text="Gami Message" />
    </TableStories>
    <TableStories field="margin" item="" labelStory="8px">
      <Message margin="8px" text="Gami Message" />
    </TableStories>
    <TableStories field="margin" item="" labelStory="10px">
      <Message margin="10px" text="Gami Message" />
    </TableStories>
  </Row>
)

const MessageWithDirection = (
  <Row gap="1rem" height="auto">
    <TableStories field="direction" item="" labelStory="left">
      <Message direction="left" text="Gami Message" />
    </TableStories>
    <TableStories field="direction" item="" labelStory="right">
      <Message direction="right" text="Gami Message" />
    </TableStories>
  </Row>
)

const MessageWithBackground = (
  <Row gap="1rem" height="auto">
    <TableStories field="background" item="" labelStory="Color A">
      <Message background="#9879e9" text="Gami Message" />
    </TableStories>
    <TableStories field="background" item="" labelStory="Color B">
      <Message background="#54BAB9" text="Gami Message" />
    </TableStories>
  </Row>
)

const MessageWithColorAndMarker = (
  <Row gap="1rem" height="auto">
    <TableStories field="color" item="" labelStory="Color A">
      <Message
        background="white"
        color="#9879e9"
        hasMarker
        text="Gami Message"
      />
    </TableStories>
    <TableStories field="color" item="" labelStory="Color B">
      <Message
        background="white"
        color="#54BAB9"
        hasMarker
        text="Gami Message"
      />
    </TableStories>
  </Row>
)

export {
  MessageWithWidth,
  MessageWithHeight,
  MessageWithShadow,
  MessageWithTextAligns,
  MessageWithFontWeights,
  MessageWithPadding,
  MessageWithMargin,
  MessageWithDirection,
  MessageWithBackground,
  MessageWithColorAndMarker,
}
