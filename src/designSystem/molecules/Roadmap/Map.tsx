import React, { Fragment, useContext, useEffect } from 'react'
import context from '../../../context/CanvasProvider/context'
import {
  LAYERS,
  MAP_DIMENSIONS,
  MAP_TILE_IMAGES,
  TILE_SIZE,
} from '../../../core/utils/constants'

const { COLS, ROWS } = MAP_DIMENSIONS

const Map = () => {
  const { canvasValue } = useContext(context)

  const drawLayer = (grid: any) => {
    for (let i = 0; i < ROWS; i++) {
      for (let j = 0; j < COLS; j++) {
        const item = grid[i][j]
        if (!item) {
          continue
        }
        const imagePixel: any = new Image()
        imagePixel.src = MAP_TILE_IMAGES[item]
        imagePixel.onload = function () {
          const x = j * TILE_SIZE
          const y = i * TILE_SIZE
          canvasValue.drawImage(
            imagePixel,
            0,
            0,
            TILE_SIZE,
            TILE_SIZE,
            x,
            y,
            TILE_SIZE,
            TILE_SIZE
          )
        }
      }
    }
  }

  useEffect(() => {
    drawLayer(LAYERS[0])
    drawLayer(LAYERS[1])
  }, [])

  return <Fragment />
}

export default Map
