import React from "react"
import ReactBuilder from "../../../components/PageBuilder"
import { atoms } from "../../../constants/atoms"
import WithLayout from "../../../hocs/WithLayout"

export interface IAtomAvatar {}

const AtomAvatar = ({}: IAtomAvatar) => {
  const avatar = atoms[0]

  return <ReactBuilder page={avatar} />
}

export default WithLayout({ hasHeader: true, hasFooter: true })(AtomAvatar)
