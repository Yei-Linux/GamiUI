import { ThemeGamification } from "@gamiui/standard"
import React from "react"

export interface IGamiUIProvider {
  children: React.ReactNode
}

const GamiUIProvider = ({ children }: IGamiUIProvider) => {
  return <ThemeGamification>{children}</ThemeGamification>
}

export default GamiUIProvider
