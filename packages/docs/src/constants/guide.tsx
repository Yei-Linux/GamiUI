import * as React from "react"
import { defaultTheme, Tag } from "@gamiui/standard"
import { IPages } from "../types/components"

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
              code: `yarn add @gamiui/standard
# or
npm i @gamiui/standard`,
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
              code: `import * as React from 'react';
  
              // 1. import GamiUIProvider component
              import { ThemeGamification } from "@gamiui/standard";
                      
              const App = ({ Component }) => {
                // 2. Use at the root of your app
                return (
                  <ThemeGamification>
                    <Component />
                  </ThemeGamification>
                );
              }`,
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
              code: `import * as React from 'react';
  
              // 1. import GamiUIProvider component
              import { ThemeGamification } from "@gamiui/standard";
                      
              const App = ({ Component }) => {
                // 2. Use at the root of your app
                return (
                  <ThemeGamification>
                    <Component />
                  </ThemeGamification>
                );
              }`,
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
              code: `import * as React from 'react';
  
              // 1. import GamiUIProvider component
              import { ThemeGamification } from "@gamiui/standard";
                      
              const App = ({ Component }) => {
                // 2. Use at the root of your app
                return (
                  <ThemeGamification>
                    <Component />
                  </ThemeGamification>
                );
              }`,
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
            component: "Table" as const,
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
