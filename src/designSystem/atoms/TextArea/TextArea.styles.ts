import styled from "@emotion/styled";
import {
  inputBasicStyle,
  inputGeneralStyle,
} from "../../../styles/utilities/input";
import { twinStyles } from "../../../styles/utilities/twinStyles";

export const TextAreaWrapper = styled.textarea<{
  border?: string;
  shadow?: string;
  width?: string;
  heigth?: string;
  textAlign?: string;
  fontWeight?: string;
}>`
  margin: 0px;
  height: 69px;
  min-height: 75px;
  max-height: 225px;
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  padding-top: 1rem;

  ${inputBasicStyle()};
  ${inputGeneralStyle()};
  ${(props: any) => twinStyles(props)};
`;
