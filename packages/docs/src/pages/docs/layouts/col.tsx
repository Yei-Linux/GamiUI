import React from "react"
import ReactBuilder from "../../../components/PageBuilder"
import { layouts } from "../../../constants/layouts"
import WithLayout from "../../../hocs/WithLayout"

export interface IAtomCol {}

const AtomCol = ({}: IAtomCol) => {
  const Col = layouts[0]

  return <ReactBuilder page={Col} />
}

export default WithLayout({ hasHeader: true, hasFooter: true })(AtomCol)
