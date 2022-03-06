import React from "react"
import ReactBuilder from "../../../components/PageBuilder"
import { layouts } from "../../../constants/layouts"
import WithLayout from "../../../hocs/WithLayout"

export interface IAtomSpacer {}

const AtomSpacer = ({}: IAtomSpacer) => {
  const Spacer = layouts[4]

  return <ReactBuilder page={Spacer} />
}

export default WithLayout({ hasHeader: true, hasFooter: true })(AtomSpacer)
