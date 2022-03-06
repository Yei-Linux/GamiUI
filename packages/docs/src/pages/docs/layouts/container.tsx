import React from "react"
import ReactBuilder from "../../../components/PageBuilder"
import { layouts } from "../../../constants/layouts"
import WithLayout from "../../../hocs/WithLayout"

export interface IAtomContainer {}

const AtomContainer = ({}: IAtomContainer) => {
  const Container = layouts[1]

  return <ReactBuilder page={Container} />
}

export default WithLayout({ hasHeader: true, hasFooter: true })(AtomContainer)
