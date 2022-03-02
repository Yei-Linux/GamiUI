export const DefaultTheme = `
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
`
export const DefaultTokens = `
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
`

export const DefaultComponentsTheme = `
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
`

export const ExampleDefaultTheme = `
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
`

export const ExampleDefaultTokens = `
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
`

export const ExampleDefaultComponentsTheme = `
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
`