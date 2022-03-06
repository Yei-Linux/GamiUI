import * as React from "react"
import { defaultTheme, docsDrawer, docsFloating, Row, Tag } from "@gamiui/standard"
import { IPages } from "../types/components"
import { allComponents } from "./allcomponents"
import { exampleComponentCodeBlock } from "../helpers/formater"
import { makeTableDocProps } from "../utils/components"

export const molecules: IPages[] = [
  {
    title: "Drawer",
    sections: [
      {
        title: "",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "Drawer component is used to display a container in placement you want!",
            },
          },
          {
            component: "CodeBlock",
            props: {
              code: `import { Drawer } from '@gamiui/standard';`,
              language: "javascript",
            },
          },
        ],
      },
      {
        title: "WithDefault",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "To use this prop component only copy this code to display drawer.",
            },
          },
          {
            component: "Example",
            example: allComponents.molecules.drawer.default[0],
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                `${allComponents.molecules.drawer.default[1]}`,
                false
              ),
              language: "jsx",
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
              text: "To use this prop component only copy this code to display drawer.",
            },
          },
          {
            component: "Example",
            example: allComponents.molecules.drawer.direction[0],
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                `${allComponents.molecules.drawer.direction[1]}`,
                false
              ),
              language: "jsx",
            },
          },
        ],
      },
      {
        title: "WithCustomCloseIcon",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "To use this prop component only copy this code to display drawer.",
            },
          },
          {
            component: "Example",
            example: allComponents.molecules.drawer.customcloseicon[0],
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                `${allComponents.molecules.drawer.customcloseicon[1]}`,
                false
              ),
              language: "jsx",
            },
          },
        ],
      },
      {
        title: "WithCloseIcon",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "To use this prop component only copy this code to display drawer.",
            },
          },
          {
            component: "Example",
            example: allComponents.molecules.drawer.closeicon[0],
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                `${allComponents.molecules.drawer.closeicon[1]}`,
                false
              ),
              language: "jsx",
            },
          },
        ],
      },
      {
        title: "WithMask",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "To use this prop component only copy this code to display drawer.",
            },
          },
          {
            component: "Example",
            example: allComponents.molecules.drawer.mask[0],
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                `${allComponents.molecules.drawer.mask[1]}`,
                false
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
            props: makeTableDocProps(docsDrawer),
          },
        ],
      },
    ],
  },
  {
    title: "Floating",
    sections: [
      {
        title: "",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "Floating component is used to display a notification container in placement you want!",
            },
          },
          {
            component: "CodeBlock",
            props: {
              code: `import { Floating } from '@gamiui/standard';`,
              language: "javascript",
            },
          },
        ],
      },
      {
        title: "WithDefault",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "To use this prop component only copy this code to display floating.",
            },
          },
          {
            component: "Example",
            example: allComponents.molecules.floating.default[0],
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                `${allComponents.molecules.floating.default[1]}`,
                false
              ),
              language: "jsx",
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
              text: "To use this prop component only copy this code to display floating.",
            },
          },
          {
            component: "Example",
            example: allComponents.molecules.floating.direction[0],
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                `${allComponents.molecules.floating.direction[1]}`,
                false
              ),
              language: "jsx",
            },
          },
        ],
      },
      {
        title: "WithCustomCloseIcon",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "To use this prop component only copy this code to display floating.",
            },
          },
          {
            component: "Example",
            example: allComponents.molecules.floating.customcloseicon[0],
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                `${allComponents.molecules.floating.customcloseicon[1]}`,
                false
              ),
              language: "jsx",
            },
          },
        ],
      },
      {
        title: "WithCloseIcon",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "To use this prop component only copy this code to display floating.",
            },
          },
          {
            component: "Example",
            example: allComponents.molecules.floating.closeicon[0],
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                `${allComponents.molecules.floating.closeicon[1]}`,
                false
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
            props: makeTableDocProps(docsFloating),
          },
        ],
      },
    ],
  },
]
