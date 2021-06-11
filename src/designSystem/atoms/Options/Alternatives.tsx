import React, { Fragment } from 'react'
import Spacer from '../../layouts/Spacer'
import List from '../../molecules/List'
import Icon from '../Icon'

export interface IAlternativeIcon {
  name: string
  fill: string
  size: string
}

export interface IAlternative {
  label: string
  value: string
  icon: IAlternativeIcon
}

export interface IAlternativesProps {
  alternatives?: IAlternative[]
}

const Alternatives = ({ alternatives = [] }: IAlternativesProps) => {
  return (
    <List shadow="NONE">
      {alternatives?.map((alternative: IAlternative, index: number) => (
        <Fragment key={index}>
          <List.Item
            hasAllBorder
            avatar={
              <Icon
                name={alternative?.icon?.name}
                fill={alternative?.icon?.fill}
                size={alternative?.icon?.size}
              />
            }
            title={alternative?.label}
          />
          <Spacer direction="bottom" />
        </Fragment>
      ))}
    </List>
  )
}

export default Alternatives
