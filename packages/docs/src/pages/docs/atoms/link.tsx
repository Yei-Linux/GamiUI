import React from "react"
import ReactBuilder from "../../../components/PageBuilder"
import { atoms } from "../../../constants/atoms"
import WithLayout from "../../../hocs/WithLayout"

export interface IAtomLink {}

const AtomLink = ({}: IAtomLink) => {
  const Link = atoms[6]

  return <ReactBuilder page={Link} />
}

export default WithLayout({ hasHeader: true, hasFooter: true })(AtomLink)
