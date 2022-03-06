import React from "react"
import ReactBuilder from "../../../components/PageBuilder"
import { theme } from "../../../constants/theme"
import WithLayout from "../../../hocs/WithLayout"

export interface IDefaultTheme {}

const DefaultTheme = ({}: IDefaultTheme) => {
  const DefaultTheme = theme[0]

  return <ReactBuilder page={DefaultTheme} />
}

export default WithLayout({ hasHeader: true, hasFooter: true })(DefaultTheme)
