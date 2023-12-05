import { SerializedStyles } from '@emotion/react'
import styled from '@emotion/styled'

type TLoaderType = { $styles: SerializedStyles }
export const LoaderTypeStyled = styled('div')(({ $styles }: TLoaderType) => ({
  display: 'inline-block',
  position: 'relative',
  width: '80px',
  height: '80px',
  '.loader__item': {
    ...$styles,
  },
}))

export const ItemStyled = styled('div')()

type TWrapperStyled = {
  $minHeight?: string
}
export const WrapperStyled = styled('div')(
  ({ $minHeight }: TWrapperStyled) => ({
    width: '100%',
    height: '100%',
    minHeight: $minHeight,
    position: 'relative',
    background: 'rgba(255, 255, 255, 0.25)',
    backdrodFilter: 'blur(3px)',
    borderRadius: '10px',
    border: '1px solid rgba(255, 255, 255, 0.18)',
    '&.absolute': {
      position: 'absolute',
      top: '0px',
      left: '0px',
    },
    '.loader': {
      left: '45%',
    },
  })
)

type TFragmentLoader = {
  $minHeight?: string
}
export const FragmentLoaderStyled = styled('div')(
  ({ $minHeight }: TFragmentLoader) => ({
    width: '100%',
    height: '100%',
    position: 'relative',
    minHeight: $minHeight,
  })
)
