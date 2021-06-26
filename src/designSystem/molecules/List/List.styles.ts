import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { colorLight } from '../../../styles/theme'
import { twinStyles } from '../../../styles/utilities/twinStyles'

export const ListWrapper = styled.ul<{
  border?: string
  shadow?: string
  width?: string
  heigth?: string
}>`
  width: fit-content;
  ${(props: any) => twinStyles(props)};
`

export const ListItemWrapper = styled.li<{
  isSelected: boolean
  allBorder?: boolean
  noBorder?: boolean
}>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1rem;
  list-style: none;
  width: 100%;
  min-width: 250px;

  &:hover {
    cursor: pointer;
  }

  ${(props) =>
    props.isSelected &&
    css`
      border: 1px solid ${colorLight.neutral.six};
      border-radius: 0.4em;

      background-color: ${colorLight.primary.one};

      div {
        color: ${colorLight.neutral.nine};
      }
      svg {
        fill: ${colorLight.neutral.nine};
      }
    `}

  ${(props) =>
    props.allBorder
      ? css`
          border: 1px solid ${colorLight.neutral.six};
          border-radius: 0.4em;
          &:hover {
            background-color: ${colorLight.primary.one};
          }
          &:hover div {
            color: ${colorLight.neutral.nine};
          }
          &:hover svg {
            fill: ${colorLight.neutral.nine};
          }
        `
      : css`
          border-bottom: 1px solid ${colorLight.neutral.six};
        `}

    ${(props) =>
    props.noBorder &&
    css`
      border: none;
    `}
`
export const ListItemChild = styled.div`
  margin-right: 1rem;
`
