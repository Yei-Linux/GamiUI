import styled from "@emotion/styled";
import { twinStyles } from "../../../styles/utilities/twinStyles";

export const IconWrapper = styled.i<{
  border?: string;
  shadow?: string;
}>`
  border: none;
  outline: none;
  cursor: pointer;
  appearance: none;
  display: flex;
  justify-content: center;
  align-items: center;

  ${(props: any) => twinStyles(props)};
`;
