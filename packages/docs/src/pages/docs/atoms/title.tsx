import React from "react"
import ReactBuilder from "../../../components/PageBuilder"
import { atoms } from "../../../constants/atoms"
import WithLayout from "../../../hocs/WithLayout"

export interface IAtomTitle {}

const AtomTitle = ({}: IAtomTitle) => {
  const Title = atoms[11]

  return <ReactBuilder page={Title} />
}

export default WithLayout({ hasHeader: true, hasFooter: true })(AtomTitle)
