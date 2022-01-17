import React from "react"
import WithLayout from "../../../hocs/WithLayout"

export interface IGettingStart {}

const GettingStart = ({}: IGettingStart) => {
  return (
    <div>
      Test
      <p>Test2</p>
    </div>
  )
}

export default WithLayout({ hasHeader: true, hasFooter: true })(GettingStart)
