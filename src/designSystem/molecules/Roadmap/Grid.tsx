import React, { Fragment, useContext, useEffect } from 'react'
import context from '../../../context/CanvasProvider/context'
import { TILE_SIZE } from '../../../core/utils/constants'

export interface GridProps {
  width: number
  height: number
  children?: any
}

const Grid = ({ width, height, children }: GridProps) => {
  const { canvasValue } = useContext(context)

  const drawOnCanvasForYandX = (maxValue: number, axis = 'y') => {
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
    setTimeout(() => {
      drawOnCanvasForYandX(height, 'y')
      drawOnCanvasForYandX(width, 'x')
    }, 100)
  }, [])

  return <Fragment>{children}</Fragment>
}

export default Grid
