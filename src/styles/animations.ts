import { keyframes } from "@emotion/react";

export const fadeCenterIn = keyframes`
  from {
    transform: scale(.25);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
`;

export const fadeCenterOut = keyframes`
  from {
    transform: scale(1);
    opacity: 1;
  }

  to {
    transform: scale(.25);
    opacity: 0;
  }
`;

export const fadeTopIn = keyframes`
  0% {
    -webkit-transform: translateY(-1px);
    transform: translateY(-100px);
    z-index: -1;
  }
  100% {
    -webkit-transform: translateY(0px);
    transform: translateY(0px);
    z-index: 1;
  }
`;

export const fadeTopOut = keyframes`
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    -webkit-transform: translateY(-250px);
    transform: translateY(-250px);
  } 
`;