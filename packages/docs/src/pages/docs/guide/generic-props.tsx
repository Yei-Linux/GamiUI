import React from "react"
import ReactBuilder from "../../../components/PageBuilder"
import { guide } from "../../../constants/guide"
import WithLayout from "../../../hocs/WithLayout"

export interface IGettingStart {}

const GettingStart = ({}: IGettingStart) => {
  const gettingstart = guide[1]

  return <ReactBuilder page={gettingstart} />
}

export default WithLayout({ hasHeader: true, hasFooter: true })(GettingStart)
