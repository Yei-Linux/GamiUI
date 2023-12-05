<p align="center">
  <a href="https://www.gamiui.com">
    <img src="https://i.pinimg.com/originals/02/61/18/0261188a351ebd989dd394761403da28.jpg" alt="gamiBrain" width="200"  style="border-radius:50%"/>
    <h1 align="center">GamiUI</h1>
  </a>
</p>
</br>

# Installation

The easiest way to get started with GamiUI is to use the global installation. Which means that all the components are imported from a single package.

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

## **Framework Guides**

GamiUI is compatible with your preferred framework. We have compiled comprehensive, step-by-step tutorials for the following frameworks:

- **1.** Nextjs
- **2.** Vite