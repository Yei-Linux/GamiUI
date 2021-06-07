import 'regenerator-runtime/runtime'
import { useContext } from 'react'

import context from '../../../context/CanvasProvider/context'

import useAssetLoad from '../../../hooks/useAssetLoad'
import useKeyDown from '../../../hooks/useKeyDown'
import useAudio from '../../../hooks/useAudio'

import { HeroTypes } from './constants'

import steps from '../../../audio/grass.mp3'
import useCollision from '../../../hooks/useCollision'

const useCharacter = () => {
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
  } = useContext(context)
  const { isInFrontOfAnyBlock } = useCollision()
  const { playAudio } = useAudio({ audioImported: steps })
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

  const timeout = (t: number): Promise<any> => {
    return new Promise((resolve, _reject) => {
      setTimeout(resolve, t)
    })
  }

  const doingActionsOnMoveCharacter = async (
    xPixelValue: number,
    yPixelValue: number,
    numberSpriteX: number,
    currentDirection: string
  ) => {
    setPositionX(xPixelValue)
    setPositionY(yPixelValue)
    setDirs({ x: numberSpriteX, currentDirection })
    await timeout(200)
  }

  const moveCharacter = async (key: any) => {
    const axisPositionX = getAxisPositionXorY(positionX.current)
    const axisPositionY = getAxisPositionXorY(positionY.current)

    const { xPixelValue, yPixelValue }: any = keys.find(
      (keyItem) => keyItem.keyCode == key
    )
    const direction = findDirection(key)

    const currentIndexOnMap = {
      x: axisPositionX / mapConfig.pixelSize,
      y: axisPositionY / mapConfig.pixelSize,
    }

    const isNextBlockObstacule = isInFrontOfAnyBlock(
      currentIndexOnMap,
      direction
    )

    if (isNextBlockObstacule) return

    setCurrentDirection(direction)

    await playAudio()

    for (const dirGif of heroSprite.animation) {
      await doingActionsOnMoveCharacter(
        xPixelValue,
        yPixelValue,
        dirGif,
        direction
      )
    }
  }

  const getAxisPositionXorY = (positionAxis: number) => {
    return positionAxis * (mapConfig.pixelSize / 4)
  }

  const chooseCharacterOnSpriteByDirection = (
    positionSpriteX = 1,
    positionSpriteY = 1
  ) => {
    const x = positionSpriteX - 1
    const y = positionSpriteY - 1
    return {
      x: heroSprite.pixelSize * x,
      y: heroSprite.pixelSize * y,
    }
  }

  const drawCharacter = (image: any) => {
    const axisPositionX = getAxisPositionXorY(positionX.current)
    const axisPositionY = getAxisPositionXorY(positionY.current)

    const { x, y } = chooseCharacterOnSpriteByDirection(
      dirs[currentDirection].x,
      dirs[currentDirection].y
    )

    canvasValue.drawImage(
      image,
      x,
      y,
      heroSprite.pixelSize,
      heroSprite.pixelSize,
      axisPositionX,
      axisPositionY,
      mapConfig.pixelSize,
      mapConfig.pixelSize
    )
  }

  useKeyDown({
    keys: keys.map((key) => key.keyCode),
    action: moveCharacter,
    dependencies: [],
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
