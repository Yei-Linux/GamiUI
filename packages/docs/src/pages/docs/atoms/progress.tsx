import React from "react"
import ReactBuilder from "../../../components/PageBuilder"
import { atoms } from "../../../constants/atoms"
import WithLayout from "../../../hocs/WithLayout"

export interface IAtomProgress {}

const AtomProgress = ({}: IAtomProgress) => {
  const Progress = atoms[8]

  return <ReactBuilder page={Progress} />
}

export default WithLayout({ hasHeader: true, hasFooter: true })(AtomProgress)
