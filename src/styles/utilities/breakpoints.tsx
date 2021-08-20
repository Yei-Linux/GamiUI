import { breakspointSizes } from 'styles/tokens/breakpoints'

const breakPoints = {
  sm: breakspointSizes.sm, //TABLET
  md: breakspointSizes.md, //LAPTOP
  lg: breakspointSizes.lg, //PC
}

export const mediaQuery = (sizeName: 'sm' | 'md' | 'lg') => {
  return `@media (min-width: ${breakPoints[sizeName]}px)`
}
