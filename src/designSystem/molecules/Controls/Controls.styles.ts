import styled from '@emotion/styled'
import { colorLight } from '../../../styles/theme'

export const ControlsWrapper = styled.div<{ maxWidth?: string }>`
  padding: 1rem;
  width: fit-content;
  max-width: ${(props) => props.maxWidth};
`

export const ControlsItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 1rem;
`

export const ControlsTitle = styled.div``

export const ControlsItemBox = styled.div`
  background-color: ${colorLight.secondary.three};
  border-radius: 15em;
  padding: 5px;
  width: fit-content;
  margin: 3px;

  min-width: 30px;
`
