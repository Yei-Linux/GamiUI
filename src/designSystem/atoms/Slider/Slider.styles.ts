import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { colorLight } from '../../../styles/theme'
import Icon from '../Icon'

export const SliderWrapper = styled.div`
  position: relative;
`

export const KeenSlider = styled.div<{ isVertical?: boolean }>`
  display: flex;
  overflow: hidden;
  position: relative;
  user-select: none;
  -webkit-touch-callout: none;
  -khtml-user-select: none;
  -ms-touch-action: pan-y;
  touch-action: pan-y;
  -webkit-tap-highlight-color: transparent;

  ${(props) =>
    props.isVertical &&
    css`
      flex-wrap: wrap;
      height: 300px;
    `}

  .keenslider__slide {
    min-width: calc(100% - 0px);
    max-width: calc(100% - 0px);
    transform: translate3d(0px, 0px, 0px);
    width: 100%;
    min-height: 100%;
    overflow: hidden;
    position: relative;
  }
`

export const Dots = styled.div`
  display: flex;
  padding: 10px 0;
  justify-content: center;
`

export const Arrow = css`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  cursor: pointer;
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

export const Dot = styled.button<{ isActive: boolean }>`
  border: none;
  width: 10px;
  height: 10px;
  background: #c5c5c5;
  border-radius: 50%;
  margin: 0 5px;
  padding: 5px;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  ${(props) =>
    props.isActive &&
    css`
      background: ${colorLight.primary.one};
    `}
`
