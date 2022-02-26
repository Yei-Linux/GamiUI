import React from "react"
import ReactBuilder from "../../../components/PageBuilder"
import { atoms } from "../../../constants/atoms"
import WithLayout from "../../../hocs/WithLayout"

export interface IAtomMessage {}

const AtomMessage = ({}: IAtomMessage) => {
  const Message = atoms[7]

  return <ReactBuilder page={Message} />
}

export default WithLayout({ hasHeader: true, hasFooter: true })(AtomMessage)
