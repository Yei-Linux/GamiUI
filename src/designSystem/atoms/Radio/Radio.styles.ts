import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { twinStyles } from "../../../styles/utilities/twinStyles";

export const RadioGroupWrapper = styled.div<{
  border?: string;
  shadow?: string;
  width?: string;
  heigth?: string;
  textAlign?: string;
  fontWeight?: string;
}>`
  margin: 0;
  padding: 0;
  font-size: 14px;

  ${(props: any) => twinStyles(props)};
`;

export const RadioContainer = styled.label`
  padding: 0;
  position: relative;
  display: inline-flex;
  margin: 0 8px 0 0;
  cursor: pointer;
`;

export const RadioCheck = styled.span`
  margin: 0;
  padding: 0;
  position: relative;
  display: inline-block;
  outline: none;
  cursor: pointer;
`;

export const RadioInput = styled.input`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  cursor: pointer;
  opacity: 0;
`;

export const RadioInner = styled.span<{ isChecked: boolean }>`
  position: relative;
  top: 0;
  left: 0;
  display: block;
  width: 16px;
  height: 16px;
  background-color: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 50%;
  transition: all 0.3s;

  ${(props) =>
    props.isChecked &&
    css`
      border-color: #1890ff;
    `}

  &::after {
    position: absolute;
    top: 3px;
    left: 3px;
    display: table;
    width: 8px;
    height: 8px;
    background-color: #1890ff;
    border-top: 0;
    border-left: 0;
    border-radius: 8px;
    transform: scale(0);
    opacity: 0;
    transition: all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
    content: " ";

    ${(props) =>
      props.isChecked &&
      css`
        transform: scale(1);
        opacity: 1;
      `}
  }
`;

export const RadioText = styled.span`
  margin: 0 10px;
`;
