const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  ...defaultTheme,
  theme: {
    flex: {
      ...defaultTheme.flex,
    },
    extend: {
      fontWeight: {
        extralight: "200",
      },
      borderRadius: {
        circle: "7em",
      },
      width: {
        small: "8rem",
        normal: "auto",
        fit: "fit-content",
      },
      height: {
        small: "3rem",
        normal: "auto",
      },
    },
  },
};
