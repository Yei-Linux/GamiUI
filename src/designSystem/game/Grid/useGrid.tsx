import React, { useContext } from 'react'
import context from '../../../context/CanvasProvider/context'
import { MAP_DIMENSIONS, TILE_SIZE } from '../../../core/utils/constants'

export interface IGrid {
  width: number
  height: number
  children?: React.ReactNode
}

const width = MAP_DIMENSIONS.COLS * TILE_SIZE
const height = MAP_DIMENSIONS.ROWS * TILE_SIZE

const useGrid = () => {
  const { canvasValue } = useContext(context)

  const drawOnCanvasForYandXAxis = (maxValue: number, axis = 'y') => {
    for (let i = 0; i < maxValue; i++) {
      const size = i * TILE_SIZE
      canvasValue.beginPath()
      canvasValue.moveTo(axis == 'y' ? 0 : size, axis != 'y' ? 0 : size)
      canvasValue.lineTo(
        axis == 'y' ? width : size,
        axis != 'y' ? height : size
      )
      canvasValue.stroke()
    }
  }

  const drawXandYAxis = () => {
    drawOnCanvasForYandXAxis(height, 'y')
    drawOnCanvasForYandXAxis(width, 'x')
  }

  return { drawXandYAxis }
}

export default useGrid
