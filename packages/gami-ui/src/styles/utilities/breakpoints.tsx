import { breakspointSizes } from 'styles/tokens/breakpoints'

const breakPoints = {
  xs: breakspointSizes.xs, //PHONE
  sm: breakspointSizes.sm, //TABLET
  md: breakspointSizes.md, //LAPTOP
  lg: breakspointSizes.lg, //PC
}

export type TDevices = 'xs' | 'sm' | 'md' | 'lg'

export const mediaQuery = (
  sizeName: TDevices,
  breakPointsProp = breakPoints
) => {
  return `@media (min-width: ${breakPointsProp[sizeName]}px)`
}
