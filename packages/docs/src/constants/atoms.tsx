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
              text: "To use this prop component only copy this code to display avatar.",
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
      {
        title: "Widths",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "To use this prop component only copy this code to display avatar.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.avatar.width,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.avatar.width)
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
              text: "To use this prop component only copy this code to display avatar.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.avatar.height,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.avatar.height)
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
              text: "To use this prop component only copy this code to display avatar.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.avatar.rounded,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.avatar.rounded)
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
              text: "To use this prop component only copy this code to display avatar.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.avatar.shadow,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.avatar.shadow)
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
              text: "To use this prop component only copy this code to display avatar.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.avatar.padding,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.avatar.padding)
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
              text: "To use this prop component only copy this code to display avatar.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.avatar.margin,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.avatar.margin)
              ),
              language: "jsx",
            },
          },
        ],
      },
      {
        title: "Texts",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "To use this prop component only copy this code to display avatar.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.avatar.text,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.avatar.text)
              ),
              language: "jsx",
            },
          },
        ],
      },
      {
        title: "Icons",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "To use this prop component only copy this code to display avatar.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.avatar.icon,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.avatar.icon)
              ),
              language: "jsx",
            },
          },
        ],
      },
      {
        title: "Alts",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "To use this prop component only copy this code to display avatar.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.avatar.alt,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.avatar.alt)
              ),
              language: "jsx",
            },
          },
        ],
      },
      {
        title: "Sets",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "To use this prop component only copy this code to display avatar.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.avatar.sets,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.avatar.sets)
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
    title: "Button",
    sections: [
      {
        title: "",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "Button component is used to access actions and allow click users!",
            },
          },
          {
            component: "CodeBlock",
            props: {
              code: `import { Button } from '@gamiui/standard';`,
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
              text: "To use this prop component only copy this code to display avatar.",
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
      {
        title: "Widths",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "To use this prop component only copy this code to display avatar.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.avatar.width,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.avatar.width)
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
              text: "To use this prop component only copy this code to display avatar.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.avatar.height,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.avatar.height)
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
              text: "To use this prop component only copy this code to display avatar.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.avatar.rounded,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.avatar.rounded)
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
              text: "To use this prop component only copy this code to display avatar.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.avatar.shadow,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.avatar.shadow)
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
              text: "To use this prop component only copy this code to display avatar.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.avatar.padding,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.avatar.padding)
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
              text: "To use this prop component only copy this code to display avatar.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.avatar.margin,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.avatar.margin)
              ),
              language: "jsx",
            },
          },
        ],
      },
      {
        title: "Texts",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "To use this prop component only copy this code to display avatar.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.avatar.text,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.avatar.text)
              ),
              language: "jsx",
            },
          },
        ],
      },
      {
        title: "Icons",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "To use this prop component only copy this code to display avatar.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.avatar.icon,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.avatar.icon)
              ),
              language: "jsx",
            },
          },
        ],
      },
      {
        title: "Alts",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "To use this prop component only copy this code to display avatar.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.avatar.alt,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.avatar.alt)
              ),
              language: "jsx",
            },
          },
        ],
      },
      {
        title: "Sets",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "To use this prop component only copy this code to display avatar.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.avatar.sets,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.avatar.sets)
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
