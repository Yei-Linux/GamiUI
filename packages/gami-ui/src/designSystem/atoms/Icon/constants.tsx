import { DrawkitIcons, MultiColor, DefinedColor } from './gallery'

export const IconsPack = (color = '#7f9cf5') => ({
  ...DrawkitIcons(),
  ...DefinedColor(),
  ...MultiColor(color),
})

export type TIconsPack = ReturnType<typeof IconsPack>
