import React from "react"
import ReactBuilder from "../../../components/PageBuilder"
import { atoms } from "../../../constants/atoms"
import WithLayout from "../../../hocs/WithLayout"

export interface IAtomImage {}

const AtomImage = ({}: IAtomImage) => {
  const Image = atoms[5]

  return <ReactBuilder page={Image} />
}

export default WithLayout({ hasHeader: true, hasFooter: true })(AtomImage)
