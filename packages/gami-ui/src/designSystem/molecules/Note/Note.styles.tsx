import styled from '@emotion/styled'
import { BorderType, ShadowType } from 'core/domain/types'
import { mixinFlexVariants } from 'styles/mixins/flex'
import { mixinScroll } from 'styles/mixins/scroll'
import { spacing, defaultTheme } from 'styles/tokens'
import { setGenericPropStyles } from 'styles/utilities/genericPropStyles'

export const NoteAdd = styled.div`
  padding: 1rem 0;
`

export const NotesLayout = styled.div<{
  $maxHeight?: string
}>`
  padding: 1rem 0;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

  max-height: ${({ $maxHeight }) => $maxHeight};
  overflow: auto;

  ${mixinScroll('light')}
`

export const Note = styled.div<{
  $border?: BorderType
  $shadow?: ShadowType
  $background?: string
}>`
  ${mixinFlexVariants({ justifyContent: 'space-between' })}
  flex-direction: column;

  min-height: 300px;
  overflow: hidden;
  background-color: ${({ $background }) => $background};

  ${({ $border, $shadow }) =>
    setGenericPropStyles({
      border: $border || 'lg',
      shadow: $shadow || 'md',
    })};
`

export const NoteBody = styled.div``

export const NoteTitle = styled.div<{
  $padding?: string
  $background?: string
}>`
  padding: ${({ $padding }) => $padding};
  border-bottom: 1px solid ${defaultTheme.light.neutral[700]};

  input {
    background-color: ${({ $background }) => $background};
  }
`

export const NoteContainer = styled.div<{
  $padding?: string
}>`
  padding: ${({ $padding }) => $padding};
`

export const NoteFooter = styled.div`
  padding: ${spacing.padding.md};
`
