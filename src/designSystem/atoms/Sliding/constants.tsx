export type TPlacementAnimationType = 'left' | 'right' | 'top' | 'bottom'

const positionSliding = {
  left: { axis: 'xPercent', value: -100 },
  top: { axis: 'yPercent', value: -100 },
  right: { axis: 'xPercent', value: 100 },
  bottom: { axis: 'yPercent', value: 100 },
}

export const SlidingTransition = (positionType: TPlacementAnimationType) => {
  return {
    duration: 2.5,
    delay: 0,
    position: positionSliding[positionType],
  }
}

export const options = {
  type: [] as const,
}
