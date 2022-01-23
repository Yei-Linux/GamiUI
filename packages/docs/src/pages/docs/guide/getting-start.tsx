import {
  CodeBlock,
  Container,
  RichText,
  Table,
  Tag,
  theme,
  Title,
} from "@gamiui/standard"
import React from "react"
import WithLayout from "../../../hocs/WithLayout"

export interface IGettingStart {}

const GettingStart = ({}: IGettingStart) => {
  return (
    <Container>
      <Title margin="xs:0 0 2rem 0" level="h1">
        Getting started
      </Title>

      <Container margin="xs:0 0 2rem 0">
        <RichText
          margin="xs:0 0 1rem 0"
          text="This is GamiUI library, an amazing package ui that provides a lot of components to use and play with it!"
        />
        <RichText
          margin="xs:0 0 1rem 0"
          text="This library was created to give a nice lib ui, full customizable , easy to use and the power to use on gamification projects too."
        />
      </Container>

      <Container margin="xs:0 0 2rem 0">
        <Title margin="xs:0 0 1rem 0" level="h2">
          Installation
        </Title>
        <RichText
          margin="xs:0 0 1rem 0"
          text="Inside your React project directory, install GamiUI by running either of the following:"
        />
        <CodeBlock
          code={`yarn add @gamiui/standard
# or
 npm i @gamiui/standard`}
          language="javascript"
        />
      </Container>

      <Container margin="xs:0 0 2rem 0">
        <Title margin="xs:0 0 1rem 0" level="h2">
          Setup
        </Title>
        <RichText
          margin="xs:0 0 1rem 0"
          text="For GamiUI to work correctly, you need to set up the GamiUIProvider at the root of your application."
        />
        <RichText
          margin="xs:0 0 1rem 0"
          text="Go to the root of your application and do this:"
        />
        <CodeBlock
          code={`import * as React from 'react';

// 1. import GamiUIProvider component
import { ThemeGamification } from "@gamiui/standard";
        
const App = ({ Component }) => {
  // 2. Use at the root of your app
  return (
    <ThemeGamification>
      <Component />
    </ThemeGamification>
  );
}`}
          language="jsx"
        />
      </Container>

      <Container margin="xs:0 0 2rem 0">
        <Title margin="xs:0 0 1rem 0" level="h2">
          NextJS
        </Title>
        <RichText
          margin="xs:0 0 1rem 0"
          text="For GamiUI to work correctly, you need to set up the GamiUIProvider at the root of your application."
        />
        <RichText
          margin="xs:0 0 1rem 0"
          text="Go to the root of your application and do this:"
        />
        <CodeBlock
          code={`import React from "react";
import { ThemeGamification } from "@gamiui/standard";
              
const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeGamification>
      <Component {...pageProps} />
    </ThemeGamification>
  );
}
              
export default MyApp;
        `}
          language="jsx"
        />
      </Container>

      <Container margin="xs:0 0 2rem 0">
        <Title margin="xs:0 0 1rem 0" level="h2">
          GatsbyJS
        </Title>
        <RichText
          margin="xs:0 0 1rem 0"
          text="For GamiUI to work correctly, you need to set up the GamiUIProvider at the root of your application."
        />
        <RichText
          margin="xs:0 0 1rem 0"
          text="Go to the root of your application and do this:"
        />
        <CodeBlock
          code={`import React from "react";
import { ThemeGamification } from "@gamiui/standard";
              
const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeGamification>
      <Component {...pageProps} />
    </ThemeGamification>
  );
}
              
export default MyApp;
        `}
          language="jsx"
        />
      </Container>

      <Container margin="xs:0 0 2rem 0">
        <Title margin="xs:0 0 1rem 0" level="h2">
          GamiUIProvider Props
        </Title>
        <Table
          columns={[
            { title: "Attribute", dataIndex: "attribute" },
            {
              title: "Type",
              dataIndex: "type",
              render: (name: string) => (
                <Tag
                  text={name}
                  color={theme.light.neutral[800]}
                  background={theme.light.primary.jordyBlue}
                />
              ),
            },
            { title: "Accepted values", dataIndex: "acceptedvalues" },
            { title: "Description", dataIndex: "description" },
            { title: "Default", dataIndex: "default" },
          ]}
          data={[
            {
              attribute: "disableDefaultStyles",
              type: "boolean",
              acceptedvalues: "true/false",
              description: "By default includes <GlobalStyles/>",
              default: false,
            },
          ]}
        />
      </Container>
    </Container>
  )
}

export default WithLayout({ hasHeader: true, hasFooter: true })(GettingStart)
