export const timeout = (t: number): Promise<unknown> => {
  return new Promise((resolve) => {
    setTimeout(resolve, t)
  })
}
