import React from "react"

import GamiUIProvider from "./src/providers/GamiUI"

export const wrapRootElement = ({ element }) => (
  <GamiUIProvider>{element}</GamiUIProvider>
)
