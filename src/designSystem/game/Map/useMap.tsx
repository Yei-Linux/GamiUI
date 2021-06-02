import { useContext } from 'react'
import context from '../../../context/CanvasProvider/context'
import { ITileImage } from '../../../core/domain/interfaces/ICanvas'
import useAssetLoad from '../../../hooks/useAssetLoad'

export interface IMap {
  children?: any
}

const useMap = () => {
  const {
    canvasValue,
    mapConfig: { pixelSize, cols, rows },
    layersConfig: { tileImages, layers },
  } = useContext(context)

  const drawPixelBlock = (image: string, j: number, i: number) => {
    const x = j * pixelSize
    const y = i * pixelSize
    canvasValue.drawImage(
      image,
      0,
      0,
      pixelSize,
      pixelSize,
      x,
      y,
      pixelSize,
      pixelSize
    )
  }
  const { onLoadAsset } = useAssetLoad({
    action: drawPixelBlock,
  })

  const findTileSrc = (tileKey: number) => {
    return tileImages.find(
      (tileImage: ITileImage) => tileImage.tileKey == tileKey
    )?.tileSrc
  }

  const drawLayerOnLoop = (grid: any) => {
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const item = grid[i][j]
        if (!item) {
          continue
        }
        onLoadAsset(findTileSrc(item), j, i)
      }
    }
  }

  const drawLayers = () => {
    layers.map((layer: any) => {
      drawLayerOnLoop(layer)
    })
  }

  return { drawLayers }
}

export default useMap
