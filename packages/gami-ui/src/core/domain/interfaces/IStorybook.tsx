import { TDynamicFields, TJSXElements } from './common'

export interface IExample {
  label: string
  value: unknown
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

export interface IParentVariant {
  label: string
  value: any[]
}

export interface IStoryConfig {
  storyName: string
  self?: IStoryElement<IVariants>
  parent?: IStoryElement<IParentVariant[]>
}

export interface IStoryMainConfig {
  title: string
  component: TJSXElements
  args: TDynamicFields
  argTypes: TDynamicFields
}

export interface IStoryConfigStructure {
  mainConfig: IStoryMainConfig
  component: TJSXElements
  parentComponent?: TJSXElements
  storiesInheritGlobalStyles: IStoryConfig[]
  storiesComponent: IStoryConfig[]
}
