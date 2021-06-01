import { useContext } from 'react'
import context from '../../../context/CanvasProvider/context'
import {
  CHARACTERS,
  HERO_IMAGE_SIZE,
  MOVE_DIRECTIONS,
  TILE_SIZE,
} from '../../../core/utils/constants'
import useAssetLoad from '../../../hooks/useAssetLoad'
import useKeyDown from '../../../hooks/useKeyDown'

export interface ICharacter {
  prop?: any
}

const useCharacter = () => {
  const { canvasValue, setPositionX, setPositionY, positionX, positionY } =
    useContext(context)

  const moveCharacter = (key: any) => {
    const [x, y] = MOVE_DIRECTIONS[key]
    setPositionX(x)
    setPositionY(y)
  }

  const drawCharacter = (image: any) => {
    canvasValue.drawImage(
      image,
      0,
      0,
      HERO_IMAGE_SIZE - 5,
      HERO_IMAGE_SIZE - 5,
      positionX * TILE_SIZE,
      positionY * TILE_SIZE,
      HERO_IMAGE_SIZE,
      HERO_IMAGE_SIZE
    )
  }

  useKeyDown({
    keys: Object.keys(MOVE_DIRECTIONS),
    action: moveCharacter,
  })

  const { onLoadAsset } = useAssetLoad({
    action: drawCharacter,
  })

  const drawCharacterPixel = () => {
    onLoadAsset(CHARACTERS.charone)
  }

  return { drawCharacterPixel }
}

export default useCharacter
