---
sidebar_position: 1
---

# NextJS

To use GamiUI in your Next.js project, you need to follow the steps below, depending on your project structure.

<div align="center">
<img src="https://media.istockphoto.com/id/1221591976/sv/vektor/rolig-busig-tecknad-hj%C3%A4rnfigur.jpg?s=170667a&w=0&k=20&c=j-SuJ-C9SYpQfykKO7oteWoJpa0IqlFEBotqncaM5k0=" alt="gamiBrain" width="200" style={{ borderRadius: "50%"}}/>
</div>

- **1. Add dependencies**:

  In your Next.js project, run one of the following commands to install GamiUI:
  <br/>
  ```js
    npm i @gamiui/standard
  ```

- **2. Provider Setup**:
  
  Go to your app/providers.tsx or app/providers.jsx (create it if it doesn't exist) and wrap the Component with the ThemeGamification:
  <br/>
  ```jsx
    // app/providers.tsx
    'use client'
    import { ThemeGamification } from "@gamiui/standard";

    export function Providers({children}: { children: React.ReactNode }) {
        return (
            <ThemeGamification>
            {children}
            </ThemeGamification>
        );
    }
  ```

- **3. Add provider to Root**:
  
  Now, Go to your root layout page and wrap it with the Providers::
  <br/>
  ```jsx
    // app/layout.tsx
    import {Providers} from "./providers";

    export default function RootLayout({children}: { children: React.ReactNode }) {
        return (
            <html lang="en">
                <body>
                    <Providers>
                        {children}
                    </Providers>
                </body>
            </html>
        );
    }
  ```

- **4. Use GamiUI Components**:
  
  Now you can import any GamiUI component directly:
  <br/>
  ```jsx
    // app/page.tsx
    import {Button} from '@gamiui/standard'; 

    export default function Page() {
        return (
            <div>
                <Button>Click me</Button>
            </div>
        )
    }
  ```