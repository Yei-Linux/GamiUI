import { TDesignUI } from 'core/domain/types/design-system'
import { IFileViewItem } from './useFile'
import { TOnChangeFormItem } from '../Input/type'

export type TFile = {
  /**
   * Handle triggered on file updated
   */
  onChangeFormItem?: TOnChangeFormItem
  /**
   * Current files values uploaded
   */
  value?: IFileViewItem[]
  /**
   * By default IsMultiple allows load multiple files
   */
  isMultiple?: boolean
  /**
   * Is enable files preview
   */
  withPreview?: boolean
}
export type TFileComponent = TFile & Pick<TDesignUI, 'className'>
