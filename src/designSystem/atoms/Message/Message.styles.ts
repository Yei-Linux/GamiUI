import styled from "@emotion/styled";
import {
  messageDirectionLeft,
  messageDirectionRight,
} from "../../../styles/utilities/message";
import { twinStyles } from "../../../styles/utilities/twinStyles";

export const MessageWrapper = styled.div<{
  direction: string;
  background: string;
  shadow?: string;
  width?: string;
  heigth?: string;
  textAlign?: string;
  fontWeight?: string;
}>`
  position: relative;
  padding: 10px;
  text-align: left;
  border-radius: 10px;
  color: white;
  max-width: 200px;
  min-height: 50px;
  background-color: ${(props) => props.background};
  border: 1px solid ${(props) => props.background};

  ${(props: any) => twinStyles(props)};

  &::after,
  &::before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;

    border-left: 16px solid transparent;
    border-right: 16px solid transparent;
  }

  &::before {
    ${(props) =>
      props.direction == "left" && messageDirectionLeft(props, "before")}

    ${(props) =>
      props.direction == "right" && messageDirectionRight(props, "before")}
  }

  &::after {
    ${(props) =>
      props.direction == "left" && messageDirectionLeft(props, "after")}

    ${(props) =>
      props.direction == "right" && messageDirectionRight(props, "after")}
  }
`;
