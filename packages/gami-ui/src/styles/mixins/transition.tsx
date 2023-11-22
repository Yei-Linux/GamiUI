import { css } from '@emotion/react'

interface IZoom {
  time: number
  scale: number
}

export const zoom = ({ time, scale }: IZoom) => css`
  transition: transform ${`${time}s`};
  &:hover {
    transform: scale(${scale});
  }
`

export const hover = css`
  &:hover {
    cursor: pointer;
  }
`
