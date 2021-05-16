import styled from '@emotion/styled'

export const Img = styled.img<{
  maxWidth: string
  maxHeight: string
  minWidth: string
  minHeight: string
  width: string
  height: string
}>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  max-width: ${(props) => props.maxWidth};
  min-width: ${(props) => props.minWidth};
  max-height: ${(props) => props.maxHeight};
  min-height: ${(props) => props.minHeight};
`

export const BackgroundImg = styled.div<{
  src: string
  maxWidth: string
  maxHeight: string
  minWidth: string
  minHeight: string
  width: string
  height: string
}>`
  background-image: url(${(props) => props.src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  max-width: ${(props) => props.maxWidth};
  min-width: ${(props) => props.minWidth};
  max-height: ${(props) => props.maxHeight};
  min-height: ${(props) => props.minHeight};
`
