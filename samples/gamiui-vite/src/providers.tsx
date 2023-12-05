import React from "react";
import { ThemeGamification } from "@gamiui/standard";

interface IProviders {
  children: React.ReactNode;
}
export const Providers = ({ children }: IProviders) => {
  return <ThemeGamification>{children}</ThemeGamification>;
};
