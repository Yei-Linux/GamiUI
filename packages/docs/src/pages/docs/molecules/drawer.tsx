import React from "react"
import ReactBuilder from "../../../components/PageBuilder"
import { molecules } from "../../../constants/molecules"
import WithLayout from "../../../hocs/WithLayout"

export interface IAtomDrawer {}

const AtomDrawer = ({}: IAtomDrawer) => {
  const Drawer = molecules[0]

  return <ReactBuilder page={Drawer} />
}

export default WithLayout({ hasHeader: true, hasFooter: true })(AtomDrawer)
