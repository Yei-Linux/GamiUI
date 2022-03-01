import React from "react"
import ReactBuilder from "../../../components/PageBuilder"
import { styleds } from "../../../constants/styleds"
import WithLayout from "../../../hocs/WithLayout"

export interface IAtomTransition {}

const AtomTransition = ({}: IAtomTransition) => {
  const Transition = styleds[0]

  return <ReactBuilder page={Transition} />
}

export default WithLayout({ hasHeader: true, hasFooter: true })(AtomTransition)
