import { IGenericEvents } from 'core/domain/interfaces/IGeneralProps'
import {
  TComponentEvents,
  TDesignTokens,
  TDesignUI,
} from 'core/domain/types/design-system'

export type TFooter = {
  children: React.ReactNode
} & TDesignUI &
  IGenericEvents

export type TCover = {
  children: React.ReactNode
} & TDesignUI &
  IGenericEvents

export type TContent = {
  title: React.ReactNode
  description: React.ReactNode
} & IGenericEvents &
  TDesignUI

export type TCard = {
  /**
   * Content Card to show
   */
  children: React.ReactNode
}

export type TCardComponent = TCard &
  TDesignTokens &
  TDesignUI &
  TComponentEvents<any, any>
