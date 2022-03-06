import React from "react"
import ReactDOM from "react-dom"

import GamiUIProvider from "./src/providers/GamiUI"

export const wrapRootElement = ({ element }) => (
  <GamiUIProvider>{element}</GamiUIProvider>
)

export function replaceHydrateFunction() {
  return (element, container, callback) => {
    ReactDOM.render(element, container, callback)
  }
}
