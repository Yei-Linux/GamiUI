import "regenerator-runtime/runtime";
import React, { useEffect, useState } from "react";
import {
  Balls,
  TextCounter,
  TrafficLightContainer,
  TrafficLightWrapper,
} from "./TrafficLight.styles";
import { TrafficLightColors } from "../../../core/utils/trafficlight.util";
import { IGeneralProps } from "../../../core/domain/interfaces/IGeneralProps";

export interface TrafficLightProps extends IGeneralProps {}

const TrafficLight = ({ ...args }: TrafficLightProps) => {
  const [counter, setCounter] = useState(10);
  const [isBrightRed, setIsBrightRed] = useState(true);
  const [isBrightOrange, setIsBrightOrange] = useState(false);
  const [isBrightGreen, setIsBrightGreen] = useState(false);

  const timeout = (t: number): Promise<any> => {
    return new Promise((resolve, _reject) => {
      setTimeout(resolve, t);
    });
  };

  const startingCountdownLight = async (): Promise<void> => {
    await timeout(3000);
    setIsBrightRed(false);
    setIsBrightOrange(true);
    await timeout(3000);
    setIsBrightOrange(false);
    setIsBrightGreen(true);
    await timeout(4000);
    setIsBrightGreen(false);
  };

  const startingCountdownTimer = async (): Promise<void> => {
    for (let item of [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]) {
      await timeout(1000);
      setCounter(item);
    }
  };

  useEffect(() => {
    startingCountdownLight();
    startingCountdownTimer();
  }, []);

  return (
    <TrafficLightWrapper {...args}>
      <TrafficLightContainer>
        <Balls
          color={TrafficLightColors.red[isBrightRed ? "brightColor" : "color"]}
          bright={isBrightRed ? TrafficLightColors.red["shadow"] : "none"}
        />
        <Balls
          color={
            TrafficLightColors.orange[isBrightOrange ? "brightColor" : "color"]
          }
          bright={isBrightOrange ? TrafficLightColors.orange["shadow"] : "none"}
        />
        <Balls
          color={
            TrafficLightColors.green[isBrightGreen ? "brightColor" : "color"]
          }
          bright={isBrightGreen ? TrafficLightColors.green["shadow"] : "none"}
        />
      </TrafficLightContainer>

      <TextCounter>
        <p>{counter}</p>
      </TextCounter>
    </TrafficLightWrapper>
  );
};

TrafficLight.defaultProps = {
  shadow: "MEDIUM",
};

export default TrafficLight;
