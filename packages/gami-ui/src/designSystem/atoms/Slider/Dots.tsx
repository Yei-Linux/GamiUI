import classNames from 'classnames'
import React, { Fragment } from 'react'
import { defaultTheme } from 'styles/tokens'
import { ISliderElements } from './Arrows'
import * as S from './Slider.styles'

export interface IDots extends ISliderElements {
  activeDotColor?: string
  inactiveDotColor?: string
}

const Dots = ({
  slider,
  vertical,
  currentSlide,
  activeDotColor = defaultTheme.light.primary.jordyBlue,
  inactiveDotColor = defaultTheme.light.neutral[500],
}: IDots) => {
  return (
    <Fragment>
      {slider && !vertical && (
        <S.Dots className={classNames('slider__dots__wrapper')}>
          {[...Array(slider.details().size).keys()].map((idx) => (
            <S.Dot
              $activeDotColor={activeDotColor}
              $inactiveDotColor={inactiveDotColor}
              key={idx}
              onClick={() => {
                slider.moveToSlideRelative(idx)
              }}
              className={classNames({
                active: currentSlide === idx,
              })}
            />
          ))}
        </S.Dots>
      )}
    </Fragment>
  )
}

export default Dots
