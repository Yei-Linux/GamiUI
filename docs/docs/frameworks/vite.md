---
sidebar_position: 2
---

# Vite

To use GamiUI in your Vite project, you need to follow the steps below, depending on your project structure.

<div align="center">
<img src="https://media.istockphoto.com/id/1221591976/sv/vektor/rolig-busig-tecknad-hj%C3%A4rnfigur.jpg?s=170667a&w=0&k=20&c=j-SuJ-C9SYpQfykKO7oteWoJpa0IqlFEBotqncaM5k0=" alt="gamiBrain" width="200"/>
</div>

- **1. Add dependencies**:

  In your Vite project, run one of the following commands to install GamiUI:
  <br/>
  ```js
    npm i @gamiui/standard
  ```

- **2. Provider Setup**:
  
  Go to the src directory and inside main.jsx or main.tsx, wrap ThemeGamification around App:
  <br/>
  ```jsx
    // main.tsx or main.jsx
    import React from 'react'
    import ReactDOM from 'react-dom/client'
    import { ThemeGamification } from "@gamiui/standard";
    import App from './App'
    import './index.css'

    ReactDOM.createRoot(document.getElementById('root')).render(
        <React.StrictMode>
            <ThemeGamification>
                <App />
            </ThemeGamification>
        </React.StrictMode>,
    )
  ```

- **3. Use GamiUI Components**:
  
  Now you can import any GamiUI component directly:
  <br/>
  ```jsx
    import {Button} from '@gamiui/standard'; 

    export default function MyComponent() {
        return (
            <div>
                <Button>Click me</Button>
            </div>
        )
    }
  ```