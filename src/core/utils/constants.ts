export const options = {
  width: ["NONE", "SMALL", "NORMAL", "MEDIUM", "LARGE", "FULL"] as const,
  height: ["SMALL", "NORMAL", "MEDIUM", "LARGE"] as const,
  border: ["NONE", "SMALL", "MEDIUM", "ROUNDED", "FULL"] as const,
  shadow: ["NONE", "SMALL", "MEDIUM", "LARGE", "XLARGE"] as const,
  textAlign: ["LEFT", "CENTER", "RIGHT", "JUSTIFY"] as const,
  fontWeight: [
    "EXTRALIGHT",
    "LIGHT",
    "NORMAL",
    "MEDIUM",
    "SEMIBOLD",
    "BOLD",
  ] as const,
};
