import styled from "@emotion/styled";
import { twinStyles } from "../../../styles/utilities/twinStyles";

export const AnimatorGuideImg = styled.div<{
  imageProps: any;
  border?: string;
  shadow?: string;
}>`
  width: ${(props) => props.imageProps.dimensions.width};
  height: ${(props) => props.imageProps.dimensions.height};
  background: ${(props) =>
    `url(${props.imageProps.source}) ${props.imageProps.position.x} ${props.imageProps.position.y}`};

  ${(props: any) => twinStyles(props)};
`;
