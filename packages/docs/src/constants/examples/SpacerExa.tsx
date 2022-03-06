import { Avatar, Row, Spacer } from "@gamiui/standard"
import React from "react"

const SpacerWithSizeDirection = (
  <Row gap="10px">
    <Avatar rounded="lg" src="https://i.imgur.com/vyW3w3r.png" />
    <Spacer direction="left" size={1} />
    <Avatar rounded="lg" src="https://i.imgur.com/vyW3w3r.png" />
  </Row>
)

const SpacerWithCustomSizeDirection = (
  <Row gap="10px">
    <Avatar rounded="lg" src="https://i.imgur.com/vyW3w3r.png" />
    <Spacer customSize="45px" direction="left" />
    <Avatar rounded="lg" src="https://i.imgur.com/vyW3w3r.png" />
  </Row>
)

export { SpacerWithSizeDirection, SpacerWithCustomSizeDirection }
