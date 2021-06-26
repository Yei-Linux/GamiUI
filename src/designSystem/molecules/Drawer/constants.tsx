export const drawerTranstionByStates = {
  mask: {
    open: {
      from: {
        duration: 1.5,
        opacity: 0.3,
      },
      to: {
        opacity: 1,
      },
    },
    close: {
      from: null,
      to: {
        duration: 0.5,
        opacity: 0.01,
      },
    },
  },
  drawer: {
    open: {
      to: {
        duration: 0.8,
        delay: 0,
        position: { axis: 'xPercent', value: 100 },
      },
    },
    close: {
      to: {
        duration: 0.8,
        delay: 0,
        position: { axis: 'xPercent', value: -100 },
      },
    },
  },
}

export const options = {
  type: [] as const,
}
