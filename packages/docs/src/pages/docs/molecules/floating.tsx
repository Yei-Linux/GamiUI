import React from "react"
import ReactBuilder from "../../../components/PageBuilder"
import { molecules } from "../../../constants/molecules"
import WithLayout from "../../../hocs/WithLayout"

export interface IAtomFloating {}

const AtomFloating = ({}: IAtomFloating) => {
  const Floating = molecules[1]

  return <ReactBuilder page={Floating} />
}

export default WithLayout({ hasHeader: true, hasFooter: true })(AtomFloating)
