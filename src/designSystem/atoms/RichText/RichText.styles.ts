import styled from "@emotion/styled";
import { twinStyles } from "../../../styles/utilities/twinStyles";

export const RichTextWrapper = styled.div<{
  shadow?: string;
  width?: string;
  heigth?: string;
  textAlign?: string;
  fontWeight?: string;
}>`
  ${(props: any) => twinStyles(props)};
`;
