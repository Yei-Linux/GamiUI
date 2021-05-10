import styled from "@emotion/styled";
import tw from "twin.macro";
import { twinStyles } from "../../../styles/utilities/twinStyles";

export const TrafficLightWrapper = styled.div<{
  border?: string;
  shadow?: string;
  width?: string;
  heigth?: string;
}>`
  ${tw`flex flex-col justify-center items-center w-fit rounded-md`}
  padding: 10px 0px;
  background-color: #3a3a3a;

  ${(props: any) => twinStyles(props)};
`;

export const TrafficLightContainer = tw.div`flex flex-col justify-center items-center w-full h-full`;

export const Balls = styled.div<{ color: string; bright: string }>`
  border-radius: 4em;
  height: 40px;
  width: 40px;
  margin: 5px 30px;

  box-shadow: ${(props) => props.bright};
  background-color: ${(props) => props.color};
`;

export const TextCounter = styled.div`
  ${tw`flex justify-center items-center w-full rounded-md font-bold`}
  min-height: 50px;
  margin: 15px 0px;
  color: #bababa;
  font-size: 3em;
  transition: color 0.3s;
`;
