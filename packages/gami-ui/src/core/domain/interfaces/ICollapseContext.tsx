export type TOnChangeCollapse = () => void
type TAccordion<T> = (data: T) => void

export interface ICollapseCollomsContext {
  accordion?: boolean
  animated?: boolean
  divider?: boolean
  onChange?: TOnChangeCollapse
}

export interface ICollapseContext extends ICollapseCollomsContext {
  setAccordion: TAccordion<boolean>
  setAnimated: TAccordion<boolean>
  setDivider: TAccordion<boolean>
  setOnChange: TAccordion<TOnChangeCollapse>
}
