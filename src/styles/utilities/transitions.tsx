import { css, keyframes } from "@emotion/react";

const SlideBottom = keyframes`
  0% {
    transform: translateY(-50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
`;

const SlideTop = keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-70px);
    opacity: 0;
  }
`;

const PulseOne = keyframes`
    0% {
        -webkit-transform: scale(.6);
        opacity: 0;
    }

    50% {
        -webkit-transform: scale(.6);
        opacity: 0;
    }

    60% {
        -webkit-transform: scale(.9);
        opacity: .2;
    }

    70% {
        -webkit-transform: scale(1.1);
        opacity: .35;
    }

    80% {
        -webkit-transform: scale(1.25);
        opacity: .2;
    }

    100% {
        -webkit-transform: scale(1.4);
        opacity: 0;
    }
`;

const PulseTwo = keyframes`
    0% {
        -webkit-transform: scale(.6);
        opacity: 0;
    }

    40% {
        -webkit-transform: scale(.8);
        opacity: .05;
    }

    50% {
        -webkit-transform: scale(1);
        opacity: .1;
    }

    60% {
        -webkit-transform: scale(1.1);
        opacity: .3;
    }

    80% {
        -webkit-transform: scale(1.2);
        opacity: .1;
    }

    100% {
        -webkit-transform: scale(1.3);
        opacity: 0;
    }
`;

export const SlideTopAnimation = css`
  animation: ${SlideBottom} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;

export const SlideBottomAnimation = css`
  z-index: -1;
  animation: ${SlideTop} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;

export const PulseOneAnimation = css`
  animation: ${PulseOne} 4s linear infinite;
  border: 3px solid rgba(255, 255, 255, 0.1);
  z-index: 1;
  box-shadow: inset 0px 0px 15px 10px rgba(0, 0, 0, 0.6);
`
export const PulseTwoAnimation = css`
  animation: ${PulseTwo} 4s linear infinite;
  border: 1px solid rgba(255, 255, 255, 0);
  z-index: 2;
  box-shadow: inset 0px 0px 12px 5px rgba(255, 255, 255, 0.8);
`