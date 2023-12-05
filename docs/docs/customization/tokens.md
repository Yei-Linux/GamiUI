---
sidebar_position: 2
---

# Tokens

A token, in the context of GamiUI, is a predefined set of attributes that you can consistently apply across your application.

<div align="center">
<img src="https://clipart-library.com/2023/pink-color-smile-brain-weights-white-background-very-strong-cartoon-brain-concept_761284-79.jpg" alt="gamiBrain" width="200" style={{ borderRadius: "50%"}}/>
</div>

- **1. Tokens**:
  
  For using and getting tokens you can use useGamiTheme hook:
  <br/>
  ```jsx
  const { tokens } = useGamiTheme();

  return (
    <Row gap="10px">
      <Button          
        style={{
          padding: tokens.spacing.padding.sm,
          fontSize: theme.font.size.sm,
        }} 
        type="button" 
        width="fit">
        GamiButton
      </Button>
    </Row>
  )
  ```

- **2. Custom Tokens**:
  
  For using and customize our tokens you can do this:
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

- **3. Default Tokens**:
  
  Take a look our default values:
  <br/>
  ```json
  {
      "rounded": {
          "none": "0",
          "xs": "4px",
          "sm": "10px",
          "md": "15px",
          "lg": "30px",
          "full": "9999px"
      },
      "boxShadow": {
          "none": "none",
          "xs": "0px 3px 6px rgba(0, 0, 0, 0.10)",
          "sm": "0px 3px 6px rgba(0, 0, 0, 0.13)",
          "md": "0px 3px 6px rgba(0, 0, 0, 0.15)",
          "lg": "0px 3px 6px rgba(0, 0, 0, 0.17)",
          "full": "0px 3px 6px rgba(0, 0, 0, 0.20)",
          "flat": "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
          "primary": "#7f9cf5 0px 3px 6px, #7f9cf5 0px 3px 6px",
          "secondary": "#9879e9 0px 3px 6px, #9879e9 0px 3px 6px",
          "tertiary": "#54BAB9 0px 3px 6px, #54BAB9 0px 3px 6px",
          "cuaternary": "#FF8882 0px 3px 6px, #FF8882 0px 3px 6px",
          "success": "#16c79a 0px 3px 6px, #16c79a 0px 3px 6px",
          "warning": "#f5a623 0px 3px 6px, #f5a623 0px 3px 6px",
          "danger": "#f21361 0px 3px 6px, #f21361 0px 3px 6px",
          "info": "#a7c5eb 0px 3px 6px, #a7c5eb 0px 3px 6px",
          "gradient": "linear-gradient(112deg, #AAFFEC -63.59%, #ff4ecd -20.3%, #0070F3 70.46%)"
      },
      "breakspointSizes": {
          "xs": 0,
          "sm": 600,
          "md": 960,
          "lg": 1280
      },
      "font": {
          "family": {
              "mali": "'Mali', cursive",
              "sanspro": "'Source Sans Pro', sans-serif",
              "sans": "'Quicksand', sans-serif"
          },
          "weight": {
              "light": 300,
              "normal": 400,
              "medium": 500,
              "semibold": 600,
              "bold": 700,
              "extrabold": 800,
              "black": 900
          },
          "size": {
              "base": "1rem",
              "xs": "1.2rem",
              "sm": "1.4rem",
              "md": "1.6rem",
              "lg": "1.8rem",
              "xl": "2.2rem"
          },
          "textAlign": {
              "left": "left",
              "center": "center",
              "right": "right",
              "justify": "justify"
          }
      },
      "opacity": {
          "0": 0,
          "25": 0.25,
          "50": 0.5,
          "75": 0.75,
          "100": 1
      },
      "sizes": {
          "width": {
              "fit": "fit-content",
              "auto": "auto",
              "xs": "1rem",
              "sm": "3rem",
              "md": "5rem",
              "lg": "15rem",
              "full": "100%"
          },
          "height": {
              "fit": "fit-content",
              "auto": "auto",
              "xs": "0.5rem",
              "sm": "1rem",
              "md": "1.5rem",
              "lg": "2rem",
              "full": "100%"
          },
          "components": {
              "avatar": {
                  "fit": "fit-content",
                  "auto": "auto",
                  "xs": "20px",
                  "sm": "30px",
                  "md": "40px",
                  "lg": "60px",
                  "full": "100%"
              },
              "button": {
                  "fit": "fit-content",
                  "auto": "auto",
                  "xs": {
                      "height": "1.5rem",
                      "width": "5rem"
                  },
                  "sm": {
                      "height": "2rem",
                      "width": "7rem"
                  },
                  "md": {
                      "height": "2.5rem",
                      "width": "9rem"
                  },
                  "lg": {
                      "height": "3rem",
                      "width": "11rem"
                  },
                  "full": "100%"
              },
              "text": {
                  "fit": "fit-content",
                  "auto": "auto",
                  "xs": {
                      "height": "1.5rem",
                      "width": "5rem"
                  },
                  "sm": {
                      "height": "2rem",
                      "width": "7rem"
                  },
                  "md": {
                      "height": "2.5rem",
                      "width": "9rem"
                  },
                  "lg": {
                      "height": "3rem",
                      "width": "11rem"
                  },
                  "full": "100%"
              }
          }
      },
      "spacing": {
          "padding": {
              "none": "0px",
              "xs": ".25rem",
              "sm": ".5rem",
              "md": "1rem",
              "lg": "2rem",
              "xl": "4rem"
          },
          "margin": {
              "none": "0px",
              "xs": ".25rem",
              "sm": ".5rem",
              "md": "1rem",
              "lg": "2rem",
              "xl": "4rem"
          },
          "border": {
              "none": "0px",
              "xs": ".1rem",
              "sm": ".5rem",
              "md": "1rem",
              "lg": "2rem",
              "xl": "4rem"
          }
      },
      "zIndex": {
          "0": 0,
          "1": 1,
          "2": 2,
          "3": 3,
          "4": 4,
          "5": 5
      }
  }
  ```
