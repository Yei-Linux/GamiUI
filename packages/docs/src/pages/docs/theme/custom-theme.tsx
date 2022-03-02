import React from "react"
import ReactBuilder from "../../../components/PageBuilder"
import { theme } from "../../../constants/theme"
import WithLayout from "../../../hocs/WithLayout"

export interface ICustomTheme {}

const CustomTheme = ({}: ICustomTheme) => {
  const CustomTheme = theme[1]

  return <ReactBuilder page={CustomTheme} />
}

export default WithLayout({ hasHeader: true, hasFooter: true })(CustomTheme)
