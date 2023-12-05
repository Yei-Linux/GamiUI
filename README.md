<p align="center">
  <a href="https://www.gamiui.com">
    <img style="border-radius:1em;box-shadow: 1px 1px 8px 0px rgba(0,0,0,0.15)" src="https://i.imgur.com/8EkWyHT.png" alt="gamiui" />
    <h1 align="center">GamiUI</h1>
  </a>
</p>
</br>

## Getting Started

Visit <a aria-label="gamiui" href="https://www.gamiui.com/">https://www.gamiui.com/</a> to get started with GamiUI.

## Documentation

Visit [https://www.gamiui.com/docs/atoms/avatar](https://www.gamiui.com/docs) to view the full documentation.

## Quick Start

1. Installation: Inside your React project (CRA,Nextjs,Gatsby) running this following commands:

```bash
yarn add @gamiui/standard
# or
npm i @gamiui/standard
```

2. Setup: Now you need to add gamification provider on root aplication like this:

```jsx
import { ThemeGamification } from "@gamiui/standard";

const App = ({ Component }) => {
  return (
    <ThemeGamification>
      <Component />
    </ThemeGamification>
  );
};
```

3. Using GamiUI components: Once is installed you can use any of the components as follows.

```jsx
import { Button } from "@gamiui/standard";

const Component = () => <Button>GamiUI</Button>;
```

## Contributing
Contributions are always welcome!

# Execute Project

1.  **Version of node and npm.**
    Node: 15.3.0
    Npm: 7.0.14

2.  **Install dependencies to execute project.**
    Execute on root project
    npm run install-deps

3.  **Publish project to npm of @gamiui/standard.**
    First login on npm
    Then change version
    Finally execute this command script:
    npm run publishfinal:gami-ui

## License

[MIT](https://choosealicense.com/licenses/mit/)
