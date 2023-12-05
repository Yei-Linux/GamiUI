import context from 'context/TabProvider/context'
import useStore from 'hooks/useStore'
import React, { useRef, useCallback } from 'react'
import * as S from './Tab.styles'
import { TabAnimation } from './TabAnimation'

export interface TabListProps {
  children: React.ReactNode
  preffixContent?: React.ReactNode
  suffixContent?: React.ReactNode
}

const TabList = ({ children, preffixContent, suffixContent }: TabListProps) => {
  const tabListRef = useRef<HTMLUListElement | null>(null)
  const { tabIdSelected } = useStore({ context: context })

  const getWidthTabSelected = useCallback(() => {
    const tabList = tabListRef.current

    if (!tabList) return 0

    const tabListItemSelected = tabList.childNodes.item(tabIdSelected.index)

    if (!tabListItemSelected) return 0

    const width = (tabListItemSelected as HTMLElement).clientWidth

    return width
  }, [tabListRef, tabIdSelected])

  const tabListItemSelectedWith = getWidthTabSelected()

  const computeLeftPosition = () => {
    const currentTabIndex = tabIdSelected.index
    if ([undefined, null].includes(currentTabIndex)) return '0px'

    const leftPosition = `${tabListItemSelectedWith * currentTabIndex}px`

    return leftPosition
  }

  return (
    <S.TabListWrapper>
      {preffixContent}
      <S.TabList ref={tabListRef}>
        {React.Children.map(children, (child: any, index: number) =>
          React.cloneElement(child, {
            ...child.props,
            index,
          })
        )}
        <TabAnimation
          left={computeLeftPosition()}
          width={tabListItemSelectedWith}
        />
      </S.TabList>
      {suffixContent}
    </S.TabListWrapper>
  )
}

export default TabList
