import { CodeBlock, RichText, Title } from "@gamiui/standard"
import React from "react"
import WithLayout from "../../../hocs/WithLayout"

export interface IGettingStart {}

const GettingStart = ({}: IGettingStart) => {
  return (
    <div>
      <Title level="h2">Getting started</Title>
      <RichText text="This is GamiUI library, an amazing package ui that provides a lot of components to use and play with it!" />

      <Title level="h3">Installation</Title>
      <RichText text="Inside your React project directory, install GamiUI by running either of the following:" />
      <CodeBlock
        code={`yarn add @gamiui/standard
# or
 npm i @gamiui/standard`}
        language="javascript"
      />

      <Title level="h3">Setup</Title>
      <RichText text="For GamiUI to work correctly, you need to set up the GamiUIProvider at the root of your application." />
      <RichText text="Go to the root of your application and do this:" />
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

      <Title level="h3">NextJS</Title>
      <RichText text="For GamiUI to work correctly, you need to set up the GamiUIProvider at the root of your application." />
      <RichText text="Go to the root of your application and do this:" />
      <CodeBlock
        code={`import React from "react";
import { ThemeGamification } from "@gamiui/standard";
              
const MyApp({ Component, pageProps }) => {
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

      <Title level="h3">GatsbyJS</Title>
      <RichText text="For GamiUI to work correctly, you need to set up the GamiUIProvider at the root of your application." />
      <RichText text="Go to the root of your application and do this:" />
      <CodeBlock
        code={`import React from "react";
import { ThemeGamification } from "@gamiui/standard";
              
const MyApp({ Component, pageProps }) => {
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
    </div>
  )
}

export default WithLayout({ hasHeader: true, hasFooter: true })(GettingStart)
