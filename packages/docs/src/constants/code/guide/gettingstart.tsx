export const basicInstallation = `
yarn add @gamiui/standard
# or
npm i @gamiui/standard`

export const reactProvider = `
import * as React from 'react';
  
// 1. import GamiUIProvider component
import { ThemeGamification } from "@gamiui/standard";
        
const App = ({ Component }) => {
  // 2. Use at the root of your app
  return (
    <ThemeGamification>
      <Component />
    </ThemeGamification>
  );
}`

export const nextProvider = `
// 1. import GamiUIProvider component
import { ThemeGamification } from "@gamiui/standard";

const MyApp = ({ Component, pageProps }) => {
  return (
    // 2. Use at the root of your app
    <ThemeGamification>
      <Component {...pageProps} />
    </ThemeGamification>
  );
}

export default MyApp;
}`

export const gatsbyProvider = `
import * as React from 'react';
  
// 1. import GamiUIProvider component
import { ThemeGamification } from "@gamiui/standard";
        
const MyApp = ({ Component }) => {
  // 2. Use at the root of your app
  return (
    <ThemeGamification>
      <Component />
    </ThemeGamification>
  );
}

export default MyApp;
`
