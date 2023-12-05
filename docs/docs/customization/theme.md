---
sidebar_position: 1
---

# Theme

The easiest way to get started with GamiUI is to use the global installation. Which means that all the components are imported from a single package.

<div align="center">
<img src="https://i.pinimg.com/550x/1b/31/7c/1b317c42cff3e28a2b5ebc05f1f0daa4.jpg" alt="gamiBrain" width="200"/>
</div>

Follow the steps below to install all GamiUI components:

- **1. Install Packages**:
  
  To install GamiUI, run one of the following commands in your terminal:
  <br/>
  ```js
  npm i @gamiui/standard
  ```

- **2. Provider Setup**:
  
  It is essential to add the GamiUIProvider at the root of your application:
  <br/>
  ```jsx
  import React from "react";
  import { ThemeGamification } from "@gamiui/standard";

  export const App = () => {
    return (
      <ThemeGamification> 
        <YourApplication />
      </ThemeGamification>
    );
  };
  ```
