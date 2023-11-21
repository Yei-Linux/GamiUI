import { DesignTypes, DynamicDesignTypes } from '../types'
import { TDynamicFields, TJSXElements } from './common'

export interface IExample {
  label: string
  value: unknown
  customComponent?: TDynamicFields
  customProps?: TDynamicFields
}

export interface IVariants {
  examples: IExample[]
  field: string
}

export interface IStoryElement<T> {
  args: TDynamicFields
  variants: T
}

export interface IParentChildrenArgs {
  props: TDynamicFields
  Component: React.ElementType
}

export interface IParentVariant {
  label: string
  value: IParentChildrenArgs[]
}

export type TDesignTypes = keyof DesignTypes
export type TMergeAllDesignTypes = TDesignTypes & DynamicDesignTypes
export interface IDesignValues {
  args: TDynamicFields
  examples?: string[]
  wrapper?: (content: React.ReactNode) => React.ReactNode
}

export type IStoryInheritGlobalStyles = Record<
  TMergeAllDesignTypes,
  IDesignValues | null
>

export interface IStoryConfig {
  storyName: string
  self?: IStoryElement<IVariants>
  parent?: IStoryElement<IParentVariant[]>
  wrapper?: (content: React.ReactNode) => React.ReactNode
}

export interface IStoryMainConfig {
  title: string
  component: TJSXElements
  args: TDynamicFields
  argTypes: TDynamicFields
  parameters?: TDynamicFields
}

export interface IStoryConfigStructure {
  mainConfig: IStoryMainConfig
  component: TJSXElements
  parentComponent?: TJSXElements
  storiesInheritGlobalStyles?: IStoryConfig[]
  storiesComponent: IStoryConfig[]
  customStories?: React.ReactElement[] | null
  customPropsStoryWrapper?: TDynamicFields
}
