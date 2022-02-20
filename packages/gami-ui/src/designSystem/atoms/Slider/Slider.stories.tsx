import React from 'react'
import { Meta } from '@storybook/react'

import Slider from '.'
import Image from '../Image'

export default {
  title: 'Atoms/Slider',
  component: Slider,
  args: {},
  argTypes: {},
} as Meta

const Children = () => (
  <>
    <Image
      width="100%"
      height="350px"
      className="keen-slider__slide"
      src="https://pixnio.com/free-images/2017/03/01/2017-03-01-07-11-56.jpg"
    />
    <Image
      width="100%"
      height="350px"
      className="keen-slider__slide"
      src="https://pixnio.com/free-images/2017/03/01/2017-03-01-07-11-56.jpg"
    />
    <Image
      width="100%"
      height="350px"
      className="keen-slider__slide"
      src="https://pixnio.com/free-images/2017/03/01/2017-03-01-07-11-56.jpg"
    />
    <Image
      width="100%"
      height="350px"
      className="keen-slider__slide"
      src="https://pixnio.com/free-images/2017/03/01/2017-03-01-07-11-56.jpg"
    />
    <Image
      width="100%"
      height="350px"
      className="keen-slider__slide"
      src="https://pixnio.com/free-images/2017/03/01/2017-03-01-07-11-56.jpg"
    />
    <Image
      width="100%"
      height="350px"
      className="keen-slider__slide"
      src="https://pixnio.com/free-images/2017/03/01/2017-03-01-07-11-56.jpg"
    />
  </>
)

export const Basic = (args: any) => {
  return (
    <Slider {...args}>
      <Children />
    </Slider>
  )
}
Basic.args = {}

export const Autoplay = (args: any) => {
  return (
    <Slider {...args}>
      <Children />
    </Slider>
  )
}
Autoplay.args = {
  isAutoplay: true,
  dotsConfig: {
    activeColor: 'red',
    inactiveColor: 'black',
  },
  arrowsConfig: {
    activeColor: 'red',
    inactiveColor: 'black',
  },
}

export const Vertical = (args: any) => {
  return (
    <Slider {...args}>
      <Children />
    </Slider>
  )
}
Vertical.args = {
  vertical: true,
  slidesPerView: {
    phone: 1,
    tablet: 1,
    laptop: 2,
    desktop: 2,
  },
}