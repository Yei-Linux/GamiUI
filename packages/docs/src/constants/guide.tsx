import * as React from "react"
import { IPages } from "../types/components"
import {
  basicInstallation,
  reactProvider,
  nextProvider,
  gatsbyProvider,
} from "./code/guide/gettingstart"
import { genericPropButtonExample } from "./code/guide/genericprops"
import { defaultTheme, genericArgTypes, Tag } from "@gamiui/standard"
import { IArg, makeTableDocProps } from "../utils/components"

export const guide: IPages[] = [
  {
    title: "Getting started",
    sections: [
      {
        title: "",
        items: [
          {
            component: "RichText" as const,
            props: {
              margin: "xs:0 0 1rem 0",
              text: "This is GamiUI library, an amazing package ui that provides a lot of components to use and play with it!",
            },
          },
          {
            component: "RichText" as const,
            props: {
              margin: "xs:0 0 1rem 0",
              text: "This library was created to give a nice lib ui, full customizable , easy to use and the power to use on gamification projects too.",
            },
          },
          {
            component: "RichText" as const,
            props: {
              margin: "xs:0 0 1rem 0",
              text: "Best part its we continue improve this ui lib, with not only ui component but also gamification components.",
            },
          },
          {
            component: "RichText" as const,
            props: {
              margin: "xs:0 0 1rem 0",
              text: "**This is not only a simple ui lib but also a gamification lib orientation**.",
            },
          },
        ],
      },
      {
        title: "Installation",
        items: [
          {
            component: "RichText" as const,
            props: {
              margin: "xs:0 0 1rem 0",
              text: "Inside your React project directory, install GamiUI by running either of the following:",
            },
          },
          {
            component: "CodeBlock" as const,
            props: {
              code: basicInstallation,
              language: "javascript",
            },
          },
        ],
      },
      {
        title: "Setup",
        items: [
          {
            component: "RichText" as const,
            props: {
              margin: "xs:0 0 1rem 0",
              text: "For GamiUI to work correctly, you need to set up the GamiUIProvider at the root of your application.",
            },
          },
          {
            component: "RichText" as const,
            props: {
              margin: "xs:0 0 1rem 0",
              text: "Go to the root of your application and do this:",
            },
          },
          {
            component: "CodeBlock" as const,
            props: {
              code: reactProvider,
              language: "jsx",
            },
          },
        ],
      },
      {
        title: "Nextjs",
        items: [
          {
            component: "RichText" as const,
            props: {
              margin: "xs:0 0 1rem 0",
              text: "For GamiUI to work correctly, you need to set up the GamiUIProvider at the root of your application.",
            },
          },
          {
            component: "RichText" as const,
            props: {
              margin: "xs:0 0 1rem 0",
              text: "Go to the root of your application and do this:",
            },
          },
          {
            component: "CodeBlock" as const,
            props: {
              code: nextProvider,
              language: "jsx",
            },
          },
        ],
      },
      {
        title: "GatsbyJS",
        items: [
          {
            component: "RichText" as const,
            props: {
              margin: "xs:0 0 1rem 0",
              text: "For GamiUI to work correctly, you need to set up the GamiUIProvider at the root of your application.",
            },
          },
          {
            component: "RichText" as const,
            props: {
              margin: "xs:0 0 1rem 0",
              text: "Go to the root of your application and do this:",
            },
          },
          {
            component: "CodeBlock" as const,
            props: {
              code: gatsbyProvider,
              language: "jsx",
            },
          },
        ],
      },
    ],
    apis: [],
  },
  {
    title: "Generic Props",
    sections: [
      {
        title: "",
        items: [
          {
            component: "RichText" as const,
            props: {
              margin: "xs:0 0 1rem 0",
              text: "**We have a generic props for components, each component inside of docs props!**",
            },
          },
          {
            component: "RichText" as const,
            props: {
              margin: "xs:0 0 1rem 0",
              text: "**This props value can be customize on GamiUIThemeProvider(please read theme section)!**",
            },
          },
          {
            component: "RichText" as const,
            props: {
              margin: "xs:0 0 1rem 0",
              text: "For example by Button component we have this generic props, and others components have some or all options(please read components doc):",
            },
          },
          {
            component: "CodeBlock" as const,
            props: {
              code: genericPropButtonExample,
              language: "jsx",
            },
          },
        ],
      },
    ],
    apis: [
      {
        title: "Generic Props",
        items: [
          {
            component: "Table" as const,
            props: makeTableDocProps(genericArgTypes as IArg),
          },
        ],
      },
    ],
  },
]
