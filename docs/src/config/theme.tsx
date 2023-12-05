import { PrismTheme } from "prism-react-renderer";

export const customTheme: PrismTheme = {
  plain: {
    color: "#9EFEFF",
    backgroundColor: "#2D2A55",
  },
  styles: [
    {
      types: ["changed"],
      style: {
        color: "rgb(255, 238, 128)",
        fontWeight: "bold",
      },
    },
    {
      types: ["deleted"],
      style: {
        color: "rgba(239, 83, 80, 0.56)",
        fontWeight: "bold",
      },
    },
    {
      types: ["inserted"],
      style: {
        color: "rgb(173, 219, 103)",
      },
    },
    {
      types: ["comment"],
      style: {
        color: "rgb(179, 98, 255)",
        fontStyle: "italic",
      },
    },
    {
      types: ["punctuation"],
      style: {
        color: "rgb(255, 255, 255)",
        fontWeight: "bold",
      },
    },
    {
      types: ["constant"],
      style: {
        color: "rgb(255, 98, 140)",
        fontWeight: "bold",
      },
    },
    {
      types: ["string", "url"],
      style: {
        color: "rgb(165, 255, 144)",
        fontWeight: "bold",
      },
    },
    {
      types: ["variable"],
      style: {
        color: "rgb(255, 238, 128)",
        fontWeight: "bold",
      },
    },
    {
      types: ["number", "boolean"],
      style: {
        color: "rgb(255, 98, 140)",
        fontWeight: "bold",
      },
    },
    {
      types: ["attr-name"],
      style: {
        color: "rgb(255, 180, 84)",
        fontWeight: "bold",
      },
    },
    {
      types: [
        "keyword",
        "operator",
        "property",
        "namespace",
        "tag",
        "selector",
        "doctype",
      ],
      style: {
        color: "rgb(255, 157, 0)",
        fontWeight: "bold",
      },
    },
    {
      types: ["builtin", "char", "constant", "function", "class-name"],
      style: {
        color: "rgb(250, 208, 0)",
        fontWeight: "bold",
      },
    },
  ],
};
