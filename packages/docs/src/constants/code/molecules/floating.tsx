export const FloatingWithDefaultCode = `
const [open, setOpen] = useState(false)

const toggle = () => setOpen(!open)

return (
  <Row gap="10px">
    <Button type="button" width="fit" onClick={toggle}>
      Toggle
    </Button>
    <Floating
      height="auto"
      width="auto"
      direction="right"
      open={open}
      onClose={toggle}
    >
      <RichText text="Gami Floating!" />
    </Floating>
  </Row>
)
`
export const FloatingWithCustomCloseIconCode = `
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
    <Floating
      height="auto"
      width="auto"
      direction="right"
      open={open}
      customCloseIcon={
        customCloseIcon ? (
          <Icon name="close" color="black" size="20px" />
        ) : null
      }
      onClose={() => setOpen(!open)}
    >
      <RichText text="Gami Floating!" />
    </Floating>
  </Row>
)
`

export const FloatingWithCloseIconCode = `
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
    <Floating
      height="auto"
      width="auto"
      direction="right"
      open={open}
      hasCloseIcon={closeIcon}
      onClose={() => setOpen(!open)}
    >
      <RichText text="Gami Floating!" />
    </Floating>
  </Row>
)
`

export const FloatingWithDirectionCode = `
const [direction, setDirection] = useState<FloatingTypes>("left")
const [open, setOpen] = useState(false)

const toggle = (directionProp: FloatingTypes) => {
  setDirection(directionProp)
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
    <Floating
      height="auto"
      width="auto"
      direction={direction}
      open={open}
      onClose={() => setOpen(!open)}
    >
      <RichText text="Gami Floating!" />
    </Floating>
  </Row>
)
`
