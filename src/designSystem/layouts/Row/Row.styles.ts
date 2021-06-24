import styled from '@emotion/styled'

export const RowWrapper = styled.div<{
  height: string
  justifyContent: string
  alignItems: string
  isWrap?: boolean
}>`
  display: flex;
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  flex-wrap: ${(props) => (props.isWrap ? 'wrap' : 'nowrap')};
  height: ${(props) => props.height};
`
