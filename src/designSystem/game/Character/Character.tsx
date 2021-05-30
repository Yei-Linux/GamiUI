import React, { Fragment, useContext, useEffect } from 'react'
import context from '../../../context/CanvasProvider/context'
import {
  CHARACTERS,
  HERO_IMAGE_SIZE,
  TILE_SIZE,
} from '../../../core/utils/constants'
import useAssetLoad from '../../../hooks/useAssetLoad'

export interface ICharacter {
  prop?: any
}

const Character = () => {
  const { canvasValue, positionX, positionY } = useContext(context)

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

  const { onLoadAsset } = useAssetLoad({
    action: drawCharacter,
  })

  useEffect(() => {
    onLoadAsset(CHARACTERS.charone)
  }, [positionX, positionY])

  return <Fragment />
}

Character.defaultProps = {}

export default Character
