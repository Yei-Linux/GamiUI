import classNames from 'classnames'
import React, { Fragment } from 'react'
import { ISliderElements } from './Arrows'
import * as S from './Slider.styles'

const Dots = ({ slider, vertical, currentSlide }: ISliderElements) => {
  return (
    <Fragment>
      {slider && !vertical && (
        <S.Dots className={classNames('slider__dots__wrapper')}>
          {[...Array(slider.details().size).keys()].map((idx) => (
            <S.Dot
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
