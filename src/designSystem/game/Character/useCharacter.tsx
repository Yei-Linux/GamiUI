import { useContext } from 'react'
import context from '../../../context/CanvasProvider/context'
import useAssetLoad from '../../../hooks/useAssetLoad'
import useKeyDown from '../../../hooks/useKeyDown'
import { HeroTypes } from './constants'

const dirs: any = {
  topDir: {
    x: 1,
    y: 4,
  },
  bottomDir: {
    x: 1,
    y: 1,
  },
  leftDir: {
    x: 1,
    y: 2,
  },
  rightDir: {
    x: 1,
    y: 3,
  },
}

const useCharacter = () => {
  const {
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
  } = useContext(context)
  const { topDir, bottomDir, leftDir, rightDir } = keysDirection
  const keys = [topDir, bottomDir, leftDir, rightDir]

  const findDirection = (key: any): any => {
    let direction
    Object.keys(keysDirection).map((keyObject) => {
      if (keysDirection[keyObject].keyCode == key) {
        direction = keyObject
      }
    })
    return direction
  }

  const moveCharacter = (key: any) => {
    const { xPixelValue, yPixelValue }: any = keys.find(
      (keyItem) => keyItem.keyCode == key
    )
    setPositionX(xPixelValue)
    setPositionY(yPixelValue)

    setCurrentDirection(findDirection(key))
  }

  const chooseCharacterOnSpriteByDirection = (
    positionSpriteX = 1,
    positionSpriteY = 1
  ) => {
    return {
      x: positionSpriteX - 1,
      y: (heroSprite.pixelSize - 8) * (positionSpriteY - 1),
    }
  }

  const drawCharacter = (image: any) => {
    const { x, y } = chooseCharacterOnSpriteByDirection(
      dirs[currentDirection].x,
      dirs[currentDirection].y
    )

    canvasValue.drawImage(
      image,
      x,
      y,
      heroSprite.pixelSize - 5,
      heroSprite.pixelSize - 5,
      positionX * mapConfig.pixelSize,
      positionY * mapConfig.pixelSize,
      heroSprite.pixelSize,
      heroSprite.pixelSize
    )
  }

  useKeyDown({
    keys: keys.map((key) => key.keyCode),
    action: moveCharacter,
  })

  const { onLoadAsset } = useAssetLoad({
    action: drawCharacter,
  })

  const drawCharacterPixel = () => {
    onLoadAsset(HeroTypes[heroSprite.type])
  }

  return { drawCharacterPixel }
}

export default useCharacter
