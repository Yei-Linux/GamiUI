import { cls } from 'core/utils/cls'
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
  className?: string
}

const ListItem = ({
  id,
  children,
  avatar,
  title,
  description,
  hasAllBorder = false,
  onClick,
  isSelected = false,
  noBorder = false,
  className = '',
}: IListItem) => {
  const handleClickItem = () => onClick?.(id)

  return (
    <S.ListItem
      className={cls(className, {
        selected: isSelected,
        allborder: hasAllBorder,
        halfborder: hasAllBorder,
        noborder: noBorder,
      })}
      onClick={handleClickItem}
    >
      <Section>
        {avatar && <S.ListItemChild>{avatar}</S.ListItemChild>}

        <S.ListItemChild>
          {title && <TitleContainer>{title}</TitleContainer>}
          {description && <SubtitleContainer>{description}</SubtitleContainer>}
        </S.ListItemChild>
      </Section>
      <Section>
        <S.ListItemChild>{children}</S.ListItemChild>
      </Section>
    </S.ListItem>
  )
}

export default ListItem
