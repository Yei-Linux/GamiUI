import { useContext } from 'react'
import context from '../context/CanvasProvider/context'

interface IndexMap {
  x: number
  y: number
}

const dirsIndex: any = {}

export interface IUseCollisionProps {
  /**
   * Audio Source Imported
   */
  currentIndexOnMap?: IndexMap
  /**
   * Audio Source Imported
   */
  direction: string
}

const useCollision = () => {
  const {
    layersConfig: { layers },
    keysDirection,
  } = useContext(context)

  const blockLayer = layers[1]

  const isInFrontOfAnyBlock = ({ x, y }: IndexMap, direction: string) => {
    const xValue = keysDirection[direction].xPixelValue + x
    const yValue = keysDirection[direction].yPixelValue + y
    console.log(blockLayer[xValue < 0 ? 0 : xValue][yValue < 0 ? 0 : yValue])
  }

  return { isInFrontOfAnyBlock }
}

export default useCollision
