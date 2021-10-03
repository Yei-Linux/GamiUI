import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { mixinFlexVariants } from 'styles/mixins/flex'
import { theme } from 'styles/tokens'
import Icon from '../Icon'

export const Slider = styled.div`
  position: relative;
`

export const KeenSliderLib = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;

  user-select: none;
  -webkit-touch-callout: none;
  -khtml-user-select: none;
  -ms-touch-action: pan-y;
  touch-action: pan-y;
  -webkit-tap-highlight-color: transparent;

  &.vertical {
    flex-wrap: wrap;
    height: 450px;
  }

  &.keenslider__slide {
    min-width: calc(100% - 0px);
    max-width: calc(100% - 0px);
    transform: translate3d(0px, 0px, 0px);
    width: 100%;
    min-height: 100%;
  }
`

export const Arrow = css`
  width: 30px;
  height: 30px;

  position: absolute;
  top: 50%;

  transform: translateY(-50%);

  &:hover {
    cursor: pointer;
  }
`

export const ArrowLeft = styled(Icon)`
  ${Arrow}
  left: 5px;
`

export const ArrowRight = styled(Icon)`
  ${Arrow}
  left: auto;
  right: 5px;
`

export const Dots = styled.div`
  ${mixinFlexVariants({ justifyContent: 'center' })}
  padding: 10px 0;
`

export const Dot = styled.button`
  border: none;
  border-radius: 50%;
  margin: 0 5px;
  padding: 5px;

  width: 10px;
  height: 10px;
  background: ${theme.light.neutral[500]};

  &:focus {
    outline: none;
  }

  &:hover {
    cursor: pointer;
  }

  &.active {
    background: ${theme.light.primary.jordyBlue};
  }
`
