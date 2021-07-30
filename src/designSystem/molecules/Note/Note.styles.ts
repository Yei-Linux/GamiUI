import styled from '@emotion/styled'
import { colorLight } from '../../../styles/theme'
import { twinStyles } from '../../../styles/utilities/twinStyles'

export const NoteAddWrapper = styled.div`
  padding: 1rem 0;
`

export const NotesLayoutWrapper = styled.div<{
  maxHeight?: string
}>`
  padding: 1rem 0;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));

  max-height: ${(props) => props.maxHeight};
  overflow: auto;

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    background: #ffffff8a;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${colorLight.primary.oneLight};
    border-radius: 20px;
  }
`

export const NoteWrapper = styled.div<{
  border?: string
  shadow?: string
  background?: string
}>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  min-height: 300px;
  overflow: hidden;
  background-color: ${(props) => props.background};

  ${(props) => twinStyles({ border: props.border, shadow: props.shadow })};
`

export const NoteBody = styled.div``

export const NoteTitle = styled.div<{
  padding?: string
  background?: string
}>`
  padding: ${(props: any) => props.padding};
  border-bottom: 1px solid ${colorLight.neutral.eight};

  input {
    background-color: ${(props) => props.background};
  }
`

export const NoteContainer = styled.div<{
  padding?: string
}>`
  padding: ${(props: any) => props.padding};
`

export const NoteFooter = styled.div`
  padding: 1rem;
`
