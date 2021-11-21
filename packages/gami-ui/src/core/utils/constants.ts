export const DESIGN_TYPES = {
  width: ['fit', 'auto', 'xs', 'sm', 'md', 'lg', 'full'] as const,
  height: ['auto', 'xs', 'sm', 'md', 'lg', 'full'] as const,
  border: ['none', 'xs', 'sm', 'md', 'lg', 'full'] as const,
  shadow: ['none', 'xs', 'sm', 'md', 'lg', 'full'] as const,
  textAlign: ['left', 'center', 'right', 'justify'] as const,
  fontWeight: [
    'light',
    'normal',
    'medium',
    'semibold',
    'bold',
    'extrabold',
    'black',
  ] as const,
}

export const REGEX_RULES = {
  CATCH_FIRST_LETTERS: /\b(\w)/g,
  FIND_CAPITAL_LETTERS: /(?=[A-Z])/,
  ONLY_NUMBERS: /^[0-9]+$/,
}
