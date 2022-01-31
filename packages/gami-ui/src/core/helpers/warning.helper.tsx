const warned: Record<string, boolean> = {}

const warning = (valid: boolean, message: string) => {
  if (!valid && console !== undefined) {
    console.error(`Warning: ${message}`)
  }
}

const note = (valid: boolean, message: string) => {
  if (!valid && console !== undefined) {
    console.warn(`Note: ${message}`)
  }
}

const call = (
  method: (valid: boolean, message: string) => void,
  valid: boolean,
  message: string
) => {
  if (!valid && !warned[message]) {
    method(false, message)
    warned[message] = true
  }
}

export const devWarning = (
  valid: boolean,
  component: string,
  message: string,
  isWarning = true
): void => {
  call(isWarning ? warning : note, valid, `[gamiui: ${component}] ${message}`)
}
