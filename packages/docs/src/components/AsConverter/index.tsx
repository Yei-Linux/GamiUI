import styled from "@emotion/styled"
import { RichText, Table } from "@gamiui/standard"
import React from "react"
import { TComponents } from "../../types/components"
import CodeBlock from "../CodeBlock/CodeBlock"

export interface IAsConverter {
  type: TComponents
  props: Record<string, unknown>
}

const TableFormat = styled(Table)`
  p {
    word-break: break-all;
  }
`

const AsConverter = ({ type, props }: IAsConverter) => {
  const components = {
    RichText: RichText,
    CodeBlock: CodeBlock,
    Table: TableFormat,
  }

  const Component = components[type] as any

  return <Component {...props} />
}

export default AsConverter
