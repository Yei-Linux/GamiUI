import styled from '@emotion/styled'
import {
  RoundedType,
  FontWeightType,
  HeightType,
  ShadowType,
  TextAlignType,
  WidthType,
} from 'core/domain/types'
import Container from 'designSystem/layouts/Container'
import { flex } from 'styles/mixins/flex'
import { mixinInput } from 'styles/mixins/input'
import { spacing } from 'styles/tokens'
import { WithDesignStyledComponent } from 'styles/utilities/commonComponent'

export const Input = styled.input`
  padding-top: ${spacing.padding.md};
  padding-bottom: ${spacing.padding.xs};

  ${mixinInput('light', '')}
`

export const PrefixContainer = styled(Container)`
  margin-bottom: 5px;
`

export const InputBox = WithDesignStyledComponent(
  styled.div<{
    $border?: RoundedType
    $shadow?: ShadowType
    $fontWeight?: FontWeightType
    $width?: WidthType
    $height?: HeightType
    $textAlign?: TextAlignType
  }>`
    overflow: hidden;
    background: white;
    ${flex({ alignItems: 'flex-end' })}
    max-width: 300px;

    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 6%);
    border-radius: 0.5em;

    input[type='password'] {
      font-family: system-ui !important;
    }

    &.positionPrefixRight {
      flex-direction: row-reverse;
      justify-content: space-between;
      padding-right: 0.5rem;

      input {
        margin-right: ${spacing.padding.sm};
      }
    }

    &.positionPrefixLeft {
      flex-direction: row;
      padding-left: 0.5rem;

      input {
        margin-left: ${spacing.padding.sm};
      }
    }
  `
)
