import styled from '@emotion/styled'
import { TOnClick } from 'core/domain/types'
import KeenSlider from 'keen-slider'
import React, { Fragment } from 'react'
import Icon from '../Icon'

import * as S from './Slider.styles'

const ArrowLeft = styled(Icon)`
  ${S.Arrow}
  left: 5px;
`

const ArrowRight = styled(Icon)`
  ${S.Arrow}
  left: auto;
  right: 5px;
`

export interface ISliderElements {
  slider: KeenSlider
  vertical: boolean
  currentSlide: number
}

const Arrows = ({ slider, vertical, currentSlide }: ISliderElements) => {
  const isFirstSlide = () => currentSlide == 0

  const isLastSlide = () => currentSlide == slider.details().size - 1

  const handleClickPrev = (e: TOnClick) => {
    e.stopPropagation()
    slider.prev()
  }

  const handleClickNext = (e: TOnClick) => {
    e.stopPropagation()
    slider.next()
  }

  return (
    <Fragment>
      {slider && !vertical && (
        <>
          <ArrowLeft
            onClick={handleClickPrev}
            size="25px"
            name={isFirstSlide() ? 'arrow__left__semiwhite' : 'arrow__left'}
          />
          <ArrowRight
            size="25px"
            onClick={handleClickNext}
            name={isLastSlide() ? 'arrow__right__semiwhite' : 'arrow__right'}
          />
        </>
      )}
    </Fragment>
  )
}

export default Arrows
