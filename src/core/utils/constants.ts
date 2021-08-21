export const options = {
  width: ['NONE', 'SMALL', 'NORMAL', 'MEDIUM', 'LARGE', 'FULL'] as const,
  height: ['NONE', 'SMALL', 'NORMAL', 'MEDIUM', 'LARGE', 'FULL'] as const,
  border: ['NONE', 'SMALL', 'MEDIUM', 'LARGE', 'ROUNDED', 'FULL'] as const,
  shadow: ['NONE', 'SMALL', 'MEDIUM', 'LARGE', 'XLARGE'] as const,
  textAlign: ['LEFT', 'CENTER', 'RIGHT', 'JUSTIFY'] as const,
  fontWeight: [
    'EXTRALIGHT',
    'LIGHT',
    'NORMAL',
    'MEDIUM',
    'SEMIBOLD',
    'BOLD',
  ] as const,
}

export const REGEX_RULES = {
  CATCH_FIRST_LETTERS: /\b(\w)/g,
}
