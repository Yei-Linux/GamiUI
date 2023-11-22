import styled from '@emotion/styled'
import {
  RoundedType,
  FontWeightType,
  HeightType,
  ShadowType,
  TextAlignType,
  WidthType,
} from 'core/domain/types'
import { mixinInput } from 'styles/mixins/input'
import { spacing } from 'styles/tokens'
import { WithDesignStyledComponent } from 'styles/utilities/commonComponent'

export const TextArea = WithDesignStyledComponent(
  styled.textarea<{
    $border?: RoundedType
    $shadow?: ShadowType
    $width?: WidthType
    $height?: HeightType
    $textAlign?: TextAlignType
    $fontWeight?: FontWeightType
  }>`
    height: 69px;
    min-height: 75px;
    max-height: 225px;

    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 6%);
    border-radius: 0.5em;

    margin: ${spacing.margin.none};
    padding-top: ${spacing.padding.md};
    padding-bottom: ${spacing.padding.md};

    ${mixinInput('light')};
  `
)
