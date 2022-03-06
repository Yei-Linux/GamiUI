export type TOnChangeCollapse = () => void
type TAccordion<T> = (data: T) => void

export interface ICollapseCollomsContext {
  index?: number | null
  accordion?: boolean
  animated?: boolean
  divider?: boolean
  onChange?: TOnChangeCollapse
}

export interface ICollapseContext extends ICollapseCollomsContext {
  setIndex: TAccordion<number | null>
  setAccordion: TAccordion<boolean>
  setAnimated: TAccordion<boolean>
  setDivider: TAccordion<boolean>
  setOnChange: TAccordion<TOnChangeCollapse>
}
