import { IGenericEvents } from 'core/domain/interfaces/IGeneralProps'
import { DrawerPlacementTypes } from 'core/domain/types'
import { TDesignUI } from 'core/domain/types/design-system'

export type TDrawer = {
  /**
   * Children Content
   */
  children?: React.ReactNode
  /**
   * Open or not of drawer
   */
  open?: boolean
  /**
   * Has Mask
   */
  withMask?: boolean
  /**
   * Custom Icon
   */
  customCloseIcon?: React.ReactNode | null
  /**
   * Has Close Icon
   */
  hasCloseIcon?: boolean
  /**
   * Height
   */
  height?: number
  /**
   * Width
   */
  width?: number
  /**
   * ZIndex
   */
  zIndex?: number
  /**
   * Placemente Drawer
   */
  placement?: DrawerPlacementTypes
  /**
   * Action on close drawer
   */
  onClose?: () => void
}

export type TDrawerComponent = TDrawer & TDesignUI & IGenericEvents
