import { TInput, TInputComponent } from '../Input/type'

export type TPassword = {
  /**
   * Icon for visible action
   */
  iconVisible?: React.ReactNode
  /**
   * Icon for hide action
   */
  iconHide?: React.ReactNode
}

export type TPasswordComponent = TPassword & TInputComponent
