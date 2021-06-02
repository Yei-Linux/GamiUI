import React, { Fragment, useContext } from 'react'
import context from '../../../context/CanvasProvider/context'
import useGameLoop from '../../../hooks/useGameLoop'
import useCharacter from '../Character'
import useGrid from '../Grid'
import useMap from '../Map'

const WorldContent = () => {
  const { canvasValue, width, height } = useContext(context)
  const { drawXandYAxis } = useGrid()
  const { drawLayers } = useMap()
  const { drawCharacterPixel } = useCharacter()

  const drawWorld = () => {
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
  const { canvasValue } = useContext(context)

  return <Fragment>{canvasValue && <WorldContent />}</Fragment>
}

World.defaultProps = {}

export default World
