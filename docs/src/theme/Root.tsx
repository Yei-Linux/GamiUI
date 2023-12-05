import {
  ThemeGamification,
  defaultTheme,
  defaultTokens,
  generatorComponentsTheme,
} from "@gamiui/standard";
import { FC, PropsWithChildren } from "react";

const Root: FC<PropsWithChildren> = ({ children }) => {
  const defaultMyTokes = {
    ...defaultTokens,
    boxShadow: {
      ...defaultTokens.boxShadow,
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
    <ThemeGamification themeUI={customtheme}>{children}</ThemeGamification>
  );
};

export default Root;
