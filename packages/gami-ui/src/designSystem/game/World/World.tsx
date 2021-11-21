import useGameStore from 'hooks/store/useGameStore'
import React, { Fragment } from 'react'
import useGameLoop from '../../../hooks/useGameLoop'
import useCharacter from '../Character'
import useGrid from '../Grid'
import useMap from '../Map'

const WorldContent = () => {
  const { canvasValue, width, height } = useGameStore()
  const { drawXandYAxis } = useGrid()
  const { drawLayers } = useMap()
  const { drawCharacterPixel } = useCharacter()

  const drawWorld = (): void => {
    canvasValue.clearRect(0, 0, width, height)
    drawLayers()
    drawXandYAxis()
    drawCharacterPixel()
  }

  useGameLoop({
    action: drawWorld,
    dependenciesEffect: [canvasValue],
  })

  return <Fragment />
}

const World = () => {
  const { canvasValue } = useGameStore()

  return <Fragment>{canvasValue && <WorldContent />}</Fragment>
}

export default World
