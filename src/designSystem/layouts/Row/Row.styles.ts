import styled from '@emotion/styled'

export const RowWrapper = styled.div<{
  width?: string
  height: string
  justifyContent: string
  alignItems: string
  isWrap?: boolean
  flexDirection?: string
}>`
  display: flex;
  width: ${(props) => props.width};
  flex-direction: ${(props) => props.flexDirection};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  flex-wrap: ${(props) => (props.isWrap ? 'wrap' : 'nowrap')};
  height: ${(props) => props.height};
`
