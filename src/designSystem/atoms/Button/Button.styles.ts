import styled from '@emotion/styled'
import { ButtonType } from '../../../core/domain/types'
import { themeTypes } from '../../../styles/utilities/color'
import { twinStyles } from '../../../styles/utilities/twinStyles'

export const ButtonWrapper = styled.button<{
  typeStyle?: ButtonType
  border?: string
  shadow?: string
  width?: string
  heigth?: string
  textAlign?: string
  fontWeight?: string
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  cursor: pointer;
  appearance: none;
  padding: 10px;

  ${(props: any) => twinStyles(props)};
  ${(props: any) => themeTypes(props.typeStyle)};
`
