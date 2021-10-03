import { TOnClick } from 'core/domain/types'
import KeenSlider from 'keen-slider'
import React, { Fragment } from 'react'

import * as S from './Slider.styles'

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
          <S.ArrowLeft
            onClick={handleClickPrev}
            size="25px"
            name={isFirstSlide() ? 'arrow__left__semiwhite' : 'arrow__left'}
          />
          <S.ArrowRight
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
