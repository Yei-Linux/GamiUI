import React from "react"
import ReactBuilder from "../../../components/PageBuilder"
import { layouts } from "../../../constants/layouts"
import WithLayout from "../../../hocs/WithLayout"

export interface IAtomRow {}

const AtomRow = ({}: IAtomRow) => {
  const Row = layouts[3]

  return <ReactBuilder page={Row} />
}

export default WithLayout({ hasHeader: true, hasFooter: true })(AtomRow)
