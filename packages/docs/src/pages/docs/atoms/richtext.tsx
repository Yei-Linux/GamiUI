import React from "react"
import ReactBuilder from "../../../components/PageBuilder"
import { atoms } from "../../../constants/atoms"
import WithLayout from "../../../hocs/WithLayout"

export interface IAtomRichText {}

const AtomRichText = ({}: IAtomRichText) => {
  const RichText = atoms[9]

  return <ReactBuilder page={RichText} />
}

export default WithLayout({ hasHeader: true, hasFooter: true })(AtomRichText)
