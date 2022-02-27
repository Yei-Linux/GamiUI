export const DrawerWithDefaultCode = `
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
`

export const DrawerWithCustomCloseIconCode = `
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
`

export const DrawerWithCloseIconCode = `
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
`

export const DrawerWithMaskCode = `
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
`

export const DrawerWithDirectionCode = `
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
`
