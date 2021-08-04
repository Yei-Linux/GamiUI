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
}

const Controls = ({ controlItems, controlTitle }: IControls) => {
  return (
    <ControlsWrapper>
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
