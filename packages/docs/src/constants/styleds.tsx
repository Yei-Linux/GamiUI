import * as React from "react"
import { defaultTheme, docsTransition, Tag } from "@gamiui/standard"
import { IPages } from "../types/components"
import { allComponents } from "./allcomponents"
import { exampleComponentCodeBlock } from "../helpers/formater"
import reactElementToJSXString from "react-element-to-jsx-string"
import { makeTableDocProps } from "../utils/components"

export const styleds: IPages[] = [
  {
    title: "Transition",

    sections: [
      {
        title: "",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "Transition component is used to add transition on any component you want!",
            },
          },
          {
            component: "CodeBlock",
            props: {
              code: `import { Transition } from '@gamiui/standard';`,
              language: "javascript",
            },
          },
        ],
      },
      {
        title: "WithEase",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "To use this prop component only copy this code to display transtion.",
            },
          },
          {
            component: "Example",
            example: allComponents.styled.transition.ease,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.styled.transition.ease)
              ),
              language: "jsx",
            },
          },
        ],
      },
      {
        title: "WithOpacity",
        items: [
          {
            component: "RichText",
            props: {
              margin: "xs:0 0 1rem 0",
              text: "To use this prop component only copy this code to display transition.",
            },
          },
          {
            component: "Example",
            example: allComponents.styled.transition.opacity,
          },
          {
            component: "CodeBlock",
            props: {
              code: exampleComponentCodeBlock(
                reactElementToJSXString(allComponents.styled.transition.opacity)
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
            props: makeTableDocProps(docsTransition),
          },
        ],
      },
    ],
  },
]
