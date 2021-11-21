import styled from '@emotion/styled'
import { mixinDescription } from 'styles/mixins/fonts'
import { mixinWidth } from 'styles/mixins/width'
import RichText from '../RichText'

export const Empty = styled.div`
  ${mixinWidth('full')}
`

export const Text = styled(RichText)`
  ${mixinDescription('light')}
`
