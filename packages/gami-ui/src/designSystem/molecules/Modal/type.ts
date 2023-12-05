import { IGenericEvents } from 'core/domain/interfaces/IGeneralProps'
import { TDesignTokens, TDesignUI } from 'core/domain/types/design-system'

type TModal = {
  /**
   * Content Modal
   */
  children: React.ReactNode
  /**
   * Header Modal
   */
  title?: React.ReactNode
  /**
   * Optional Footer
   */
  footer?: React.ReactNode
  /**
   * Visible flag
   */
  visible: boolean
  /**
   * Close Event
   */
  onClose: () => void
  /**
   * MinHeight
   */
  minHegiht?: string
}

export type TModalComponent = TModal &
  Pick<TDesignTokens, 'rounded' | 'padding' | 'shadow'> &
  TDesignUI &
  IGenericEvents
