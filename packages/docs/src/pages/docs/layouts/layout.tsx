import React from "react"
import ReactBuilder from "../../../components/PageBuilder"
import { layouts } from "../../../constants/layouts"
import WithLayout from "../../../hocs/WithLayout"

export interface IAtomLayout {}

const AtomLayout = ({}: IAtomLayout) => {
  const Layout = layouts[2]

  return <ReactBuilder page={Layout} />
}

export default WithLayout({ hasHeader: true, hasFooter: true })(AtomLayout)
