import React from "react";
import { ThemeProvider } from "@emotion/react";
import GlobalStyles from "../../styles/GlobalStyles";

export interface ThemeGamificationProps {
  children: any;
}

const ThemeGamification = ({ children }: ThemeGamificationProps) => {
  return (
    <ThemeProvider theme={{}}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default ThemeGamification;
