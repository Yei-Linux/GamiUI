import React from 'react'
import Title from '../../atoms/Title'
import * as S from './Controls.styles'

export interface IControls {
  /**
   * Options to change
   */
  controlItems: React.ReactNode[]
  /**
   * Title of options group
   */
  controlTitle: string
  /**
   * Max width
   */
  maxWidth?: string
}

const Controls = ({
  controlItems,
  controlTitle,
  maxWidth = 'none',
}: IControls) => {
  return (
    <S.Controls $maxWidth={maxWidth}>
      <S.ControlsTitle>
        <Title textAlign="center" level="h3">
          {controlTitle}
        </Title>
      </S.ControlsTitle>

      <S.ControlsItemGroup>
        {controlItems?.map((item: React.ReactNode, index: number) => (
          <S.ControlsItem key={index}>{item}</S.ControlsItem>
        ))}
      </S.ControlsItemGroup>
    </S.Controls>
  )
}

export default Controls
