import React from "react";
import { Global, css } from "@emotion/core";
import { normalize } from "polished";

const GlobalStyles: React.FC = () => {
  return (
    <Global
      styles={() => css`
        ${normalize()}

        @font-face {
          font-family: "segment7";
          src: url("https://lichess1.org/assets/_1FzRvx/font/Segment7.woff2")
              format("woff"),
            url("https://lichess1.org/assets/_1FzRvx/font/Segment7.woff2")
              format("opentype"),
            url("https://lichess1.org/assets/_1FzRvx/font/Segment7.woff2")
              format("truetype");
        }

        @font-face {
          font-family: "Patrick Hand";
          src: url("fonts/primary/PatrickHand-Regular.eot"); /* IE9 Compat Modes */
          src: url("fonts/primary/PatrickHand-Regular.woff") format("woff"),
            url("fonts/primary/PatrickHand-Regular.ttf") format("truetype"),
            url("fonts/primary/PatrickHand-Regular.svg") format("svg");
        }

        @font-face {
          font-family: "Avotte";
          src: url("fonts/secondary/Avotte.eot"); /* IE9 Compat Modes */
          src: url("fonts/secondary/Avotte.woff") format("woff"),
            url("fonts/secondary/Avotte.ttf") format("truetype"),
            url("fonts/secondary/Avotte.svg") format("svg");
        }

        @font-face {
          font-family: "Rude1";
          src: url("fonts/terciary/Rude1.eot"); /* IE9 Compat Modes */
          src: url("fonts/terciary/Rude1.woff") format("woff"),
            url("fonts/terciary/Rude1.ttf") format("truetype"),
            url("fonts/terciary/Rude1.svg") format("svg");
        }

        * {
          font-family: "Patrick Hand", cursive;
          box-sizing: border-box;
          margin: 0px;
          padding: 0px;
        }
      `}
    />
  );
};

export default GlobalStyles;
