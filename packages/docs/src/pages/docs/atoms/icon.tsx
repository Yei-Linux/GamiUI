import React from "react"
import ReactBuilder from "../../../components/PageBuilder"
import { atoms } from "../../../constants/atoms"
import WithLayout from "../../../hocs/WithLayout"

export interface IAtomIcon {}

const AtomIcon = ({}: IAtomIcon) => {
  const Icon = atoms[4]

  return <ReactBuilder page={Icon} />
}

export default WithLayout({ hasHeader: true, hasFooter: true })(AtomIcon)
