import * as React from "react"
import { defaultTheme, Tag } from "@gamiui/standard"

type TTypes = string

type TControl = {
  type: "select"
  options: Array<string>
}

type TTableType = {
  summary: any
}

type TTable = {
  type: TTableType
  defaultValue?: unknown
}

export interface IArgTypeItem {
  control: any
  description?: string
  table: TTable
}

export type IArg = Record<string, IArgTypeItem>

const validateAcceptedValues = (control: any) => {
  if (typeof control !== "object") return control

  const definedTypes = control?.options

  return definedTypes.join(" | ")
}

export const makeTableDocProps = (args: IArg) => {
  const dataMade = Object.entries(args).map(
    ([key, { control, description, table }]) => ({
      attribute: key,
      type: table.type?.summary,
      acceptedvalues: validateAcceptedValues(control),
      description,
    })
  )

  const props = {
    columns: [
      { title: "Attribute", dataIndex: "attribute" },
      {
        title: "Type",
        dataIndex: "type",
        render: (name: string) => (
          <Tag
            text={name}
            color={defaultTheme.light.neutral[800]}
            background={defaultTheme.light.primary.jordyBlue}
          />
        ),
      },
      { title: "Accepted values", dataIndex: "acceptedvalues" },
      { title: "Description", dataIndex: "description" },
    ],
    data: dataMade,
  }

  return props
}
