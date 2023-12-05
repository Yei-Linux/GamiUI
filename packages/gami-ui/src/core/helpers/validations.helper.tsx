export const isLastOne = (size: number, index: number) => index == size - 1

export const capitalize = (text: string) =>
  text.length > 0 ? `${text[0].toUpperCase()}${text.slice(1)}` : text

export const isMobileOrTablet = () => {
  const isSSR = typeof window === undefined
  if (isSSR) return false

  return /(android|iphone|ipad|mobile)/i.test(window.navigator.userAgent)
}

export const transformObjectToParams = (object: Record<string, any>) => {
  const result = `?${new URLSearchParams(object).toString()}`

  return result
}

export const uuidv4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const random = (Math.random() * 16) | 0
    const id = c == 'x' ? random : (random & 0x3) | 0x8
    return id.toString(16)
  })
}
