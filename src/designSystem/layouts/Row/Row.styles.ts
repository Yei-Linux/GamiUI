import styled from '@emotion/styled'

export const RowWrapper = styled.div<{
  height: string,
  justifyContent: string
  alignItems: string
}>`
  display: flex;
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  flex-wrap: wrap;
  height: ${(props)=> props.height};
`
