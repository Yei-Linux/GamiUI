import * as React from "react"
import { defaultTheme, Tag } from "@gamiui/standard"
import { IPages } from "../types/components"
import { allComponents } from "./allcomponents"
import { exampleComponentCodeBlock } from "../helpers/formater"
import reactElementToJSXString from "react-element-to-jsx-string"

export const layouts: IPages[] = [
  {
    title: "Col",
    sections: [
      {
        title: "",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "Col component is used to display a container wich separate content!",
            },
          },
          {
            component: "CodeBlock",
            props: {
              code: `import { Col } from '@gamiui/standard';`,
              language: "javascript",
            },
          },
        ],
      },
      {
        title: "WithSizeSpacing",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "To use this prop component only copy this code to display col.",
            },
          },
          {
            component: "Example",
            example: allComponents.layouts.col.sizespacing,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.layouts.col.sizespacing)
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
  {
    title: "Container",

    sections: [
      {
        title: "",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "Container component is used to show a classic container!",
            },
          },
          {
            component: "CodeBlock",
            props: {
              code: `import { Container } from '@gamiui/standard';`,
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
              text: "To use this prop component only copy this code to display container.",
            },
          },
          {
            component: "Example",
            example: allComponents.layouts.container.size,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.layouts.container.size)
              ),
              language: "jsx",
            },
          },
        ],
      },
      {
        title: "Heights",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "To use this prop component only copy this code to display container.",
            },
          },
          {
            component: "Example",
            example: allComponents.layouts.container.height,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.layouts.container.height)
              ),
              language: "jsx",
            },
          },
        ],
      },
      {
        title: "Widths",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "To use this prop component only copy this code to display container.",
            },
          },
          {
            component: "Example",
            example: allComponents.layouts.container.width,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.layouts.container.width)
              ),
              language: "jsx",
            },
          },
        ],
      },
      {
        title: "Roundeds",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "To use this prop component only copy this code to display container.",
            },
          },
          {
            component: "Example",
            example: allComponents.layouts.container.rounded,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.layouts.container.rounded)
              ),
              language: "jsx",
            },
          },
        ],
      },
      {
        title: "Shadow",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "To use this prop component only copy this code to display container.",
            },
          },
          {
            component: "Example",
            example: allComponents.layouts.container.shadow,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.layouts.container.shadow)
              ),
              language: "jsx",
            },
          },
        ],
      },
      {
        title: "TextAligns",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "To use this prop component only copy this code to display container.",
            },
          },
          {
            component: "Example",
            example: allComponents.layouts.container.textalign,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(
                  allComponents.layouts.container.textalign
                )
              ),
              language: "jsx",
            },
          },
        ],
      },
      {
        title: "FontWeight",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "To use this prop component only copy this code to display container.",
            },
          },
          {
            component: "Example",
            example: allComponents.layouts.container.fontweight,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(
                  allComponents.layouts.container.fontweight
                )
              ),
              language: "jsx",
            },
          },
        ],
      },
      {
        title: "Padding",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "To use this prop component only copy this code to display container.",
            },
          },
          {
            component: "Example",
            example: allComponents.layouts.container.padding,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.layouts.container.padding)
              ),
              language: "jsx",
            },
          },
        ],
      },
      {
        title: "Margins",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "To use this prop component only copy this code to display container.",
            },
          },
          {
            component: "Example",
            example: allComponents.layouts.container.margin,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.layouts.container.margin)
              ),
              language: "jsx",
            },
          },
        ],
      },
      {
        title: "As",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "To use this prop component only copy this code to display container.",
            },
          },
          {
            component: "Example",
            example: allComponents.layouts.container.as,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.layouts.container.as)
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
