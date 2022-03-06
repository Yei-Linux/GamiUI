import { Container, Row, TableStories } from "@gamiui/standard"
import React, { useState } from "react"

const ColWithSizes = (
  <Row gap="1rem" height="auto">
    <TableStories field="size" item="" labelStory="fit">
      <Container padding="1rem" size="fit">
        Gami Container
      </Container>
    </TableStories>
    <TableStories field="size" item="" labelStory="auto">
      <Container padding="1rem" size="auto">
        Gami Container
      </Container>
    </TableStories>
    <TableStories field="size" item="" labelStory="xs">
      <Container padding="1rem" size="xs">
        Gami Container
      </Container>
    </TableStories>
    <TableStories field="size" item="" labelStory="sm">
      <Container padding="1rem" size="sm">
        Gami Container
      </Container>
    </TableStories>
    <TableStories field="size" item="" labelStory="md">
      <Container padding="1rem" size="md">
        Gami Container
      </Container>
    </TableStories>
    <TableStories field="size" item="" labelStory="lg">
      <Container padding="1rem" size="lg">
        Gami Container
      </Container>
    </TableStories>
    <TableStories field="size" item="" labelStory="full">
      <Container padding="1rem" size="full">
        Gami Container
      </Container>
    </TableStories>
  </Row>
)

const ColWithWidth = (
  <Row gap="1rem" height="auto">
    <TableStories field="width" item="" labelStory="fit">
      <Container padding="1rem" width="fit">
        Gami Container
      </Container>
    </TableStories>
    <TableStories field="width" item="" labelStory="auto">
      <Container padding="1rem">Gami Container</Container>
    </TableStories>
    <TableStories field="width" item="" labelStory="xs">
      <Container padding="1rem" width="xs">
        Gami Container
      </Container>
    </TableStories>
    <TableStories field="width" item="" labelStory="sm">
      <Container padding="1rem" width="sm">
        Gami Container
      </Container>
    </TableStories>
    <TableStories field="width" item="" labelStory="md">
      <Container padding="1rem" width="md">
        Gami Container
      </Container>
    </TableStories>
    <TableStories field="width" item="" labelStory="lg">
      <Container padding="1rem" width="lg">
        Gami Container
      </Container>
    </TableStories>
    <TableStories field="width" item="" labelStory="full">
      <Container padding="1rem" width="full">
        Gami Container
      </Container>
    </TableStories>
  </Row>
)

const ColWithHeight = (
  <Row gap="1rem" height="auto">
    <TableStories field="height" item="" labelStory="auto">
      <Container padding="1rem">Gami Container</Container>
    </TableStories>
    <TableStories field="height" item="" labelStory="xs">
      <Container height="xs" padding="1rem">
        Gami Container
      </Container>
    </TableStories>
    <TableStories field="height" item="" labelStory="sm">
      <Container height="sm" padding="1rem">
        Gami Container
      </Container>
    </TableStories>
    <TableStories field="height" item="" labelStory="md">
      <Container height="md" padding="1rem">
        Gami Container
      </Container>
    </TableStories>
    <TableStories field="height" item="" labelStory="lg">
      <Container height="lg" padding="1rem">
        Gami Container
      </Container>
    </TableStories>
    <TableStories field="height" item="" labelStory="full">
      <Container height="full" padding="1rem">
        Gami Container
      </Container>
    </TableStories>
  </Row>
)

const ColWithRounded = (
  <Row gap="1rem" height="auto">
    <TableStories field="rounded" item="" labelStory="none">
      <Container rounded="none">Gami Container</Container>
    </TableStories>
    <TableStories field="rounded" item="" labelStory="xs">
      <Container rounded="xs">Gami Container</Container>
    </TableStories>
    <TableStories field="rounded" item="" labelStory="sm">
      <Container rounded="sm">Gami Container</Container>
    </TableStories>
    <TableStories field="rounded" item="" labelStory="md">
      <Container rounded="md">Gami Container</Container>
    </TableStories>
    <TableStories field="rounded" item="" labelStory="lg">
      <Container rounded="lg">Gami Container</Container>
    </TableStories>
    <TableStories field="rounded" item="" labelStory="full">
      <Container rounded="full">Gami Container</Container>
    </TableStories>
  </Row>
)

const ColWithShadow = (
  <Row gap="1rem" height="auto">
    <TableStories field="shadow" item="" labelStory="none">
      <Container padding="1rem">Gami Container</Container>
    </TableStories>
    <TableStories field="shadow" item="" labelStory="xs">
      <Container padding="1rem" shadow="xs">
        Gami Container
      </Container>
    </TableStories>
    <TableStories field="shadow" item="" labelStory="sm">
      <Container padding="1rem" shadow="sm">
        Gami Container
      </Container>
    </TableStories>
    <TableStories field="shadow" item="" labelStory="md">
      <Container padding="1rem" shadow="md">
        Gami Container
      </Container>
    </TableStories>
    <TableStories field="shadow" item="" labelStory="lg">
      <Container padding="1rem" shadow="lg">
        Gami Container
      </Container>
    </TableStories>
    <TableStories field="shadow" item="" labelStory="full">
      <Container padding="1rem" shadow="full">
        Gami Container
      </Container>
    </TableStories>
    <TableStories field="shadow" item="" labelStory="flat">
      <Container padding="1rem" shadow="flat">
        Gami Container
      </Container>
    </TableStories>
    <TableStories field="shadow" item="" labelStory="primary">
      <Container padding="1rem" shadow="primary">
        Gami Container
      </Container>
    </TableStories>
    <TableStories field="shadow" item="" labelStory="secondary">
      <Container padding="1rem" shadow="secondary">
        Gami Container
      </Container>
    </TableStories>
    <TableStories field="shadow" item="" labelStory="tertiary">
      <Container padding="1rem" shadow="tertiary">
        Gami Container
      </Container>
    </TableStories>
    <TableStories field="shadow" item="" labelStory="cuaternary">
      <Container padding="1rem" shadow="cuaternary">
        Gami Container
      </Container>
    </TableStories>
    <TableStories field="shadow" item="" labelStory="success">
      <Container padding="1rem" shadow="success">
        Gami Container
      </Container>
    </TableStories>
    <TableStories field="shadow" item="" labelStory="warning">
      <Container padding="1rem" shadow="warning">
        Gami Container
      </Container>
    </TableStories>
    <TableStories field="shadow" item="" labelStory="danger">
      <Container padding="1rem" shadow="danger">
        Gami Container
      </Container>
    </TableStories>
    <TableStories field="shadow" item="" labelStory="info">
      <Container padding="1rem" shadow="info">
        Gami Container
      </Container>
    </TableStories>
    <TableStories field="shadow" item="" labelStory="gradient">
      <Container padding="1rem" shadow="gradient">
        Gami Container
      </Container>
    </TableStories>
  </Row>
)

const ColWithTextAlign = (
  <Row gap="1rem" height="auto">
    <TableStories field="textAlign" item="" labelStory="left">
      <Container padding="1rem" textAlign="left">
        Gami Container
      </Container>
    </TableStories>
    <TableStories field="textAlign" item="" labelStory="center">
      <Container padding="1rem" textAlign="center">
        Gami Container
      </Container>
    </TableStories>
    <TableStories field="textAlign" item="" labelStory="right">
      <Container padding="1rem" textAlign="right">
        Gami Container
      </Container>
    </TableStories>
    <TableStories field="textAlign" item="" labelStory="justify">
      <Container padding="1rem" textAlign="justify">
        Gami Container
      </Container>
    </TableStories>
  </Row>
)

const ColWithFontWeight = (
  <Row gap="1rem" height="auto">
    <TableStories field="fontWeight" item="" labelStory="light">
      <Container fontWeight="light" padding="1rem">
        Gami Container
      </Container>
    </TableStories>
    <TableStories field="fontWeight" item="" labelStory="normal">
      <Container fontWeight="normal" padding="1rem">
        Gami Container
      </Container>
    </TableStories>
    <TableStories field="fontWeight" item="" labelStory="medium">
      <Container fontWeight="medium" padding="1rem">
        Gami Container
      </Container>
    </TableStories>
    <TableStories field="fontWeight" item="" labelStory="semibold">
      <Container fontWeight="semibold" padding="1rem">
        Gami Container
      </Container>
    </TableStories>
    <TableStories field="fontWeight" item="" labelStory="bold">
      <Container fontWeight="bold" padding="1rem">
        Gami Container
      </Container>
    </TableStories>
    <TableStories field="fontWeight" item="" labelStory="extrabold">
      <Container fontWeight="extrabold" padding="1rem">
        Gami Container
      </Container>
    </TableStories>
    <TableStories field="fontWeight" item="" labelStory="black">
      <Container fontWeight="black" padding="1rem">
        Gami Container
      </Container>
    </TableStories>
  </Row>
)

const ColWithFontPadding = (
  <Row gap="1rem" height="auto">
    <TableStories field="padding" item="" labelStory="0px">
      <Container padding="0px">Gami Container</Container>
    </TableStories>
    <TableStories field="padding" item="" labelStory="2px">
      <Container padding="2px">Gami Container</Container>
    </TableStories>
    <TableStories field="padding" item="" labelStory="4px">
      <Container padding="4px">Gami Container</Container>
    </TableStories>
    <TableStories field="padding" item="" labelStory="6px">
      <Container padding="6px">Gami Container</Container>
    </TableStories>
    <TableStories field="padding" item="" labelStory="8px">
      <Container padding="8px">Gami Container</Container>
    </TableStories>
    <TableStories field="padding" item="" labelStory="10px">
      <Container padding="10px">Gami Container</Container>
    </TableStories>
  </Row>
)

const ColWithFontMargin = (
  <Row gap="1rem" height="auto">
    <TableStories field="margin" item="" labelStory="0px">
      <Container margin="0px" padding="1rem">
        Gami Container
      </Container>
    </TableStories>
    <TableStories field="margin" item="" labelStory="2px">
      <Container margin="2px" padding="1rem">
        Gami Container
      </Container>
    </TableStories>
    <TableStories field="margin" item="" labelStory="4px">
      <Container margin="4px" padding="1rem">
        Gami Container
      </Container>
    </TableStories>
    <TableStories field="margin" item="" labelStory="6px">
      <Container margin="6px" padding="1rem">
        Gami Container
      </Container>
    </TableStories>
    <TableStories field="margin" item="" labelStory="8px">
      <Container margin="8px" padding="1rem">
        Gami Container
      </Container>
    </TableStories>
    <TableStories field="margin" item="" labelStory="10px">
      <Container margin="10px" padding="1rem">
        Gami Container
      </Container>
    </TableStories>
  </Row>
)

const ColWithAs = (
  <Row gap="1rem" height="auto">
    <TableStories field="as" item="" labelStory="As p element">
      <Container as="p" padding="1rem">
        Gami Container
      </Container>
    </TableStories>
    <TableStories field="as" item="" labelStory="As div element">
      <Container as="div" padding="1rem">
        Gami Container
      </Container>
    </TableStories>
  </Row>
)

export {
  ColWithSizes,
  ColWithWidth,
  ColWithHeight,
  ColWithRounded,
  ColWithShadow,
  ColWithTextAlign,
  ColWithFontWeight,
  ColWithFontPadding,
  ColWithFontMargin,
  ColWithAs,
}
