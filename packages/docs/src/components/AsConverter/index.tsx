import { RichText, Table } from "@gamiui/standard"
import React from "react"
import { TComponents } from "../../types/components"
import CodeBlock from "../CodeBlock/CodeBlock"

export interface IAsConverter {
  type: TComponents
  props: Record<string, unknown>
}

const AsConverter = ({ type, props }: IAsConverter) => {
  const components = {
    RichText: RichText,
    CodeBlock: CodeBlock,
    Table: Table,
  }

  const Component = components[type] as any

  return <Component {...props} />
}

export default AsConverter
