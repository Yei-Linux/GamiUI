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
              text: "To use this prop component only copy this code to display button.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.button.sizes,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.button.sizes)
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
              text: "To use this prop component only copy this code to display button.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.button.width,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.button.width)
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
              text: "To use this prop component only copy this code to display button.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.button.height,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.button.height)
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
              text: "To use this prop component only copy this code to display button.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.button.rounded,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.button.rounded)
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
              text: "To use this prop component only copy this code to display button.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.button.shadow,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.button.shadow)
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
              text: "To use this prop component only copy this code to display button.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.button.textalign,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.button.textalign)
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
              text: "To use this prop component only copy this code to display button.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.button.fontweight,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.button.fontweight)
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
              text: "To use this prop component only copy this code to display button.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.button.padding,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.button.padding)
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
              text: "To use this prop component only copy this code to display button.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.button.margin,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.button.margin)
              ),
              language: "jsx",
            },
          },
        ],
      },
      {
        title: "Disable",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "To use this prop component only copy this code to display button.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.button.disable,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.button.disable)
              ),
              language: "jsx",
            },
          },
        ],
      },
      {
        title: "Variants",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "To use this prop component only copy this code to display button.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.button.variants,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.button.variants)
              ),
              language: "jsx",
            },
          },
        ],
      },
      {
        title: "Bordereds",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "To use this prop component only copy this code to display button.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.button.variants,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.button.variants)
              ),
              language: "jsx",
            },
          },
        ],
      },
      {
        title: "Ghost",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "To use this prop component only copy this code to display button.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.button.ghost,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.button.ghost)
              ),
              language: "jsx",
            },
          },
        ],
      },
      {
        title: "Light",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "To use this prop component only copy this code to display button.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.button.light,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.button.light)
              ),
              language: "jsx",
            },
          },
        ],
      },
      {
        title: "Flat",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "To use this prop component only copy this code to display button.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.button.flat,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.button.flat)
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
    title: "Collapse",
    sections: [
      {
        title: "",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "Collapse component is used to display hide content when user wants to see!",
            },
          },
          {
            component: "CodeBlock",
            props: {
              code: `import { Collapse } from '@gamiui/standard';`,
              language: "javascript",
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
              text: "To use this prop component only copy this code to display collapse.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.collapse.rounded,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.collapse.rounded)
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
              text: "To use this prop component only copy this code to display collapse.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.collapse.shadow,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.collapse.shadow)
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
              text: "To use this prop component only copy this code to display collapse.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.collapse.padding,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.collapse.padding)
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
              text: "To use this prop component only copy this code to display collapse.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.collapse.margin,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.collapse.margin)
              ),
              language: "jsx",
            },
          },
        ],
      },
      {
        title: "GroupDividers",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "To use this prop component only copy this code to display collapse.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.collapse.groupdividers,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(
                  allComponents.atoms.collapse.groupdividers
                )
              ),
              language: "jsx",
            },
          },
        ],
      },
      {
        title: "GroupNotDividers",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "To use this prop component only copy this code to display collapse.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.collapse.groupnotdividers,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(
                  allComponents.atoms.collapse.groupnotdividers
                )
              ),
              language: "jsx",
            },
          },
        ],
      },
      {
        title: "GroupAccordion",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "To use this prop component only copy this code to display collapse.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.collapse.groupaccordion,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(
                  allComponents.atoms.collapse.groupaccordion
                )
              ),
              language: "jsx",
            },
          },
        ],
      },
      {
        title: "Title",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "To use this prop component only copy this code to display collapse.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.collapse.title,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.collapse.title)
              ),
              language: "jsx",
            },
          },
        ],
      },
      {
        title: "Subtitle",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "To use this prop component only copy this code to display collapse.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.collapse.subtitle,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.collapse.subtitle)
              ),
              language: "jsx",
            },
          },
        ],
      },
      {
        title: "Expand",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "To use this prop component only copy this code to display collapse.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.collapse.expand,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.collapse.expand)
              ),
              language: "jsx",
            },
          },
        ],
      },
      {
        title: "Variant",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "To use this prop component only copy this code to display collapse.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.collapse.variant,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.collapse.variant)
              ),
              language: "jsx",
            },
          },
        ],
      },
      {
        title: "Bordered",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "To use this prop component only copy this code to display collapse.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.collapse.bordered,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.collapse.bordered)
              ),
              language: "jsx",
            },
          },
        ],
      },
      {
        title: "ContentLeft",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "To use this prop component only copy this code to display collapse.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.collapse.contentleft,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(
                  allComponents.atoms.collapse.contentleft
                )
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
    title: "Empty",
    sections: [
      {
        title: "",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "Empty component is used to display image on empty content!",
            },
          },
          {
            component: "CodeBlock",
            props: {
              code: `import { Empty } from '@gamiui/standard';`,
              language: "javascript",
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
              text: "To use this prop component only copy this code to display empty.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.empty.shadow,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.empty.shadow)
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
              text: "To use this prop component only copy this code to display empty.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.empty.padding,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.empty.padding)
              ),
              language: "jsx",
            },
          },
        ],
      },
      {
        title: "Margin",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "To use this prop component only copy this code to display empty.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.empty.margin,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.empty.margin)
              ),
              language: "jsx",
            },
          },
        ],
      },
      {
        title: "IconType",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "To use this prop component only copy this code to display empty.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.empty.icontype,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.empty.icontype)
              ),
              language: "jsx",
            },
          },
        ],
      },
      {
        title: "CustomIcon",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "To use this prop component only copy this code to display empty.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.empty.customicon,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.empty.customicon)
              ),
              language: "jsx",
            },
          },
        ],
      },
      {
        title: "Text",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "To use this prop component only copy this code to display empty.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.empty.text,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.empty.text)
              ),
              language: "jsx",
            },
          },
        ],
      },
      {
        title: "TextColor",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "To use this prop component only copy this code to display empty.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.empty.textcolor,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.empty.textcolor)
              ),
              language: "jsx",
            },
          },
        ],
      },
      {
        title: "Size",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "To use this prop component only copy this code to display empty.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.empty.size,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.empty.size)
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
    title: "Icon",
    sections: [
      {
        title: "",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "Icon component is used to display icon!",
            },
          },
          {
            component: "CodeBlock",
            props: {
              code: `import { Icon } from '@gamiui/standard';`,
              language: "javascript",
            },
          },
        ],
      },
      {
        title: "Rounded",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "To use this prop component only copy this code to display icon.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.icon.rounded,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.icon.rounded)
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
              text: "To use this prop component only copy this code to display icon.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.icon.shadow,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.icon.shadow)
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
              text: "To use this prop component only copy this code to display icon.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.icon.padding,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.icon.padding)
              ),
              language: "jsx",
            },
          },
        ],
      },
      {
        title: "Margin",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "To use this prop component only copy this code to display icon.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.icon.margin,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.icon.margin)
              ),
              language: "jsx",
            },
          },
        ],
      },
      {
        title: "Color",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "To use this prop component only copy this code to display icon.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.icon.color,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.icon.color)
              ),
              language: "jsx",
            },
          },
        ],
      },
      {
        title: "Size",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "To use this prop component only copy this code to display icon.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.icon.size,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.icon.size)
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
    title: "Image",
    sections: [
      {
        title: "",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "Icon component is used to display icon!",
            },
          },
          {
            component: "CodeBlock",
            props: {
              code: `import { Image } from '@gamiui/standard';`,
              language: "javascript",
            },
          },
        ],
      },
      {
        title: "Rounded",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "To use this prop component only copy this code to display image.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.image.rounded,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.image.rounded)
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
              text: "To use this prop component only copy this code to display image.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.image.shadow,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.image.shadow)
              ),
              language: "jsx",
            },
          },
        ],
      },
      {
        title: "Margin",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "To use this prop component only copy this code to display image.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.image.margin,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.image.margin)
              ),
              language: "jsx",
            },
          },
        ],
      },
      {
        title: "SrcAlt",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "To use this prop component only copy this code to display image.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.image.srcalt,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.image.srcalt)
              ),
              language: "jsx",
            },
          },
        ],
      },
      {
        title: "Link",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "To use this prop component only copy this code to display image.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.image.link,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.image.link)
              ),
              language: "jsx",
            },
          },
        ],
      },
      {
        title: "Background",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "To use this prop component only copy this code to display image.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.image.background,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.image.background)
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
              text: "To use this prop component only copy this code to display image.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.image.sets,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.image.sets)
              ),
              language: "jsx",
            },
          },
        ],
      },
      {
        title: "Max",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "To use this prop component only copy this code to display image.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.image.max,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.image.max)
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
