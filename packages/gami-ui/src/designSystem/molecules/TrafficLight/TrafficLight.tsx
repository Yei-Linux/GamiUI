import 'regenerator-runtime/runtime'

import React, { useEffect, useState } from 'react'
import * as S from './TrafficLight.styles'

import { IGeneralProps } from 'core/domain/interfaces/IGeneralProps'
import { timeout } from 'core/helpers/utilities.helper'
import { TrafficLightColors } from './constants'

export type TrafficLightProps = IGeneralProps

const TrafficLight = ({ ...args }: TrafficLightProps) => {
  const [counter, setCounter] = useState(10)
  const [isBrightRed, setIsBrightRed] = useState(true)
  const [isBrightOrange, setIsBrightOrange] = useState(false)
  const [isBrightGreen, setIsBrightGreen] = useState(false)

  const startingCountdownLight = async (): Promise<void> => {
    await timeout(3000)
    setIsBrightRed(false)
    setIsBrightOrange(true)
    await timeout(3000)
    setIsBrightOrange(false)
    setIsBrightGreen(true)
    await timeout(4000)
    setIsBrightGreen(false)
  }

  const startingCountdownTimer = async (): Promise<void> => {
    for (const item of [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]) {
      await timeout(1000)
      setCounter(item)
    }
  }

  useEffect(() => {
    startingCountdownLight()
    startingCountdownTimer()
  }, [])

  return (
    <S.TrafficLight {...args}>
      <S.TrafficLightContainer>
        <S.Balls
          $color={TrafficLightColors.red[isBrightRed ? 'brightColor' : 'color']}
          $bright={isBrightRed ? TrafficLightColors.red['shadow'] : 'none'}
        />
        <S.Balls
          $color={
            TrafficLightColors.orange[isBrightOrange ? 'brightColor' : 'color']
          }
          $bright={
            isBrightOrange ? TrafficLightColors.orange['shadow'] : 'none'
          }
        />
        <S.Balls
          $color={
            TrafficLightColors.green[isBrightGreen ? 'brightColor' : 'color']
          }
          $bright={isBrightGreen ? TrafficLightColors.green['shadow'] : 'none'}
        />
      </S.TrafficLightContainer>

      <S.TextCounter>
        <p>{counter}</p>
      </S.TextCounter>
    </S.TrafficLight>
  )
}

export default TrafficLight
