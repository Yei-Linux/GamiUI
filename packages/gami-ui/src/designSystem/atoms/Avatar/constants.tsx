import { TextModeType } from 'core/domain/types'
import { REGEX_RULES } from 'core/utils/constants'

export const options = {
  type: [] as const,
  zoomMode: ['outside', 'inside', 'none'] as const,
  textMode: ['firstcapitals', 'twofirstchars', 'threefirstchars'] as const,
}

export const maxSizeLetters = 3

export const avatarTextModes: Record<TextModeType, keyof typeof REGEX_RULES> = {
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

export const withTextExamples = [
  {
    label: 'Textone',
    value: 'Jesus',
    customProps: {
      background: '#54BAB9',
      textColor: 'white',
    },
  },
  {
    label: 'Texttwo',
    value: 'Yei Linux',
    customProps: {
      background: '#54BAB9',
      textColor: 'white',
    },
  },
  {
    label: 'Textthree',
    value: 'Cesar Jesus Alberto',
    customProps: {
      background: '#54BAB9',
      textColor: 'white',
    },
  },
]
