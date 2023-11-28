import { TDesignUI } from 'core/domain/types/design-system'

export type TBehavior = 'glass' | 'none'

export type TWrapper = {
  behavior?: 'glass' | 'none'
  minHeight?: string
  isLoading: boolean
  loaderNode: React.ReactNode
  children?: React.ReactNode
  className?: string
  as?: keyof JSX.IntrinsicElements
}

export type TLoaderTypes = 'default' | 'points' | 'spinner'
export type TLoaderType = {
  background: string
}

export type TLoader = {
  /**
   * Prop Of Loader
   */
  type: TLoaderTypes
  /**
   * Background color
   */
  background?: string
}

export type TLoaderComponent = TLoader & TDesignUI
