import styled from "@emotion/styled";
import {
  floatingBottom,
  floatingLeft,
  floatingRight,
  floatingTop,
} from "../../../styles/utilities/floating";
import { twinStyles } from "../../../styles/utilities/twinStyles";

export const FloatingWrapper = styled.div<{
  direction: "left" | "top" | "right" | "bottom";
  position: string;
  border?: string;
  shadow?: string;
  width?: string;
  heigth?: string;
}>`
  width: fit-content;
  padding: 1rem;

  position: absolute;
  transition: all 1.5s;

  ${(props: any) => twinStyles(props)};

  ${(props) => props.direction == "right" && floatingRight(props)}
  ${(props) => props.direction == "left" && floatingLeft(props)}
  ${(props) => props.direction == "top" && floatingTop(props)}
  ${(props) => props.direction == "bottom" && floatingBottom(props)}
`;

export const FloatingHeader = styled.div`
  display: flex;
`;
