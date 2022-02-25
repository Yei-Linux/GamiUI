import React from "react"
import {
  AvatarWithAlt,
  AvatarWithHeight,
  AvatarWithIcon,
  AvatarWithImage,
  AvatarWithMargin,
  AvatarWithPadding,
  AvatarWithRounded,
  AvatarWithSetsAndBreakpoints,
  AvatarWithShadow,
  AvatarWithSize,
  AvatarWithText,
  AvatarWithWidth,
} from "./examples/AvatarExa"

const atoms = {
  avatar: {
    sizes: AvatarWithSize,
    width: AvatarWithWidth,
    height: AvatarWithHeight,
    rounded: AvatarWithRounded,
    shadow: AvatarWithShadow,
    padding: AvatarWithPadding,
    margin: AvatarWithMargin,
    image: AvatarWithImage,
    text: AvatarWithText,
    icon: AvatarWithIcon,
    alt: AvatarWithAlt,
    sets: AvatarWithSetsAndBreakpoints,
  },
}

export const allComponents = {
  atoms,
}
