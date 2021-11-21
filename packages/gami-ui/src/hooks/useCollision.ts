import context from '../context/CanvasProvider/context'
import useStore from './useStore'

interface IndexMap {
  x: number
  y: number
}

const useCollision = () => {
  const {
    layersConfig: { tileImages, layers },
    keysDirection,
  } = useStore({ context })

  const blockLayer = layers[1]

  const findTileType = (tileKey: any) =>
    tileImages.find((tile: any) => tile.tileKey == tileKey)

  const isInFrontOfAnyBlock = ({ x, y }: IndexMap, direction: string) => {
    const xValue = keysDirection[direction].xPixelValue + x
    const yValue = keysDirection[direction].yPixelValue + y
    const nextBlockValue =
      blockLayer[yValue < 0 ? 0 : yValue][xValue < 0 ? 0 : xValue]
    const tile = findTileType(nextBlockValue)

    if (tile?.tileType == 'OBSTACULE') return true

    return false
  }

  return { isInFrontOfAnyBlock }
}

export default useCollision
