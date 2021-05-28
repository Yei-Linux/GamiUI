import React, { Fragment, useContext, useEffect } from 'react'
import context from '../../../context/CanvasProvider/context'
import { LAYERS, MAP_DIMENSIONS, TILE_SIZE } from '../../../core/utils/constants'

const { COLS, ROWS } = MAP_DIMENSIONS

const Map = () => {
  const { canvasValue } = useContext(context)

  useEffect(() => {
    const drawLayer = (grid: any) => {
      for (let i = 0; i < ROWS; i++) {
        for (let j = 0; j < COLS; j++) {
          const item = grid[i][j]
          if (!item) {
            continue
          }
          const img = document.querySelector(`#map-tile-img-${item}`)
          const x = j * TILE_SIZE
          const y = i * TILE_SIZE
          canvasValue.drawImage(
            img,
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

    drawLayer(LAYERS[0])
    drawLayer(LAYERS[1])
  }, [COLS, ROWS, canvasValue])

  return <Fragment />
}

export default Map
