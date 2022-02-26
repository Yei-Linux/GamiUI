import React from "react"
import ReactBuilder from "../../../components/PageBuilder"
import { atoms } from "../../../constants/atoms"
import WithLayout from "../../../hocs/WithLayout"

export interface IAtomEmpty {}

const AtomEmpty = ({}: IAtomEmpty) => {
  const Empty = atoms[3]

  return <ReactBuilder page={Empty} />
}

export default WithLayout({ hasHeader: true, hasFooter: true })(AtomEmpty)
