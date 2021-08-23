import React, { Fragment } from 'react'
import Spacer from 'designSystem/layouts/Spacer'
import List from 'designSystem/molecules/List'
import Icon from '../../atoms/Icon'
import { THandleChangeOption } from './Options'
import { IOnlyIcon } from '../../atoms/Icon/Icon'

export interface IAlternative {
  label: string
  value: string
  icon: IOnlyIcon
}

export interface IAlternativesProps {
  answer: number
  alternatives: IAlternative[]
  onChangeOption?: THandleChangeOption
}

const Alternatives = ({
  answer,
  alternatives = [],
  onChangeOption,
}: IAlternativesProps) => {
  return (
    <List shadow="none">
      {alternatives.map(
        (
          { icon: { name, fill, size }, label }: IAlternative,
          index: number
        ) => (
          <Fragment key={index}>
            <List.Item
              id={index}
              isSelected={answer === index}
              onClick={onChangeOption}
              hasAllBorder
              avatar={<Icon name={name} fill={fill} size={size} />}
              title={label}
            />
            <Spacer direction="bottom" />
          </Fragment>
        )
      )}
    </List>
  )
}

export default Alternatives
