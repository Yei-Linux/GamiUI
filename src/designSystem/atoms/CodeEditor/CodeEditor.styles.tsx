import styled from '@emotion/styled'
import { mixinWidth } from 'styles/mixins/width'

export const CodeEditor = styled.div<{ $maxWidth: string }>`
  max-width: ${({ $maxWidth }) => $maxWidth};
  ${mixinWidth('full')}
`
