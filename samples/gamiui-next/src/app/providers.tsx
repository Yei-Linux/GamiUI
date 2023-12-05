"use client";
import React from "react";
import { ThemeGamification } from "@gamiui/standard";

interface IProviders {
  children: any;
}
export const Providers = ({ children }: IProviders) => {
  return <ThemeGamification>{children}</ThemeGamification>;
};
