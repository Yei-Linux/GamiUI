import { IGenericEvents } from 'core/domain/interfaces/IGeneralProps'
import { TDesignUI } from 'core/domain/types/design-system'

export type TLayoutTypes = 'header' | 'main' | 'sidebar' | 'footer' | 'wrapper'

export type TLayoutElement = {
  /**
   * Children Prop
   */
  children: React.ReactNode
} & TDesignUI &
  IGenericEvents

export type THeader = {
  /**
   * Children Prop
   */
  isSticky?: boolean
} & TLayoutElement

export type TLayout = {
  /**
   * Children Prop
   */
  children: React.ReactNode[]
  /**
   * width Prop
   */
  width?: string
  /**
   * height Prop
   */
  height?: string
  /**
   * minHeight Prop
   */
  minHeight?: string
} & TDesignUI
