import { css } from "@emotion/react";

export const messageDirectionLeft = (props: any, type: "before" | "after") => css`
  border-top: ${type == "before" ? '17px' : '15px'} solid ${props.background};
  top: ${type == "before" ? '-1px' : '0'};
  left: ${type == "before" ? '-17px' : '-15px'};
`;

export const messageDirectionRight = (props: any, type: "before" | "after") => css`
  border-bottom: ${type == "before" ? '17px' : '15px'} solid ${props.background};
  bottom: ${type == "before" ? '-1px' : '0'};
  right: ${type == "before" ? '-17px' : '-15px'};
`;
