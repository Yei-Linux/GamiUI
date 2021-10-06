import React, { Fragment, useState } from 'react'
import classNames from 'classnames'
import KeenSlider, { useKeenSlider } from 'keen-slider/react'
import * as S from './Slider.styles'
import useDevice from 'hooks/useDevice'
import useAutoplaySlider from 'hooks/useAutoplaySlider'
import Arrows from './Arrows'
import Dots from './Dots'

interface ISliderPerView {
  phone: number
  tablet: number
  laptop: number
  desktop: number
}

interface IConfigSlider {
  activeColor?: string
  inactiveColor?: string
}

export interface ISlider {
  /**
   * Slider content
   */
  children: React.ReactNode
  /**
   * Sliders per layout
   */
  slidesPerView?: ISliderPerView
  /**
   * Spacing beetwen item
   */
  spacing?: number
  /**
   * Initial item
   */
  initial?: number
  /**
   * Is Infinite
   */
  isLoop?: boolean
  /**
   * Is Vertical
   */
  vertical?: boolean
  /**
   * Is Autoplay
   */
  isAutoplay?: boolean
  /**
   * Dots Config
   */
  dotsConfig?: IConfigSlider
  /**
   * Arrows Config
   */
  arrowsConfig?: IConfigSlider
}

type TKeenSlider = [React.LegacyRef<HTMLDivElement>, KeenSlider]

const Slider = ({
  children,
  slidesPerView = {
    phone: 1,
    tablet: 3,
    laptop: 5,
    desktop: 6,
  },
  spacing = 0,
  initial = 0,
  isLoop = true,
  vertical = false,
  isAutoplay = false,
  dotsConfig = {
    activeColor: '#7f9cf5',
    inactiveColor: '#EAEAEA',
  },
  arrowsConfig = {
    activeColor: '#7f9cf5',
    inactiveColor: '#EAEAEA',
  },
}: ISlider) => {
  const { device } = useDevice()
  const [pause, setPause] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [sliderRef, slider]: TKeenSlider = useKeenSlider({
    initial,
    loop: isLoop,
    slidesPerView: device ? slidesPerView?.[device] : 1,
    spacing,

    vertical,
    centered: vertical,

    duration: 1000,
    dragStart: () => {
      setPause(true)
    },
    dragEnd: () => {
      setPause(false)
    },

    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide)
    },
  })
  useAutoplaySlider({ isAutoplay, slider, sliderRef, pause, setPause })

  return (
    <Fragment>
      <S.Slider>
        <S.KeenSliderLib
          ref={sliderRef}
          className={classNames('keen-slider', {
            vertical: vertical,
          })}
        >
          {children}
        </S.KeenSliderLib>

        <Arrows
          activeArrowColor={arrowsConfig.activeColor}
          inactiveArrowColor={arrowsConfig.inactiveColor}
          slider={slider}
          vertical={vertical}
          currentSlide={currentSlide}
        />
      </S.Slider>

      <Dots
        activeDotColor={dotsConfig.activeColor}
        inactiveDotColor={dotsConfig.inactiveColor}
        slider={slider}
        vertical={vertical}
        currentSlide={currentSlide}
      />
    </Fragment>
  )
}

export default Slider
