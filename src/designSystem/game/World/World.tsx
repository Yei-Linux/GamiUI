import React, { Fragment, useContext } from 'react'
import CanvasProvider from '../../../context/CanvasProvider'
import context from '../../../context/CanvasProvider/context'
import { MAP_DIMENSIONS, TILE_SIZE } from '../../../core/utils/constants'
import useGameLoop from '../../../hooks/useGameLoop'
import useCharacter from '../Character'
import useGrid from '../Grid'
import useMap from '../Map'

const width = MAP_DIMENSIONS.COLS * TILE_SIZE
const height = MAP_DIMENSIONS.ROWS * TILE_SIZE

const WorldInstante = () => {
  const { canvasValue } = useContext(context)
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

const WorldContent = () => {
  const { canvasValue } = useContext(context)

  return <Fragment>{canvasValue && <WorldInstante />}</Fragment>
}

const World = () => {
  return (
    <CanvasProvider>
      <WorldContent />
    </CanvasProvider>
  )
}

World.defaultProps = {}

export default World
