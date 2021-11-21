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

export interface IArrows extends ISliderElements {
  activeArrowColor?: string
  inactiveArrowColor?: string
}

const Arrows = ({
  slider,
  vertical,
  currentSlide,
  activeArrowColor = '#7f9cf5',
  inactiveArrowColor = '#EAEAEA',
}: IArrows) => {
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
            name="arrow__left__transparent"
            fill={isFirstSlide() ? inactiveArrowColor : activeArrowColor}
          />
          <ArrowRight
            size="25px"
            onClick={handleClickNext}
            name="arrow__right__transparent"
            fill={isLastSlide() ? inactiveArrowColor : activeArrowColor}
          />
        </>
      )}
    </Fragment>
  )
}

export default Arrows
