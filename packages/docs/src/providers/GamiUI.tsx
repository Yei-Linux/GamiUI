import { css, Global } from "@emotion/react"
import { defaultTheme, rounded, ThemeGamification } from "@gamiui/standard"
import React, { Fragment } from "react"
import SEO from "../layouts/SEO"

export interface IGamiUIProvider {
  children: React.ReactNode
}

const normalizeStyles = () => css`
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #ffffff8a;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${defaultTheme.light.neutral[500]};
    border-radius: ${rounded.md};
  }
`

const GamiUIProvider = ({ children }: IGamiUIProvider) => {
  return (
    <Fragment>
      <SEO title="GamiUI - Nice UI lib" />
      <ThemeGamification>
        <Global styles={normalizeStyles()} />
        {children}
      </ThemeGamification>
    </Fragment>
  )
}

export default GamiUIProvider
