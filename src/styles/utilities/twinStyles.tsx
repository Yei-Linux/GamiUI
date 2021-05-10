import { css } from "@emotion/react";
import {
  generateShadowProps,
  generateBorderTypeProps,
  generateWidthTypeProps,
  generateHeightTypeProps,
  generateTextAlignProps,
  generateFontWeightProps,
} from "../../core/utils/twin.util";

export const twinStyles = (props: any) => css`
  ${generateShadowProps(props.shadow)};
  ${generateBorderTypeProps(props.border)};
  ${generateWidthTypeProps(props.width)};
  ${generateHeightTypeProps(props.heigth)};
  ${generateTextAlignProps(props.textAlign)};
  ${generateFontWeightProps(props.fontWeight)};
`;
