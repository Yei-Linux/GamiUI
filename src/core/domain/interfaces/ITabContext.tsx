export interface ITabInitialState {
  tabIdSelected: string
}

export interface ITabContext extends ITabInitialState {
  setTabIdSelected: (data: string) => void
}
