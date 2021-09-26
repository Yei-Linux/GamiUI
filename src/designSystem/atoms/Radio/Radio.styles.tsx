import styled from '@emotion/styled'
import {
  BorderType,
  HeightType,
  ShadowType,
  WidthType,
} from 'core/domain/types'
import { opacity, spacing, zIndex } from 'styles/tokens'
import { setGenericPropStyles } from 'styles/utilities/genericPropStyles'

export const RadioGroup = styled.div<{
  $border?: BorderType
  $shadow?: ShadowType
  $width?: WidthType
  $heigth?: HeightType
}>`
  margin: ${spacing.margin.none};
  padding: ${spacing.padding.none};
  font-size: 14px;

  ${({ $border, $shadow, $width, $heigth }) =>
    setGenericPropStyles({
      border: $border || 'none',
      shadow: $shadow || 'none',
      width: $width || 'auto',
      heigth: $heigth || 'auto',
    })};
`

export const RadioItem = styled.label`
  margin: 0 8px 0 0;
  padding: ${spacing.padding.none};

  position: relative;
  display: inline-flex;

  &:hover {
    cursor: pointer;
  }
`

export const RadioCheck = styled.span`
  margin: ${spacing.margin.none};
  padding: ${spacing.padding.none};

  position: relative;
  display: inline-block;

  outline: none;

  &:hover {
    cursor: pointer;
  }
`

export const RadioInput = styled.input`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  opacity: ${opacity[0]};
  z-index: ${zIndex[0]};

  &:hover {
    cursor: pointer;
  }
`

export const RadioInner = styled.span`
  position: relative;
  top: 0;
  left: 0;
  display: block;
  width: 16px;
  height: 16px;
  background-color: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 50%;
  transition: all 0.3s;

  &.checked {
    border-color: #1890ff;

    &::after {
      transform: scale(1);
      opacity: 1;
    }
  }

  &::after {
    display: table;
    position: absolute;
    top: 3px;
    left: 3px;

    width: 8px;
    height: 8px;

    background-color: #1890ff;
    border-top: 0;
    border-left: 0;
    border-radius: 8px;
    opacity: 0;

    transform: scale(0);
    transition: all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
    content: ' ';
  }
`

export const RadioText = styled.span`
  margin: 0 10px;
`
