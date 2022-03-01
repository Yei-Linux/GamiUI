import * as React from "react"
import {
  defaultTheme,
  docsCol,
  docsContainer,
  docsLayout,
  docsRow,
  docsSpacer,
  Tag,
} from "@gamiui/standard"
import { IPages } from "../types/components"
import { allComponents } from "./allcomponents"
import { exampleComponentCodeBlock } from "../helpers/formater"
import reactElementToJSXString from "react-element-to-jsx-string"
import { makeTableDocProps } from "../utils/components"

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
            props: makeTableDocProps(docsCol),
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
            props: makeTableDocProps(docsContainer),
          },
        ],
      },
    ],
  },
  {
    title: "Layout",

    sections: [
      {
        title: "",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "Layout component is used to organize container on correct structure!",
            },
          },
          {
            component: "CodeBlock",
            props: {
              code: `import { Layout } from '@gamiui/standard';`,
              language: "javascript",
            },
          },
        ],
      },
      {
        title: "Default",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "To use this prop component only copy this code to display layout.",
            },
          },
          {
            component: "Example",
            example: allComponents.layouts.layout.default,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.layouts.layout.default)
              ),
              language: "jsx",
            },
          },
        ],
      },
      {
        title: "WithSidebar",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "To use this prop component only copy this code to display layout.",
            },
          },
          {
            component: "Example",
            example: allComponents.layouts.layout.sidebar,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.layouts.layout.sidebar)
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
            props: makeTableDocProps(docsLayout),
          },
        ],
      },
    ],
  },
  {
    title: "Row",

    sections: [
      {
        title: "",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "Row component is used to set component with flex props!",
            },
          },
          {
            component: "CodeBlock",
            props: {
              code: `import { Row } from '@gamiui/standard';`,
              language: "javascript",
            },
          },
        ],
      },
      {
        title: "WithDirection",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "To use this prop component only copy this code to display row.",
            },
          },
          {
            component: "Example",
            example: allComponents.layouts.row.direction,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.layouts.row.direction)
              ),
              language: "jsx",
            },
          },
        ],
      },
      {
        title: "WithGap",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "To use this prop component only copy this code to display row.",
            },
          },
          {
            component: "Example",
            example: allComponents.layouts.row.gap,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.layouts.row.gap)
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
            props: makeTableDocProps(docsRow),
          },
        ],
      },
    ],
  },
  {
    title: "Spacer",

    sections: [
      {
        title: "",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "Spacer component is used to add separation between components!",
            },
          },
          {
            component: "CodeBlock",
            props: {
              code: `import { Spacer } from '@gamiui/standard';`,
              language: "javascript",
            },
          },
        ],
      },
      {
        title: "WithSizeDirection",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "To use this prop component only copy this code to display spacer.",
            },
          },
          {
            component: "Example",
            example: allComponents.layouts.spacer.sizedirection,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(
                  allComponents.layouts.spacer.sizedirection
                )
              ),
              language: "jsx",
            },
          },
        ],
      },
      {
        title: "WithCustomSizeDirection",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "To use this prop component only copy this code to display spacer.",
            },
          },
          {
            component: "Example",
            example: allComponents.layouts.spacer.customsizedirection,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(
                  allComponents.layouts.spacer.customsizedirection
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
            props: makeTableDocProps(docsSpacer),
          },
        ],
      },
    ],
  },
]
