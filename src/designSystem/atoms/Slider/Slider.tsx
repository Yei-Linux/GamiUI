import React, { Fragment, useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import {
  ArrowLeft,
  ArrowRight,
  Dot,
  Dots,
  KeenSlider,
  SliderWrapper,
} from './Slider.styles'
import { colorLight } from '../../../styles/theme'

export interface SliderProps {
  children: React.ReactNode
  slidesPerView: number
  spacing: number
  initial: number
  isLoop: boolean
}

const Slider = ({
  children,
  slidesPerView,
  spacing,
  initial,
  isLoop,
}: SliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [sliderRef, slider]: any = useKeenSlider({
    initial,
    loop: isLoop,
    slidesPerView,
    spacing,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide)
    },
  })

  return (
    <Fragment>
      <SliderWrapper>
        <KeenSlider ref={sliderRef} className="keen-slider">
          {children}
        </KeenSlider>
        {slider && (
          <>
            <ArrowLeft
              onClick={(e: any) => e.stopPropagation() || slider.prev()}
              fill={currentSlide === 0 ? colorLight.neutral.five : colorLight.primary.one}
              name="arrowLeft"
            />
            <ArrowRight
              onClick={(e: any) => e.stopPropagation() || slider.next()}
              fill={
                currentSlide === slider.details().size - 1
                  ? colorLight.neutral.five
                  : colorLight.primary.one
              }
              name="arrowRight"
            />
          </>
        )}
      </SliderWrapper>

      {slider && (
        <Dots>
          {[...Array(slider.details().size).keys()].map((idx) => (
            <Dot
              key={idx}
              onClick={() => {
                slider.moveToSlideRelative(idx)
              }}
              isActive={currentSlide === idx}
            />
          ))}
        </Dots>
      )}
    </Fragment>
  )
}

Slider.defaultProps = {
  initial: 0,
  isLoop: true,
  slidesPerView: 1,
  spacing: 0,
}

export default Slider
