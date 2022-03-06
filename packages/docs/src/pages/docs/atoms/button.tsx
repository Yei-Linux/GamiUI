import React from "react"
import ReactBuilder from "../../../components/PageBuilder"
import { atoms } from "../../../constants/atoms"
import WithLayout from "../../../hocs/WithLayout"

export interface IAtomButton {}

const AtomButton = ({}: IAtomButton) => {
  const Button = atoms[1]

  return <ReactBuilder page={Button} />
}

export default WithLayout({ hasHeader: true, hasFooter: true })(AtomButton)
