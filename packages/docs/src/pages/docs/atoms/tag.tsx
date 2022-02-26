import React from "react"
import ReactBuilder from "../../../components/PageBuilder"
import { atoms } from "../../../constants/atoms"
import WithLayout from "../../../hocs/WithLayout"

export interface IAtomTag {}

const AtomTag = ({}: IAtomTag) => {
  const Tag = atoms[10]

  return <ReactBuilder page={Tag} />
}

export default WithLayout({ hasHeader: true, hasFooter: true })(AtomTag)
