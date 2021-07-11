export const GradientTypes: any = {
  glass: {
    backgroundColor: 'rgb(255 255 255 / 44%)',
    backdropFilter: 'blur(5px) saturate(100%) contrast(65%)',
  },
  glassLight: {
    backgroundColor: 'rgba( 255, 255, 255, 0.55 )',
    backdropFilter: 'blur( 14.5px )',
  },
  fog: {
    background:
      'linear-gradient(to right, rgb(185, 147, 214), rgb(140, 166, 219))',
  },
  earthly: {
    background:
      'linear-gradient(to right, rgb(100, 145, 115), rgb(219, 213, 164))',
  },
  nelson: {
    background:
      'linear-gradient(to right, rgb(242, 112, 156), rgb(255, 148, 114))',
  },
  almost: {
    background:
      'linear-gradient(to right, rgb(221, 214, 243), rgb(250, 172, 168))',
  },
  moor: {
    background:
      'linear-gradient(to right, rgb(97, 97, 97), rgb(155, 197, 195))',
  },
  kyoto: {
    background: 'linear-gradient(to right, rgb(194, 21, 0), rgb(255, 197, 0))',
  },
  blurrybeach: {
    background:
      'linear-gradient(to right, rgb(213, 51, 105), rgb(203, 173, 109))',
  },
}

export const options = {
  names: Object.keys(GradientTypes),
}
