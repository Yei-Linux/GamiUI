import classNames from 'classnames'
import React from 'react'
import context from '../../../context/TabProvider/context'
import useStore from '../../../hooks/useStore'
import * as S from './Tab.styles'

export interface ITabListItem {
  label: string
  tabId: string
}

const TabListItem = ({ label, tabId }: ITabListItem) => {
  const { tabIdSelected, setTabIdSelected } = useStore({ context: context })

  return (
    <S.TabItem
      className={classNames({ active: tabId == tabIdSelected })}
      onClick={() => setTabIdSelected(tabId)}
    >
      {label}
    </S.TabItem>
  )
}

export default TabListItem
