import classNames from 'classnames'
import React from 'react'
import {
  Section,
  SubtitleContainer,
  TitleContainer,
} from 'styles/utilities/commonComponent'

import * as S from './List.styles'

type TItemId = string | number | undefined

export interface IListItem {
  id?: TItemId
  children?: React.ReactNode
  avatar?: React.ReactNode
  title?: React.ReactNode
  description?: React.ReactNode
  hasAllBorder?: boolean
  onClick?: (value: TItemId) => void
  isSelected?: boolean
  noBorder?: boolean
}

const ListItem = ({
  id,
  children,
  avatar,
  title,
  description,
  hasAllBorder,
  onClick,
  isSelected = false,
  noBorder = false,
}: IListItem) => {
  const handleClickItem = () => onClick?.(id)

  return (
    <S.ListItem
      className={classNames({
        selected: isSelected,
        allborder: hasAllBorder,
        halfborder: hasAllBorder,
        noborder: noBorder,
      })}
      onClick={handleClickItem}
    >
      <Section>
        <S.ListItemChild>{avatar}</S.ListItemChild>
        <S.ListItemChild>
          <TitleContainer>{title}</TitleContainer>
          <SubtitleContainer>{description}</SubtitleContainer>
        </S.ListItemChild>
      </Section>
      <Section>
        <S.ListItemChild>{children}</S.ListItemChild>
      </Section>
    </S.ListItem>
  )
}

export default ListItem
