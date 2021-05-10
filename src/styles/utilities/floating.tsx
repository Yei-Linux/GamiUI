import { css } from "@emotion/react";

export const floatingRight = (props: any) => css`
  top: 30%;
  right: ${props.position};
`;

export const floatingLeft = (props: any) => css`
  top: 30%;
  left: ${props.position};
`;

export const floatingTop = (props: any) => css`
  left: 30%;
  top: ${props.position};
`;

export const floatingBottom = (props: any) => css`
  left: 30%;
  bottom: ${props.position};
`;
