import React from "react"
import ReactBuilder from "../../../components/PageBuilder"
import { atoms } from "../../../constants/atoms"
import WithLayout from "../../../hocs/WithLayout"

export interface IAtomCollapse {}

const AtomCollapse = ({}: IAtomCollapse) => {
  const Collapse = atoms[2]

  return <ReactBuilder page={Collapse} />
}

export default WithLayout({ hasHeader: true, hasFooter: true })(AtomCollapse)
