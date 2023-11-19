import { TextModeType } from 'core/domain/types'
import { avatarTextModes } from './constants'
import { REGEX_RULES } from 'core/utils/constants'

export const validateMaxLetters = (
  firstLettersGot: string,
  maxSizeLetters: number
) => {
  const size = firstLettersGot.length

  if (size > maxSizeLetters) {
    return firstLettersGot.substring(0, maxSizeLetters)
  }

  return firstLettersGot
}

export const showOnlyFirstLettersOnText = (
  text: string,
  type: TextModeType,
  maxSizeLetters: number
): string => {
  const regexType = avatarTextModes[type]
  const firstLettersCaptured: string[] | null = text.match(
    REGEX_RULES[regexType]
  )

  const joinFirstLetters = firstLettersCaptured?.join('') || ''

  return validateMaxLetters(joinFirstLetters, maxSizeLetters)
}
