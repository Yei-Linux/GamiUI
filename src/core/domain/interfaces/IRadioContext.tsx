export interface ISetRadioSelected {
  text: string
  value: string
}

export interface IRadioInitialState {
  radioSelected: ISetRadioSelected | null
}

export interface IRadioContext extends IRadioInitialState {
  setRadioSelected: (data: ISetRadioSelected) => void
}
