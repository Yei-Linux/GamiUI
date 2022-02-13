import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { IGenericPropStyles } from 'core/domain/interfaces/IStyles'
import {
  ShadowType,
  BorderType,
  WidthType,
  HeightType,
  TextAlignType,
  FontWeightType,
  InheritStyleComponent,
} from 'core/domain/types'
import { ICustomTheme } from 'providers/ThemeGamification/ThemeGamification'
import { mixinFlexVariants } from 'styles/mixins/flex'
import { font, defaultTheme } from 'styles/tokens'
import { setGenericPropStyles } from './genericPropStyles'

export const GlobalStylesComponent = (tag: any) => styled(
  tag
)<IGenericPropStyles>`
  ${({
    $shadow,
    $border,
    $width,
    $height,
    $textAlign,
    $fontWeight,
    $padding,
    $margin,
    theme,
  }) =>
    setGenericPropStyles(theme, {
      shadow: $shadow,
      border: $border,
      width: $width,
      height: $height,
      textAlign: $textAlign,
      fontWeight: $fontWeight,
      padding: $padding,
      margin: $margin,
    })};
`

export const InheritGlobalStylesComponent = (
  styledProps: any,
  component: InheritStyleComponent = null
) => styled(styledProps)<{
  $shadow?: ShadowType
  $border?: BorderType
  $width?: WidthType
  $height?: HeightType
  $textAlign?: TextAlignType
  $fontWeight?: FontWeightType
  $padding?: string
  $margin?: string
  theme?: ICustomTheme
}>`
  ${({
    $shadow,
    $border,
    $width,
    $height,
    $textAlign,
    $fontWeight,
    $padding,
    $margin,
    theme,
  }) =>
    setGenericPropStyles(
      theme,
      {
        shadow: $shadow,
        border: $border,
        width: $width,
        height: $height,
        textAlign: $textAlign,
        fontWeight: $fontWeight,
        padding: $padding,
        margin: $margin,
      },
      component
    )};
`

export const TitleContainer = styled.div`
  font-weight: ${font.weight.medium};
  color: ${defaultTheme.light.neutral[0]};
  margin-bottom: 3px;
`

export const SubtitleContainer = styled.div`
  color: ${defaultTheme.light.neutral[300]};
  font-size: 0.9em;
`

export const Section = styled.div`
  ${mixinFlexVariants({ alignItems: 'center' })}
`

export const ScrollBar = () => css`
  overflow: auto;
  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    background: #ffffff8a;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${defaultTheme.light.primary.hawkesBlue};
    border-radius: 20px;
  }
`
