import React from 'react'
import Title from '../../atoms/Title'
import {
  ControlsItemBox,
  ControlsItemContainer,
  ControlsTitle,
  ControlsWrapper,
} from './Controls.styles'

export interface IControls {
  controlItems: React.ReactNode[]
  controlTitle: string
  maxWidth?: string
}

const Controls = ({
  controlItems,
  controlTitle,
  maxWidth = 'none',
}: IControls) => {
  return (
    <ControlsWrapper maxWidth={maxWidth}>
      <ControlsTitle>
        <Title textAlign="CENTER" level="h3">
          {controlTitle}
        </Title>
      </ControlsTitle>
      <ControlsItemContainer>
        {controlItems?.map((item: React.ReactNode, index: number) => (
          <ControlsItemBox key={index}>{item}</ControlsItemBox>
        ))}
      </ControlsItemContainer>
    </ControlsWrapper>
  )
}

Controls.defaultProps = {}

export default Controls
