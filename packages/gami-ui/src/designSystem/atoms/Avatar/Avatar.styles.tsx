import { css } from '@emotion/react'
import styled from '@emotion/styled'
import Row from 'designSystem/layouts/Row'
import { ICustomTheme } from 'providers/ThemeGamification/ThemeGamification'
import { mixinFlexVariants } from 'styles/mixins/flex'
import { InheritGlobalStylesComponent } from 'styles/utilities/commonComponent'
import { validatorProperty } from 'styles/utilities/validatorsCss'

const valideZoomMode = () => css`
  &.zoom__outside,
  &.zoom__inside {
    transition: transform 0.2s;
  }
  &.zoom__outside:hover {
    transform: scale(1.2);
  }
  &.zoom__inside:hover {
    transform: scale(0.8);
  }
`

export const Avatar = InheritGlobalStylesComponent(
  styled.div<{
    $borderColor?: string
    $background?: string
    $textColor?: string
    theme?: ICustomTheme
  }>`
    width: ${({ theme }) => theme.tokens.sizes.components.avatar.md};
    height: ${({ theme }) => theme.tokens.sizes.components.avatar.md};

    background: ${({ $background }) => $background};
    overflow: hidden;

    ${({ $textColor }) => validatorProperty('color', $textColor)}
    ${({ $borderColor }) =>
      validatorProperty('border-color', `1px solid ${$borderColor}`)}

  ${valideZoomMode()}

  ${mixinFlexVariants({ justifyContent: 'center', alignItems: 'center' })};

    &:hover {
      cursor: pointer;
    }
  `,
  'avatar'
)

export const AvatarGroup = styled(Row)`
  ${Avatar} {
    margin-left: -5px;
  }
`

export const Count = styled(Row)`
  width: 30px;
  height: 100%;
  margin-left: 0.4rem;
  font-weight: bold;
`
