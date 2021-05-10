import styled from "@emotion/styled";
import tw from "twin.macro";
import { twinStyles } from "../../../styles/utilities/twinStyles";

export const GuideMessageWrapper = styled.div<{
  border?: string;
  shadow?: string;
  width?: string;
  heigth?: string;
  direction: "left" | "right";
}>`
  ${tw`flex justify-center items-center`}

  ${(props: any) => twinStyles(props)};
  flex-direction: ${(props) =>
    props.direction == "left" ? "row" : "row-reverse"};
`;
