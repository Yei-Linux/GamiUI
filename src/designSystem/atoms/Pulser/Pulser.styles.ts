import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { colorLight } from "../../../styles/theme";
import {
  PulseOneAnimation,
  PulseTwoAnimation,
} from "../../../styles/utilities/transitions";
import { twinStyles } from "../../../styles/utilities/twinStyles";

const PulseCommon = css`
  width: 130px;
  height: 130px;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border-radius: 999px;
`;

export const Pulse = styled.div`
  width: fit-content;
`;

export const PulseWrapper = styled.div<{}>`
  position: relative;
  width: fit-content;
`;

export const PulseContainer = styled.div<{
  isBloqued: boolean;
  shadow?: string;
  borderColor: string;
}>`
  filter: ${(props: any) => (props.isBloqued ? `opacity(0.5);` : `none`)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 3;
  overflow: hidden;

  ${PulseCommon}
  border: 5px solid ${(props) => props.borderColor};
  ${(props: any) => twinStyles(props)};
`;

export const PulseTransitions = styled.div<{ type: string }>`
  position: absolute;
  opacity: 0;
  box-sizing: border-box;

  ${PulseCommon}
  ${(props) => (props.type == "one" ? PulseOneAnimation : PulseTwoAnimation)}
`;

export const PulseLock = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PulseProgress = styled.div`
  border-radius: 2em;
  background-color: ${colorLight.primary.one};
  color: ${colorLight.neutral.seven};
  font-weight: bold;
  text-align: center;
  width: fit-content;
  padding: 5px 1rem;
  margin: 10px auto;
`;
