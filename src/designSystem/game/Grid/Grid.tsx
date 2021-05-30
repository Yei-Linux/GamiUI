import React, { Fragment, useContext, useEffect } from 'react'
import context from '../../../context/CanvasProvider/context'
import { TILE_SIZE } from '../../../core/utils/constants'

export interface IGrid {
  width: number
  height: number
  children?: React.ReactNode
}

const Grid = ({ width, height, children }: IGrid) => {
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

  useEffect(() => {
    drawOnCanvasForYandXAxis(height, 'y')
    drawOnCanvasForYandXAxis(width, 'x')
  }, [])

  return <Fragment>{children}</Fragment>
}

Grid.defaultProps = {}

export default Grid
