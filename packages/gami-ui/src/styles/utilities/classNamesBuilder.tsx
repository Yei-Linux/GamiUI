import { REGEX_RULES } from 'core/utils/constants'

type TToken =
  | 'font'
  | 'opacity'
  | 'sizes'
  | 'spacing'
  | 'zIndex'
  | 'boxShadow'
  | 'borderRadius'

type TKey = string | number
type TValue = IDynamicToken | string | number

type IDynamicToken = {
  [key in TKey]: TValue
}

interface IGlobalClassesBuilder {
  token: IDynamicToken
  tokenName: TToken
}

const formatTokensNameToCSSProperties = (token: string) =>
  token.split(REGEX_RULES.FIND_CAPITAL_LETTERS).join('-').toLowerCase()

export const globalClassesBuilder = ({
  token,
  tokenName,
}: IGlobalClassesBuilder): string => {
  let classes = ``

  Object.entries(token).map(([key, value]) => {
    if (typeof value == 'object') {
      Object.entries(value).map((subkey, subvalue) => {
        if (['string', 'number'].includes(typeof subvalue)) {
          classes += `
              .${`${tokenName}-${key}__${subkey}`} {
                  ${formatTokensNameToCSSProperties(key)} : ${subvalue}
              }
          `
        }
      })
    }

    if (['string', 'number'].includes(typeof value)) {
      classes += `
            .${`${tokenName}__${key}`} {
                ${formatTokensNameToCSSProperties(tokenName)} : ${value}
            }
        `
    }
  })

  return classes
}
