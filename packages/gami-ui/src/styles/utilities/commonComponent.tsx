import { css } from '@emotion/react'
import styled, { StyledComponent } from '@emotion/styled'
import { IGenericPropStyles } from 'core/domain/interfaces/IStyles'
import {
  ShadowType,
  RoundedType,
  WidthType,
  HeightType,
  TextAlignType,
  FontWeightType,
  InheritStyleComponent,
} from 'core/domain/types'
import { ICustomTheme } from 'providers/ThemeGamification/ThemeGamification'
import { flex } from 'styles/mixins/flex'
import { font, defaultTheme } from 'styles/tokens'
import { lightTheme } from 'styles/tokens/lightTheme'
import { setDesignCss } from './genericPropStyles'

export const GlobalStylesComponent = (tag: any) => styled(
  tag
)<IGenericPropStyles>`
  ${({ theme, ...designProps }) =>
    setDesignCss(theme, {
      shadow: designProps.$shadow,
      rounded: designProps.$rounded,
      width: designProps.$width,
      height: designProps.$height,
      textAlign: designProps.$textAlign,
      fontWeight: designProps.$fontWeight,
      padding: designProps.$padding,
      margin: designProps.$margin,
    })};
`

export interface IWithDesignStyleHoc {
  $shadow?: ShadowType
  $rounded?: RoundedType
  $width?: WidthType
  $height?: HeightType
  $textAlign?: TextAlignType
  $fontWeight?: FontWeightType
  $padding?: string
  $margin?: string
  theme?: ICustomTheme
}

export const WithDesignStyledComponent = (
  styledProps: StyledComponent<any, any, any>,
  component: InheritStyleComponent = null
) => styled(styledProps)<IWithDesignStyleHoc>`
  ${({ theme, ...designProps }) =>
    setDesignCss(
      theme,
      {
        shadow: designProps.$shadow,
        rounded: designProps.$rounded,
        width: designProps.$width,
        height: designProps.$height,
        textAlign: designProps.$textAlign,
        fontWeight: designProps.$fontWeight,
        padding: designProps.$padding,
        margin: designProps.$margin,
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
  ${flex({ alignItems: 'center' })}
`

export const Panel = styled.div`
  background-color: ${lightTheme.neutral[800]};
  padding: 1rem;
  border-radius: 0.4em;
  width: 300px;
  max-width: 300px;

  background: white;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.1);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
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
