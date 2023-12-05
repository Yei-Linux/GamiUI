import styled from '@emotion/styled'

export const CloseIconStyled = styled('div')(() => ({
  position: 'absolute',
  top: '8px',
  right: '10px',
}))

type TDrawerStyled = {
  $zIndex: number
  $width: number
  $height: number
}
export const DrawerStyled = styled('div')(
  ({ $height, $width, $zIndex }: TDrawerStyled) => ({
    background: '#fff',
    boxShadow: '0 -2px 8px rgb(0 0 0 / 15%)',
    overflowY: 'auto',
    position: 'fixed',
    zIndex: $zIndex,
    '&.left': {
      top: '0px',
      bottom: '0px',
      left: $width && `-${$width}px`,
      width: $width && `${$width}px`,
      borderTopRightRadius: '2em',
    },
    '&.right': {
      top: '0px',
      bottom: '0px',
      right: $width && `-${$width}px`,
      width: $width && `${$width}px`,
      borderTopLeftRadius: '2em',
    },
    '&.top': {
      top: $height && `-${$height}px`,
      bottom: 'auto',
      left: '0px',
      right: '0px',
      width: '100%',
      height: $height && `${$height}px`,
      borderBottomLeftRadius: '2em',
      borderBottomRightRadius: '2em',
    },
    '&.bottom': {
      top: 'auto',
      bottom: $height && `-${$height}px`,
      left: '0px',
      right: '0px',
      width: '100%',
      height: $height && `${$height}px`,
      borderTopLeftRadius: '2em',
      borderTopRightRadius: '2em',
    },
  })
)
