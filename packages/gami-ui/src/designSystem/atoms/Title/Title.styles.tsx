import styled from '@emotion/styled'
import { PartialBy } from 'core/domain/types/mixins'
import { TWithGlobalStylesUI, withGlobalStylesUI } from 'core/utils/base'

type TTitleStyled = PartialBy<TWithGlobalStylesUI, 'theme'>
export const TitleStyled = styled('div')((prop: TTitleStyled) =>
  withGlobalStylesUI(prop)('text')
)
