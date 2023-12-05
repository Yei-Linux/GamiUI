import styled from '@emotion/styled'
import { OnlyTheme } from 'core/domain/types/mixins'
import { withGlobalStylesUI } from 'core/utils/base'

type TRichTextStyled = OnlyTheme
export const RichTextStyled = styled('div')((prop: TRichTextStyled) =>
  withGlobalStylesUI(prop)('text')
)
