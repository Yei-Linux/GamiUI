export const options = {
  type: [] as const,
  zoomMode: ['outside', 'inside', 'none'] as const,
  textMode: ['firstcapitals', 'twofirstchars', 'threefirstchars'] as const,
}

export const maxSizeLetters = 3

export const avatarTextModes = {
  firstcapitals: 'CATCH_FIRST_LETTERS',
  twofirstchars: 'CATCH_TWO_FIRST_CHARACTERS',
  threefirstchars: 'CATCH_THREE_FIRST_CHARACTERS',
} as const

export const avatarProfilesImages = {
  one: 'https://i.imgur.com/vyW3w3r.png',
  two: 'https://i.imgur.com/lkIgoZP.png',
  three: 'https://i.imgur.com/fuFwKbQ.png',
  four: 'https://i.imgur.com/IXPZxIr.png',
  five: 'https://i.imgur.com/ub0bTXj.png',
}
