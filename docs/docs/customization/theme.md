---
sidebar_position: 1
---

# Theme

A theme, in the context of GamiUI, is a predefined set of colors, layout attributes, and other UI elements that you can consistently apply across your application. Themes ensure visual consistency, enrich the user experience, and simplify the management and updates of your app's look and feel.

<div align="center">
<img src="https://clipart-library.com/2023/pink-color-smile-brain-weights-white-background-very-strong-cartoon-brain-concept_761284-79.jpg" alt="gamiBrain" width="200" style={{ borderRadius: "50%"}}/>
</div>

- **1. Default Theme**:
  
  For using and getting theme you can use useGamiTheme hook:
  <br/>
  ```jsx
  const { theme } = useGamiTheme();

  return (
    <Row gap="10px">
      <Button         
        style={{
          color: theme.primary.jordyBlue,
          background: theme.neutral[0],
        }} 
        type="button" 
        width="fit">
        GamiButton
      </Button>
    </Row>
  )
  ```

- **2. Components Theme**:
  
  For using and getting components theme you can use useGamiTheme hook!:
  <br/>
  ```jsx
  const { componentsTheme } = useGamiTheme();

  return (
    <Row gap="10px">
      <Button         
        style={{
          color: componentsTheme.button.primary.color,
          background: componentsTheme.button.primary.bg,
        }} 
        type="button" 
        width="fit">
        GamiButton
      </Button>
    </Row>
  )
  ```


- **3. Custom Theme**:
  
  For using and customize our theme you can do this:
  <br/>
  ```jsx
  const Root: FC<PropsWithChildren> = ({ children }) => {
    const defaultMyTokes = {
      ...defaultTokens,
      boxShadow: {
        ...defaultTokens.boxShadow,
        primary: "red"
      },
    };

    const defaultLight = {
      ...defaultTheme.light,
      primary: {
        ...defaultTheme.light.primary,
      },
    };

    const lightThemeComponents = generatorComponentsTheme(
      defaultMyTokes,
      defaultLight
    );

    const darkThemeComponents = generatorComponentsTheme(
      defaultMyTokes,
      defaultTheme.dark
    );

    const customtheme = {
      tokens: defaultMyTokes,
      themes: {
        ...defaultTheme,
        light: defaultLight,
      },
      componentsThemes: {
        light: lightThemeComponents,
        dark: darkThemeComponents,
      },
    };
    return (
      <ThemeGamification themeUI={customtheme}>
        {children}
      </ThemeGamification>
    );
  };
  ```

- **4. Default Theme**:
  
  Take a look our default values!:
  <br/>
  ```json
  {
      "primary": {
          "jordyBlue": "#7f9cf5",
          "mediumPurple": "#9879e9",
          "hawkesBlue": "#54BAB9",
          "selago": "#FF8882",
          "white": "#ffffff"
      },
      "secondary": {
          "nepal": "#93B5C6",
          "linkWater": "#cdd8f7",
          "prim": "#E4D8DC",
          "tutu": "#FFE3E3"
      },
      "neutral": {
          "0": "#000000",
          "100": "#454545",
          "200": "#686868",
          "300": "#A4A4A4",
          "400": "#D9D9D9",
          "500": "#EAEAEA",
          "600": "#F2F2F2",
          "700": "#F8F8F8",
          "800": "#FFFFFF"
      },
      "semantic": {
          "success": "#16c79a",
          "warning": "#f5a623",
          "danger": "#f21361",
          "info": "#a7c5eb",
          "warm": "#F8F8F8",
          "spring": "#8FD9A8",
          "earth": "#A6F0C6",
          "skin": "#F2C0FF",
          "sky": "#96BAFF",
          "gradient": "linear-gradient(112deg, #AAFFEC -63.59%, #ff4ecd -20.3%, #0070F3 70.46%)"
      },
      "extended": {
          "code": "#374a54",
          "codeStrong": "#0e141e",
          "garden": "#8ac4d0",
          "gardenStrong": "#0278ae",
          "ocean": "#EFF1FD",
          "oceanStrong": "#9879e9",
          "gray": "#E5E5E5"
      }
  }
  ```

- **5. Default Components Theme**:
  
  Take a look our default components values!:
  <br/>
  ```json
  {
    "card": {
        "primary": {
            "flatbg": "#7f9cf5",
            "bg": "#7f9cf5",
            "color": "#FFFFFF",
            "border": "0px"
        },
        "secondary": {
            "flatbg": "#7f9cf5",
            "bg": "#9879e9",
            "color": "#FFFFFF",
            "border": "0px"
        },
        "tertiary": {
            "flatbg": "#7f9cf5",
            "bg": "#54BAB9",
            "color": "#FFFFFF",
            "border": "0px"
        },
        "cuaternary": {
            "flatbg": "#7f9cf5",
            "bg": "#FF8882",
            "color": "#FFFFFF",
            "border": "0px"
        },
        "success": {
            "flatbg": "#7f9cf5",
            "bg": "#16c79a",
            "color": "#FFFFFF",
            "border": "0px"
        },
        "warning": {
            "flatbg": "#7f9cf5",
            "bg": "#f5a623",
            "color": "#FFFFFF",
            "border": "0px"
        },
        "danger": {
            "flatbg": "#7f9cf5",
            "bg": "#f21361",
            "color": "#FFFFFF",
            "border": "0px"
        },
        "info": {
            "flatbg": "#7f9cf5",
            "bg": "#a7c5eb",
            "color": "#FFFFFF",
            "border": "0px"
        },
        "gradient": {
            "flatbg": "#7f9cf5",
            "bg": "linear-gradient(112deg, #AAFFEC -63.59%, #ff4ecd -20.3%, #0070F3 70.46%)",
            "color": "#FFFFFF",
            "border": "0px"
        },
        "sky": {
            "flatbg": "#7f9cf5",
            "bg": "#96BAFF",
            "color": "#FFFFFF",
            "border": "0px"
        },
        "skin": {
            "flatbg": "#7f9cf5",
            "bg": "#F2C0FF",
            "color": "#FFFFFF",
            "border": "0px"
        },
        "earth": {
            "flatbg": "#7f9cf5",
            "bg": "#A6F0C6",
            "color": "#FFFFFF",
            "border": "0px"
        },
        "spring": {
            "flatbg": "#7f9cf5",
            "bg": "#8FD9A8",
            "color": "#FFFFFF",
            "border": "0px"
        },
        "warm": {
            "flatbg": "#7f9cf5",
            "bg": "#F8F8F8",
            "color": "#000000",
            "border": "0px"
        }
    },
    "link": {
        "primary": {
            "flatbg": "#bfd8fc",
            "bg": "#FFFFFF",
            "color": "#000000",
            "border": "0px"
        },
        "secondary": {
            "flatbg": "#dbc8f0",
            "bg": "#9879e9",
            "color": "#FFFFFF",
            "border": "0px"
        },
        "tertiary": {
            "flatbg": "#a2dddc",
            "bg": "#54BAB9",
            "color": "#FFFFFF",
            "border": "0px"
        },
        "cuaternary": {
            "flatbg": "#f9c0bd",
            "bg": "#FF8882",
            "color": "#FFFFFF",
            "border": "0px"
        },
        "success": {
            "flatbg": "#3ef3c5",
            "bg": "#16c79a",
            "color": "#FFFFFF",
            "border": "0px"
        },
        "warning": {
            "flatbg": "#ffca72",
            "bg": "#f5a623",
            "color": "#FFFFFF",
            "border": "0px"
        },
        "danger": {
            "flatbg": "#ff92b8",
            "bg": "#f21361",
            "color": "#FFFFFF",
            "border": "0px"
        },
        "info": {
            "flatbg": "#f4f9ff",
            "bg": "#a7c5eb",
            "color": "#FFFFFF",
            "border": "0px"
        },
        "gradient": {
            "flatbg": "white",
            "bg": "linear-gradient(112deg, #AAFFEC -63.59%, #ff4ecd -20.3%, #0070F3 70.46%)",
            "color": "#FFFFFF",
            "border": "0px"
        },
        "sky": {
            "flatbg": "#7f9cf5",
            "bg": "#96BAFF",
            "color": "#FFFFFF",
            "border": "0px"
        },
        "skin": {
            "flatbg": "#7f9cf5",
            "bg": "#F2C0FF",
            "color": "#FFFFFF",
            "border": "0px"
        },
        "earth": {
            "flatbg": "#7f9cf5",
            "bg": "#A6F0C6",
            "color": "#FFFFFF",
            "border": "0px"
        },
        "spring": {
            "flatbg": "#7f9cf5",
            "bg": "#8FD9A8",
            "color": "#FFFFFF",
            "border": "0px"
        },
        "warm": {
            "flatbg": "#7f9cf5",
            "bg": "#F8F8F8",
            "color": "#000000",
            "border": "0px"
        }
    },
    "button": {
        "primary": {
            "flatbg": "#bfd8fc",
            "bg": "#7f9cf5",
            "color": "#FFFFFF",
            "border": "0px"
        },
        "secondary": {
            "flatbg": "#dbc8f0",
            "bg": "#9879e9",
            "color": "#FFFFFF",
            "border": "0px"
        },
        "tertiary": {
            "flatbg": "#a2dddc",
            "bg": "#54BAB9",
            "color": "#FFFFFF",
            "border": "0px"
        },
        "cuaternary": {
            "flatbg": "#f9c0bd",
            "bg": "#FF8882",
            "color": "#FFFFFF",
            "border": "0px"
        },
        "success": {
            "flatbg": "#3ef3c5",
            "bg": "#16c79a",
            "color": "#FFFFFF",
            "border": "0px"
        },
        "warning": {
            "flatbg": "#ffca72",
            "bg": "#f5a623",
            "color": "#FFFFFF",
            "border": "0px"
        },
        "danger": {
            "flatbg": "#ff92b8",
            "bg": "#f21361",
            "color": "#FFFFFF",
            "border": "0px"
        },
        "info": {
            "flatbg": "#f4f9ff",
            "bg": "#a7c5eb",
            "color": "#FFFFFF",
            "border": "0px"
        },
        "gradient": {
            "flatbg": "white",
            "bg": "linear-gradient(112deg, #AAFFEC -63.59%, #ff4ecd -20.3%, #0070F3 70.46%)",
            "color": "#FFFFFF",
            "border": "0px"
        },
        "sky": {
            "flatbg": "#7f9cf5",
            "bg": "#96BAFF",
            "color": "#FFFFFF",
            "border": "0px"
        },
        "skin": {
            "flatbg": "#7f9cf5",
            "bg": "#F2C0FF",
            "color": "#FFFFFF",
            "border": "0px"
        },
        "earth": {
            "flatbg": "#7f9cf5",
            "bg": "#A6F0C6",
            "color": "#FFFFFF",
            "border": "0px"
        },
        "spring": {
            "flatbg": "#7f9cf5",
            "bg": "#8FD9A8",
            "color": "#FFFFFF",
            "border": "0px"
        },
        "warm": {
            "flatbg": "#7f9cf5",
            "bg": "#F8F8F8",
            "color": "#000000",
            "border": "0px"
        }
    },
    "collapse": {
        "primary": {
            "flatbg": "#bfd8fc",
            "bg": "#FFFFFF",
            "color": "#000000",
            "border": "0px"
        },
        "secondary": {
            "flatbg": "#dbc8f0",
            "bg": "#dbc8f0",
            "color": "#000000",
            "border": "0px"
        },
        "tertiary": {
            "flatbg": "#a2dddc",
            "bg": "#a2dddc",
            "color": "#000000",
            "border": "0px"
        },
        "cuaternary": {
            "flatbg": "#f9c0bd",
            "bg": "#f9c0bd",
            "color": "#000000",
            "border": "0px"
        },
        "success": {
            "flatbg": "#3ef3c5",
            "bg": "#3ef3c5",
            "color": "#000000",
            "border": "0px"
        },
        "warning": {
            "flatbg": "#ffca72",
            "bg": "#ffca72",
            "color": "#000000",
            "border": "0px"
        },
        "danger": {
            "flatbg": "#ff92b8",
            "bg": "#ff92b8",
            "color": "#000000",
            "border": "0px"
        },
        "info": {
            "flatbg": "#f4f9ff",
            "bg": "#f4f9ff",
            "color": "#000000",
            "border": "0px"
        },
        "gradient": {
            "flatbg": "white",
            "bg": "white",
            "color": "#000000",
            "border": "0px"
        },
        "sky": {
            "flatbg": "#7f9cf5",
            "bg": "#96BAFF",
            "color": "#000000",
            "border": "0px"
        },
        "skin": {
            "flatbg": "#7f9cf5",
            "bg": "#F2C0FF",
            "color": "#000000",
            "border": "0px"
        },
        "earth": {
            "flatbg": "#7f9cf5",
            "bg": "#A6F0C6",
            "color": "#000000",
            "border": "0px"
        },
        "spring": {
            "flatbg": "#7f9cf5",
            "bg": "#8FD9A8",
            "color": "#000000",
            "border": "0px"
        },
        "warm": {
            "flatbg": "#7f9cf5",
            "bg": "#F8F8F8",
            "color": "#000000",
            "border": "0px"
        }
    }
  }
  ```
