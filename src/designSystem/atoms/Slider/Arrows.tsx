import { TOnClick } from 'core/domain/types'
import KeenSlider from 'keen-slider'
import React, { Fragment } from 'react'
import { theme } from 'styles/tokens'

import * as S from './Slider.styles'

export interface ISliderElements{
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
            fill={
              isFirstSlide()
                ? theme.light.neutral[500]
                : theme.light.primary.jordyBlue
            }
            name="arrowLeft"
          />
          <S.ArrowRight
            onClick={handleClickNext}
            fill={
              isLastSlide()
                ? theme.light.neutral[500]
                : theme.light.primary.jordyBlue
            }
            name="arrowRight"
          />
        </>
      )}
    </Fragment>
  )
}

export default Arrows
