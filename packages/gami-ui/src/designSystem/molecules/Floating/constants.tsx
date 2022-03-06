export const positionFloating: any = {
  left: {
    open: {
      from: {
        duration: 0.5,
        delay: 0,
        position: { axis: 'xPercent', value: -100 },
      },
      to: {
        duration: 0.5,
        delay: 0,
        position: { axis: 'xPercent', value: 0 },
      },
    },
    close: {
      from: null,
      to: {
        duration: 0.4,
        delay: 0,
        position: { axis: 'xPercent', value: -100 },
      },
    },
  },
  right: {
    open: {
      from: {
        duration: 0.5,
        delay: 0,
        position: { axis: 'xPercent', value: 100 },
      },
      to: {
        duration: 0.5,
        delay: 0,
        position: { axis: 'xPercent', value: 0 },
      },
    },
    close: {
      from: null,
      to: {
        duration: 0.4,
        delay: 0,
        position: { axis: 'xPercent', value: 100 },
      },
    },
  },

  top: {
    open: {
      from: {
        duration: 0.5,
        delay: 0,
        position: { axis: 'yPercent', value: -100 },
      },
      to: {
        duration: 0.5,
        delay: 0,
        position: { axis: 'yPercent', value: 0 },
      },
    },
    close: {
      from: null,
      to: {
        duration: 0.4,
        delay: 0,
        position: { axis: 'yPercent', value: -100 },
      },
    },
  },
  bottom: {
    open: {
      from: {
        duration: 0.5,
        delay: 0,
        position: { axis: 'yPercent', value: 100 },
      },
      to: {
        duration: 0.5,
        delay: 0,
        position: { axis: 'yPercent', value: 0 },
      },
    },
    close: {
      from: null,
      to: {
        duration: 0.4,
        delay: 0,
        position: { axis: 'yPercent', value: 100 },
      },
    },
  },
}

export const options = {
  type: ['left', 'right', 'top', 'bottom'] as const,
}
