import * as React from "react"
import { IPages } from "../types/components"
import { genericPropButtonExample } from "./code/guide/genericprops"
import {
  CustomComponentsTheme,
  CustomTheme,
  CustomTokens,
} from "./code/theme/custom-theme"
import {
  DefaultComponentsTheme,
  DefaultTheme,
  DefaultTokens,
  ExampleDefaultComponentsTheme,
  ExampleDefaultTheme,
  ExampleDefaultTokens,
} from "./code/theme/defaulttheme"

export const theme: IPages[] = [
  {
    title: "Default Theme",
    sections: [
      {
        title: "",
        items: [
          {
            component: "RichText" as const,
            props: {
              margin: "xs:0 0 1rem 0",
              text: "**GamiUI** default theme and tokens has many options than you can use by default!",
            },
          },
        ],
      },
      {
        title: "Theme",
        items: [
          {
            component: "RichText" as const,
            props: {
              margin: "xs:0 0 1rem 0",
              text: "For using and getting theme you can use useGamiTheme hook!",
            },
          },
          {
            component: "CodeBlock" as const,
            props: {
              code: DefaultTheme,
              language: "jsx",
            },
          },
        ],
      },
      {
        title: "Tokens",
        items: [
          {
            component: "RichText" as const,
            props: {
              margin: "xs:0 0 1rem 0",
              text: "For using and getting tokens you can use useGamiTheme hook!",
            },
          },
          {
            component: "CodeBlock" as const,
            props: {
              code: DefaultTokens,
              language: "jsx",
            },
          },
        ],
      },
      {
        title: "Components Theme",
        items: [
          {
            component: "RichText" as const,
            props: {
              margin: "xs:0 0 1rem 0",
              text: "For using and getting components theme you can use useGamiTheme hook!",
            },
          },
          {
            component: "CodeBlock" as const,
            props: {
              code: DefaultComponentsTheme,
              language: "jsx",
            },
          },
        ],
      },
      {
        title: "Values Default Theme",
        items: [
          {
            component: "RichText" as const,
            props: {
              margin: "xs:0 0 1rem 0",
              text: "Take a look of default values!",
            },
          },
          {
            component: "CodeBlock" as const,
            props: {
              code: ExampleDefaultTheme,
              language: "javascript",
            },
          },
        ],
      },
      {
        title: "Values Default Tokens",
        items: [
          {
            component: "RichText" as const,
            props: {
              margin: "xs:0 0 1rem 0",
              text: "Take a look of default values!",
            },
          },
          {
            component: "CodeBlock" as const,
            props: {
              code: ExampleDefaultTokens,
              language: "javascript",
            },
          },
        ],
      },
      {
        title: "Values Default Components Theme",
        items: [
          {
            component: "RichText" as const,
            props: {
              margin: "xs:0 0 1rem 0",
              text: "Take a look of default values!",
            },
          },
          {
            component: "CodeBlock" as const,
            props: {
              code: ExampleDefaultComponentsTheme,
              language: "javascript",
            },
          },
        ],
      },
    ],
    apis: [],
  },
  {
    title: "Custom Theme",
    sections: [
      {
        title: "",
        items: [
          {
            component: "RichText" as const,
            props: {
              margin: "xs:0 0 1rem 0",
              text: "In **GamiUI** you can custom your theme, tokens and component variants as you want!",
            },
          },
        ],
      },
      {
        title: "Theme",
        items: [
          {
            component: "RichText" as const,
            props: {
              margin: "xs:0 0 1rem 0",
              text: "For using and customize theme you can do this!",
            },
          },
          {
            component: "CodeBlock" as const,
            props: {
              code: CustomTheme,
              language: "jsx",
            },
          },
        ],
      },
      {
        title: "Tokens",
        items: [
          {
            component: "RichText" as const,
            props: {
              margin: "xs:0 0 1rem 0",
              text: "For using and customize tokens you can do this!",
            },
          },
          {
            component: "CodeBlock" as const,
            props: {
              code: CustomTokens,
              language: "jsx",
            },
          },
        ],
      },
      {
        title: "Components Theme",
        items: [
          {
            component: "RichText" as const,
            props: {
              margin: "xs:0 0 1rem 0",
              text: "For using and customize components theme you can do this!",
            },
          },
          {
            component: "CodeBlock" as const,
            props: {
              code: CustomComponentsTheme,
              language: "jsx",
            },
          },
        ],
      },
    ],
    apis: [],
  },
]
