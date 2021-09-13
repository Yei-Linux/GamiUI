import context from 'context/CanvasProvider/context'
import useStore from '../useStore'

const useGameStore = () => {
  const {
    dirs,
    setDirs,
    canvasValue,
    setPositionX,
    setPositionY,
    positionX,
    positionY,
    mapConfig,
    heroSprite,
    keysDirection,
    currentDirection,
    setCurrentDirection,
  } = useStore({ context })
  return {
    dirs,
    setDirs,
    canvasValue,
    setPositionX,
    setPositionY,
    positionX,
    positionY,
    mapConfig,
    heroSprite,
    keysDirection,
    currentDirection,
    setCurrentDirection,
  }
}

export default useGameStore
