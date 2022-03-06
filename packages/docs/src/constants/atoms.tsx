import * as React from "react"
import {
  defaultTheme,
  docAvatar,
  docsButton,
  docsCollapse,
  docsEmpty,
  docsIcon,
  docsImage,
  docsLink,
  docsMessage,
  docsProgress,
  docsRichText,
  docsTag,
  docsTitle,
  Row,
  Tag,
} from "@gamiui/standard"
import { IPages } from "../types/components"
import { allComponents } from "./allcomponents"
import reactElementToJSXString from "react-element-to-jsx-string"
import { exampleComponentCodeBlock } from "../helpers/formater"
import { makeTableDocProps } from "../utils/components"

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
            props: makeTableDocProps(docAvatar),
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
            props: makeTableDocProps(docsButton),
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
            props: makeTableDocProps(docsCollapse),
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
            props: makeTableDocProps(docsEmpty),
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
            props: makeTableDocProps(docsIcon),
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
              text: "Image component is used to display any picture!",
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
            props: makeTableDocProps(docsImage),
          },
        ],
      },
    ],
  },
  {
    title: "Link",
    sections: [
      {
        title: "",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "Link component is used to access an url!",
            },
          },
          {
            component: "CodeBlock",
            props: {
              code: `import { Link } from '@gamiui/standard';`,
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
              text: "To use this prop component only copy this code to display link.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.link.sizes,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.link.sizes)
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
              text: "To use this prop component only copy this code to display link.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.link.width,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.link.width)
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
              text: "To use this prop component only copy this code to display link.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.link.height,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.link.height)
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
              text: "To use this prop component only copy this code to display link.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.link.rounded,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.link.rounded)
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
              text: "To use this prop component only copy this code to display link.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.link.shadow,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.link.shadow)
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
              text: "To use this prop component only copy this code to display link.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.link.textalign,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.link.textalign)
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
              text: "To use this prop component only copy this code to display link.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.link.fontweight,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.link.fontweight)
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
              text: "To use this prop component only copy this code to display link.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.link.padding,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.link.padding)
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
              text: "To use this prop component only copy this code to display link.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.link.margin,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.link.margin)
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
              text: "To use this prop component only copy this code to display link.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.link.variants,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.link.variants)
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
              text: "To use this prop component only copy this code to display link.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.link.variants,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.link.variants)
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
              text: "To use this prop component only copy this code to display link.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.link.ghost,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.link.ghost)
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
              text: "To use this prop component only copy this code to display link.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.link.light,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.link.light)
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
              text: "To use this prop component only copy this code to display link.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.link.flat,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.link.flat)
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
            props: makeTableDocProps(docsLink),
          },
        ],
      },
    ],
  },
  {
    title: "Message",
    sections: [
      {
        title: "",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "Message component is used to show a nice message to user!",
            },
          },
          {
            component: "CodeBlock",
            props: {
              code: `import { Message } from '@gamiui/standard';`,
              language: "javascript",
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
              text: "To use this prop component only copy this code to display message.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.message.width,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.message.width)
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
              text: "To use this prop component only copy this code to display message.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.message.height,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.message.height)
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
              text: "To use this prop component only copy this code to display message.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.message.shadow,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.message.shadow)
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
              text: "To use this prop component only copy this code to display message.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.message.textalign,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.message.textalign)
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
              text: "To use this prop component only copy this code to display message.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.message.fontweight,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.message.fontweight)
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
              text: "To use this prop component only copy this code to display message.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.message.padding,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.message.padding)
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
              text: "To use this prop component only copy this code to display message.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.message.margin,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.message.margin)
              ),
              language: "jsx",
            },
          },
        ],
      },
      {
        title: "Directions",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "To use this prop component only copy this code to display message.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.message.direction,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.message.direction)
              ),
              language: "jsx",
            },
          },
        ],
      },
      {
        title: "Backgrounds",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "To use this prop component only copy this code to display message.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.message.background,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.message.background)
              ),
              language: "jsx",
            },
          },
        ],
      },
      {
        title: "ColorsMarker",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "To use this prop component only copy this code to display message.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.message.colormarker,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.message.colormarker)
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
            props: makeTableDocProps(docsMessage),
          },
        ],
      },
    ],
  },
  {
    title: "Progress",
    sections: [
      {
        title: "",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "Progress component is used to display progress size!",
            },
          },
          {
            component: "CodeBlock",
            props: {
              code: `import { Progress } from '@gamiui/standard';`,
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
              text: "To use this prop component only copy this code to display progress.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.progress.shadow,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.progress.shadow)
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
              text: "To use this prop component only copy this code to display progress.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.progress.margin,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.progress.margin)
              ),
              language: "jsx",
            },
          },
        ],
      },
      {
        title: "Types",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "To use this prop component only copy this code to display progress.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.progress.type,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.progress.type)
              ),
              language: "jsx",
            },
          },
        ],
      },
      {
        title: "Backgrounds",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "To use this prop component only copy this code to display progress.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.progress.background,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.progress.background)
              ),
              language: "jsx",
            },
          },
        ],
      },
      {
        title: "MaxSize",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "To use this prop component only copy this code to display progress.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.progress.maxsize,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.progress.maxsize)
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
            props: makeTableDocProps(docsProgress),
          },
        ],
      },
    ],
  },
  {
    title: "RichText",

    sections: [
      {
        title: "",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "RichText component is used to show any text you want!",
            },
          },
          {
            component: "CodeBlock",
            props: {
              code: `import { RichText } from '@gamiui/standard';`,
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
              text: "To use this prop component only copy this code to display richtext.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.richtext.sizes,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.richtext.sizes)
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
              text: "To use this prop component only copy this code to display richtext.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.richtext.width,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.richtext.width)
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
              text: "To use this prop component only copy this code to display richtext.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.richtext.height,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.richtext.height)
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
              text: "To use this prop component only copy this code to display richtext.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.richtext.rounded,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.richtext.rounded)
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
              text: "To use this prop component only copy this code to display richtext.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.richtext.shadow,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.richtext.shadow)
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
              text: "To use this prop component only copy this code to display richtext.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.richtext.textalign,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.richtext.textalign)
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
              text: "To use this prop component only copy this code to display richtext.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.richtext.fontweight,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.richtext.fontweight)
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
              text: "To use this prop component only copy this code to display richtext.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.richtext.padding,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.richtext.padding)
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
              text: "To use this prop component only copy this code to display richtext.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.richtext.margin,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.richtext.margin)
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
              text: "To use this prop component only copy this code to display richtext.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.richtext.text,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.richtext.text)
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
            props: makeTableDocProps(docsRichText),
          },
        ],
      },
    ],
  },
  {
    title: "Tag",

    sections: [
      {
        title: "",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "Tag component is used to show marked text!",
            },
          },
          {
            component: "CodeBlock",
            props: {
              code: `import { Tag } from '@gamiui/standard';`,
              language: "javascript",
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
              text: "To use this prop component only copy this code to display tag.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.tag.width,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.tag.width)
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
              text: "To use this prop component only copy this code to display tag.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.tag.height,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.tag.height)
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
              text: "To use this prop component only copy this code to display tag.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.tag.rounded,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.tag.rounded)
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
              text: "To use this prop component only copy this code to display tag.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.tag.shadow,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.tag.shadow)
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
              text: "To use this prop component only copy this code to display tag.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.tag.textalign,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.tag.textalign)
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
              text: "To use this prop component only copy this code to display tag.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.tag.fontweight,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.tag.fontweight)
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
              text: "To use this prop component only copy this code to display tag.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.tag.padding,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.tag.padding)
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
              text: "To use this prop component only copy this code to display tag.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.tag.margin,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.tag.margin)
              ),
              language: "jsx",
            },
          },
        ],
      },
      {
        title: "Colors",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "To use this prop component only copy this code to display tag.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.tag.color,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.tag.color)
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
            props: makeTableDocProps(docsTag),
          },
        ],
      },
    ],
  },
  {
    title: "Title",

    sections: [
      {
        title: "",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "Title component is used to show important text!",
            },
          },
          {
            component: "CodeBlock",
            props: {
              code: `import { Title } from '@gamiui/standard';`,
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
              text: "To use this prop component only copy this code to display title.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.title.size,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.title.size)
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
              text: "To use this prop component only copy this code to display title.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.title.width,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.title.width)
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
              text: "To use this prop component only copy this code to display title.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.title.rounded,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.title.rounded)
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
              text: "To use this prop component only copy this code to display title.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.title.shadow,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.title.shadow)
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
              text: "To use this prop component only copy this code to display title.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.title.textalign,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.title.textalign)
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
              text: "To use this prop component only copy this code to display title.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.title.fontweight,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.title.fontweight)
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
              text: "To use this prop component only copy this code to display title.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.title.padding,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.title.padding)
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
              text: "To use this prop component only copy this code to display title.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.title.margin,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.title.margin)
              ),
              language: "jsx",
            },
          },
        ],
      },
      {
        title: "Children",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "To use this prop component only copy this code to display title.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.title.children,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.title.children)
              ),
              language: "jsx",
            },
          },
        ],
      },
      {
        title: "Level",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "To use this prop component only copy this code to display title.",
            },
          },
          {
            component: "Example",
            example: allComponents.atoms.title.level,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.atoms.title.level)
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
            props: makeTableDocProps(docsTitle),
          },
        ],
      },
    ],
  },
]
