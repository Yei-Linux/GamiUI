import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ButtonType } from "../../../core/domain/types";
import { colorLight } from "../../../styles/theme";
import { twinStyles } from "../../../styles/utilities/twinStyles";

const ButtonTypes = (typeStyle: ButtonType) => css`
  background: ${colorLight.button[typeStyle].bg};
  color: ${colorLight.button[typeStyle].color};
  border: ${colorLight.button[typeStyle].border};
`;

export const ButtonWrapper = styled.button<{
  typeStyle?: ButtonType;
  border?: string;
  shadow?: string;
  width?: string;
  heigth?: string;
  textAlign?: string;
  fontWeight?: string;
}>`
  border: none;
  outline: none;
  cursor: pointer;
  appearance: none;
  padding: 10px;

  ${(props: any) => twinStyles(props)};
  ${(props: any) => ButtonTypes(props.typeStyle)};
`;
