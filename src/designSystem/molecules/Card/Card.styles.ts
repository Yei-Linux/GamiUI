import styled from "@emotion/styled";
import { colorLight } from "../../../styles/theme";
import { twinStyles } from "../../../styles/utilities/twinStyles";

export const CardWrapper = styled.div<{
  border?: string;
  shadow?: string;
  width?: string;
  heigth?: string;
}>`
  width: auto;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-width: 300px;
  min-height: 150px;

  ${(props: any) => twinStyles(props)};
`;

export const CardCover = styled.div<{}>`
  width: 100%;
  margin: 0px;
  border-radius: 0;
  display: flex;
  justify-content: center;
`;

export const CardContent = styled.div`
  padding: 1rem;
`;

export const CardFooter = styled.div`
  padding: 1rem;
  width: 100%;
  margin: 0px;
  border: 1px solid ${colorLight.neutral.seven};
`;
