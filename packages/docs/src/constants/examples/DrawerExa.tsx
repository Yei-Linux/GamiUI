import { Button, Drawer, Icon, RichText, Row } from "@gamiui/standard"
import { DrawerPlacementTypes } from "@gamiui/standard/lib/core/domain/types"
import React, { useState } from "react"

const DrawerWithDefault = () => {
  const [open, setOpen] = useState(false)

  const toggle = () => setOpen(!open)

  return (
    <Row gap="10px">
      <Button type="button" width="fit" onClick={toggle}>
        Toggle
      </Button>
      <Drawer onClose={() => setOpen(!open)} open={open}>
        <RichText text="Hey, whats up!" />
      </Drawer>
    </Row>
  )
}

const DrawerWithCustomCloseIcon = () => {
  const [customCloseIcon, setCustomCloseIcon] = useState(true)
  const [open, setOpen] = useState(false)

  const toggle = (hasMask: boolean) => {
    setCustomCloseIcon(hasMask)
    setOpen(!open)
  }

  return (
    <Row gap="10px">
      <Button type="button" width="fit" onClick={() => toggle(true)}>
        CustomCloseIcon
      </Button>
      <Button type="button" width="fit" onClick={() => toggle(false)}>
        Not CustomCloseIcon
      </Button>
      <Drawer
        hasCloseIcon
        customCloseIcon={
          customCloseIcon ? (
            <Icon name="close" color="black" size="20px" />
          ) : null
        }
        onClose={() => setOpen(!open)}
        open={open}
      >
        <RichText text="Hey, whats up!" />
      </Drawer>
    </Row>
  )
}

const DrawerWithCloseIcon = () => {
  const [closeIcon, setCloseIcon] = useState(true)
  const [open, setOpen] = useState(false)

  const toggle = (hasMask: boolean) => {
    setCloseIcon(hasMask)
    setOpen(!open)
  }

  return (
    <Row gap="10px">
      <Button type="button" width="fit" onClick={() => toggle(true)}>
        Close Icon
      </Button>
      <Button type="button" width="fit" onClick={() => toggle(false)}>
        Not Close Icon
      </Button>
      <Drawer
        hasCloseIcon={closeIcon}
        onClose={() => setOpen(!open)}
        open={open}
      >
        <RichText text="Hey, whats up!" />
      </Drawer>
    </Row>
  )
}

const DrawerWithMask = () => {
  const [mask, setMask] = useState(true)
  const [open, setOpen] = useState(false)

  const toggle = (hasMask: boolean) => {
    setMask(hasMask)
    setOpen(!open)
  }

  return (
    <Row gap="10px">
      <Button type="button" width="fit" onClick={() => toggle(true)}>
        Mask
      </Button>
      <Button type="button" width="fit" onClick={() => toggle(false)}>
        Not Mask
      </Button>
      <Drawer withMask={mask} onClose={() => setOpen(!open)} open={open}>
        <RichText text="Hey, whats up!" />
      </Drawer>
    </Row>
  )
}

const DrawerWithDirection = () => {
  const [placement, setPlacement] = useState<DrawerPlacementTypes>("left")
  const [open, setOpen] = useState(false)

  const toggle = (placementProp: DrawerPlacementTypes) => {
    setPlacement(placementProp)
    setOpen(!open)
  }

  return (
    <Row gap="10px">
      <Button type="button" width="fit" onClick={() => toggle("left")}>
        Left
      </Button>
      <Button type="button" width="fit" onClick={() => toggle("right")}>
        Right
      </Button>
      <Button type="button" width="fit" onClick={() => toggle("top")}>
        Top
      </Button>
      <Button type="button" width="fit" onClick={() => toggle("bottom")}>
        Bottom
      </Button>
      <Drawer onClose={() => setOpen(!open)} open={open} placement={placement}>
        <RichText text="Hey, whats up!" />
      </Drawer>
    </Row>
  )
}

export {
  DrawerWithDefault,
  DrawerWithCustomCloseIcon,
  DrawerWithCloseIcon,
  DrawerWithMask,
  DrawerWithDirection,
}
