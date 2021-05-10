export const colorDark = {
  primary: {
    one: "#7f9cf5",
    two: "#ffffff",
    oneLight: "rgb(24 144 255 / 20%)",
  },
  secondary: {
    one: "#ffc75f",
    two: "#94ebcd",
    three: "#374a54",
  },
  neutral: {
    one: "#000000",
    two: "#454545",
    three: "#686868",
    four: "#A4A4A4",
    five: "#D9D9D9",
    six: "#EAEAEA",
    seven: "#F2F2F2",
    eight: "#F8F8F8",
    nine: "#FFFFFF",
  },
  semantic: {
    success: "#16c79a",
    warning: "#ffd66b",
    danger: "#ff4646",
    info: "#a7c5eb",
  },
  extended: {
    code: "#374a54",
    codeStrong: "#0e141e",
    sea: "#8ac4d0",
    seaStrong: "#0278ae",
    ocean: "#b8b5ff",
    oceanStrong: "#7868e6",
    gray: "#E5E5E5",
  },
  button: {
    primary: {
      bg: "#7f9cf5",
      color: "white",
      border: "none",
    },
    secondary: {
      bg: "#ffffff",
      color: "#7f9cf5",
      border: "2px solid #7f9cf5",
    },
    tertiary: {
      bg: "#374a54",
      color: "white",
      border: "none",
    },
    cuaternary: {
      bg: "#ffffff",
      color: "#374a54",
      border: "2px solid #374a54",
    },
    text: {
      bg: "transparent",
      color: "#454545",
      border: "none",
    },
    link: {
      bg: "transparent",
      color: "#454545",
      border: "none",
    },
    success: {
      bg: "#ffffff",
      color: "#16c79a",
      border: "2px solid #16c79a",
    },
    warning: {
      bg: "#ffffff",
      color: "#ffd66b",
      border: "2px solid #ffd66b",
    },
    danger: {
      bg: "#ffffff",
      color: "#ff4646",
      border: "2px solid #ff4646",
    },
    info: {
      bg: "#ffffff",
      color: "#a7c5eb",
      border: "2px solid #a7c5eb",
    },
  },
};

export const colorLight = {
  primary: {
    one: "#7f9cf5",
    two: "#ffffff",
    oneLight: "rgb(24 144 255 / 20%)",
  },
  secondary: {
    one: "#ffc75f",
    two: "#94ebcd",
    three: "#374a54",
  },
  neutral: {
    one: "#000000",
    two: "#454545",
    three: "#686868",
    four: "#A4A4A4",
    five: "#D9D9D9",
    six: "#EAEAEA",
    seven: "#F2F2F2",
    eight: "#F8F8F8",
    nine: "#FFFFFF",
  },
  semantic: {
    success: "#16c79a",
    warning: "#ffd66b",
    danger: "#ff4646",
    info: "#a7c5eb",
  },
  extended: {
    code: "#374a54",
    codeStrong: "#0e141e",
    sea: "#8ac4d0",
    seaStrong: "#0278ae",
    ocean: "#b8b5ff",
    oceanStrong: "#7868e6",
    gray: "#E5E5E5",
  },
  button: {
    primary: {
      bg: "#7f9cf5",
      color: "white",
      border: "none",
    },
    secondary: {
      bg: "#ffffff",
      color: "#7f9cf5",
      border: "2px solid #7f9cf5",
    },
    tertiary: {
      bg: "#374a54",
      color: "white",
      border: "none",
    },
    cuaternary: {
      bg: "#ffffff",
      color: "#374a54",
      border: "2px solid #374a54",
    },
    text: {
      bg: "transparent",
      color: "#454545",
      border: "none",
    },
    link: {
      bg: "transparent",
      color: "#454545",
      border: "none",
    },
    success: {
      bg: "#ffffff",
      color: "#16c79a",
      border: "2px solid #16c79a",
    },
    warning: {
      bg: "#ffffff",
      color: "#ffd66b",
      border: "2px solid #ffd66b",
    },
    danger: {
      bg: "#ffffff",
      color: "#ff4646",
      border: "2px solid #ff4646",
    },
    info: {
      bg: "#ffffff",
      color: "#a7c5eb",
      border: "2px solid #a7c5eb",
    },
  },
};

export const palette = {
  dark: {
    color: colorDark,
  },
  light: {
    color: colorLight,
  },
};

export const spacing = {
  padding: {
    small: 10,
    medium: 20,
    large: 30,
  },
  borderRadius: {
    small: 5,
    default: 10,
  },
};

export const typography = {
  type: {
    primary: "Patrick Hand, cursive",
    secondary: "Avotte",
    terciary: "Rude1",
  },
  weight: {
    regular: "400",
    bold: "700",
    extrabold: "800",
    black: "900",
  },
  size: {
    s1: 12,
    s2: 14,
    s3: 16,
    m1: 20,
    m2: 24,
    m3: 28,
    l1: 32,
    l2: 40,
    l3: 48,
    code: 90,
  },
} as const;
