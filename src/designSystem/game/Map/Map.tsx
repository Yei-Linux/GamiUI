import React, { Fragment, useContext, useEffect } from 'react'
import context from '../../../context/CanvasProvider/context'
import {
  LAYERS,
  MAP_DIMENSIONS,
  MAP_TILE_IMAGES,
  TILE_SIZE,
} from '../../../core/utils/constants'
import useAssetLoad from '../../../hooks/useAssetLoad'

const { COLS, ROWS } = MAP_DIMENSIONS

export interface IMap {
  prop?: any
}

const Map = () => {
  const { canvasValue } = useContext(context)

  const drawPixelBlock = (image: string, j: number, i: number) => {
    const x = j * TILE_SIZE
    const y = i * TILE_SIZE
    canvasValue.drawImage(
      image,
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

  const { onLoadAsset } = useAssetLoad({
    action: drawPixelBlock,
  })

  const drawLayerOnLoop = (grid: any) => {
    for (let i = 0; i < ROWS; i++) {
      for (let j = 0; j < COLS; j++) {
        const item = grid[i][j]
        if (!item) {
          continue
        }
        onLoadAsset(MAP_TILE_IMAGES[item], j, i)
      }
    }
  }

  useEffect(() => {
    drawLayerOnLoop(LAYERS[0])
    drawLayerOnLoop(LAYERS[1])
  }, [])

  return <Fragment />
}

Map.defaultProps = {}

export default Map
