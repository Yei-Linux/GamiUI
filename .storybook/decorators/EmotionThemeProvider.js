import React from "react";
import ThemeGamification from "../../src/providers/ThemeGamification"

const EmotionThemeProvider = (storyFn) => (
  <ThemeGamification>
    {storyFn()}
  </ThemeGamification>
);

export default EmotionThemeProvider;
