import styled from '@emotion/styled'

export const RowWrapper = styled.div<{
  justifyContent: string
  alignItems: string
}>`
  display: flex;
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  flex-wrap: wrap;
  height: 100%;
`
