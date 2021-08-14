import React from 'react'
import TabProvider from '../../../context/TabProvider'
import * as S from './Tab.styles'
import TabContent from './TabContent'
import TabContentItem from './TabContentItem'
import TabList from './TabList'
import TabListItem from './TabListItem'

export interface ITab {
  children: React.ReactNode
  defaultActiveTab: string
}

const Tab = ({ children, defaultActiveTab }: ITab) => {
  return (
    <TabProvider defaultActiveTab={defaultActiveTab}>
      <S.Tab>{children}</S.Tab>
    </TabProvider>
  )
}

Tab.List = TabList
Tab.ListItem = TabListItem
Tab.Content = TabContent
Tab.ContentItem = TabContentItem

Tab.defaultProps = {}

export default Tab
