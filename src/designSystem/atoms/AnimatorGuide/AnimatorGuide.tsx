import React from 'react'
import { getGenericPropStyles } from 'styles/utilities/genericPropStyles'

import { IGeneralProps } from 'core/domain/interfaces/IGeneralProps'
import { GuidesNames } from 'core/domain/types'

import * as S from './AnimatorGuide.styles'
import { Guiders } from './constants'

export interface IAnimatorGuide extends IGeneralProps {
  /**
   * Guide Type
   */
  type: GuidesNames
}

const AnimatorGuide = ({
  type = 'singer',
  ...genericsProps
}: IAnimatorGuide) => {
  return (
    <S.AnimatorGuideImg
      $imageProps={Guiders[type]}
      {...getGenericPropStyles(genericsProps)}
    />
  )
}

export default AnimatorGuide
