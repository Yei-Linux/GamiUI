import { Avatar, Row, TableStories } from "@gamiui/standard"
import React from "react"

const AvatarWithSize = (
  <Row gap="1rem" height="auto">
    <TableStories field="size" item="fit" labelStory="fit">
      <Avatar
        rounded="lg"
        size="fit"
        src="https://i.imgur.com/vyW3w3r.png"
        style={{
          maxHeight: "100px",
          maxWidth: "100px",
        }}
        zoomMode="inside"
      />
    </TableStories>
    <TableStories field="size" item="auto" labelStory="auto">
      <Avatar
        rounded="lg"
        size="auto"
        src="https://i.imgur.com/vyW3w3r.png"
        style={{
          maxHeight: "100px",
          maxWidth: "100px",
        }}
        zoomMode="inside"
      />
    </TableStories>
    <TableStories field="size" item="xs" labelStory="xs">
      <Avatar
        rounded="lg"
        size="xs"
        src="https://i.imgur.com/vyW3w3r.png"
        style={{
          maxHeight: "100px",
          maxWidth: "100px",
        }}
        zoomMode="inside"
      />
    </TableStories>
    <TableStories field="size" item="sm" labelStory="sm">
      <Avatar
        rounded="lg"
        size="sm"
        src="https://i.imgur.com/vyW3w3r.png"
        style={{
          maxHeight: "100px",
          maxWidth: "100px",
        }}
        zoomMode="inside"
      />
    </TableStories>
    <TableStories field="size" item="md" labelStory="md">
      <Avatar
        rounded="lg"
        size="md"
        src="https://i.imgur.com/vyW3w3r.png"
        style={{
          maxHeight: "100px",
          maxWidth: "100px",
        }}
        zoomMode="inside"
      />
    </TableStories>
    <TableStories field="size" item="lg" labelStory="lg">
      <Avatar
        rounded="lg"
        size="lg"
        src="https://i.imgur.com/vyW3w3r.png"
        style={{
          maxHeight: "100px",
          maxWidth: "100px",
        }}
        zoomMode="inside"
      />
    </TableStories>
    <TableStories field="size" item="full" labelStory="full">
      <Avatar
        rounded="lg"
        size="full"
        src="https://i.imgur.com/vyW3w3r.png"
        style={{
          maxHeight: "100px",
          maxWidth: "100px",
        }}
        zoomMode="inside"
      />
    </TableStories>
  </Row>
)

export { AvatarWithSize }
