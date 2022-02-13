export const isLastOne = (size: number, index: number) => index == size - 1

export const capitalize = (text: string) =>
  text.length > 0 ? `${text[0].toUpperCase()}${text.slice(1)}` : text
