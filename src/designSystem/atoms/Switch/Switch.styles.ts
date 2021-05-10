import styled from "@emotion/styled";
import { colorLight } from "../../../styles/theme";
import { twinStyles } from "../../../styles/utilities/twinStyles";

export const SwitchWrapper = styled.button<{
  isChecked?: boolean;
  border?: string;
  shadow?: string;
  width?: string;
  heigth?: string;
  textAlign?: string;
  fontWeight?: string;
}>`
  position: relative;

  margin: 0;
  padding: 0px 3px;
  min-width: 44px;
  height: 22px;
  border: 0;
  cursor: pointer;
  transition: all 0.2s;
  user-select: none;

  background: ${(props: any) =>
    props.isChecked ? colorLight.primary.one : colorLight.neutral.four};

  ${(props: any) => twinStyles(props)};
`;

export const SwitchBall = styled.div<{ isChecked?: boolean }>`
  position: absolute;
  top: 8%;
  left: ${(props: any) => (props.isChecked ? "calc(100% - 20px)" : "5%")};

  width: 18px;
  height: 18px;
  border-radius: 15px;
  transition: all 0.2s ease-in-out;
  background: white;
`;
