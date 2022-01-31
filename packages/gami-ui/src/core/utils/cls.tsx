type ValueCls = string | string[]
type MappingCls = Record<string, boolean>
export type ArgumentCls = ValueCls | MappingCls

export const cls = (...args: ArgumentCls[]): string => {
  const clsArray = args
    .map((arg: ArgumentCls) => {
      if (Array.isArray(arg)) return arg

      if (typeof arg == 'string') return arg

      if (typeof arg == 'object') {
        const classesMeetCondition = Object.entries(arg)
          .map(([key, value]) => {
            if (value === true) return key

            return null
          })
          .filter((key: string | null) => key !== null)

        return classesMeetCondition
      }

      return null
    })
    .filter((clsItems: string | (string | null)[] | null) => clsItems !== null)

  const clsString = clsArray.flat()

  return clsString.join(' ')
}

export const prefixCls = (
  componentPrefixCls: string,
  customPrexiCls: string | null = null
) => {
  if (customPrexiCls) return customPrexiCls

  return `gamiui__${componentPrefixCls}`
}
