import React from 'react'
import context from '../../../context/CanvasProvider/context'
import useStore from '../../../hooks/useStore'
export interface IGrid {
  width: number
  height: number
  children?: React.ReactNode
}

const useGrid = () => {
  const { canvasValue, width, height, mapConfig } = useStore({ context })

  const drawOnCanvasForYandXAxis = (maxValue: number, axis = 'y') => {
    for (let i = 0; i < maxValue; i++) {
      const size = i * mapConfig.pixelSize
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
