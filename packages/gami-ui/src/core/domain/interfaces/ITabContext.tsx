import { ITabSelected } from 'context/TabProvider'

export interface ITabInitialState {
  tabIdSelected: string
  tabsAvailable: string[]
}

export interface ITabContext extends ITabInitialState {
  setTabIdSelected: (data: ITabSelected) => void
  setTabsAvailable: (data: string) => void
}
