const breakPoints: any = {
  sm: 600, //TABLET
  md: 960, //LAPTOP
  lg: 1280, //PC
}

export const mediaQuery = (sizeName: 'sm' | 'md' | 'lg') => {
  return `@media (min-width: ${breakPoints[sizeName]}px)`
}
