import * as React from "react"
import { defaultTheme, Row, Tag } from "@gamiui/standard"
import { IPages } from "../types/components"
import { allComponents } from "./allcomponents"
import reactElementToJSXString from "react-element-to-jsx-string"
import { exampleComponentCodeBlock } from "../helpers/formater"

export const atoms: IPages[] = [
  {
    title: "Avatar",
    sections: [
      {
        title: "",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "Avatar component is used to show a image profile or whatever you want!",
            },
          },
          {
            component: "CodeBlock",
            props: {
              code: `import { Avatar } from '@gamiui/standard';`,
              language: "javascript",
            },
          },
        ],
      },
      {
        title: "Sizes",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "To use this component only copy this code to display avatar.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.avatar.sizes,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.avatar.sizes)
              ),
              language: "jsx",
            },
          },
        ],
      },
    ],
    apis: [
      {
        title: "GamiUI Provider Props",
        items: [
          {
            component: "Table",
            props: {
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
                { title: "Default", dataIndex: "default" },
              ],
              data: [
                {
                  attribute: "disableDefaultStyles",
                  type: "boolean",
                  acceptedvalues: "true/false",
                  description: "By default includes <GlobalStyles/>",
                  default: false,
                },
              ],
            },
          },
        ],
      },
    ],
  },
]
