import { IGenericEvents } from 'core/domain/interfaces/IGeneralProps'
import { TDesignUI } from 'core/domain/types/design-system'
import { TOnChangeFormItem } from 'designSystem/atoms/Input/type'
import { TFormValues } from 'hooks/useForm'

export type TFieldItem = { key: number; name: string }

export type TFormList = Omit<TFormItem, 'rules' | 'onChange' | 'children'> & {
  schema: string[]
  children: (
    fields: TFieldItem[],
    add: () => void,
    remove: (fieldItemName: string) => void
  ) => React.ReactNode
}

export type TFormItemList = Omit<
  TFormItemTemplate,
  'fnSetValuesStore' | 'fnGetErrors' | 'fnGetValue'
> & {
  fieldListName: string
  fieldItemName: string
}

export type TRulesType =
  | 'required'
  | 'email'
  | 'maxNumber'
  | 'minNumber'
  | 'minLength'
  | 'maxLength'
  | 'custom'

export type TRules = {
  fn?: (value: any, formValues: any) => boolean
  type: TRulesType
  message: string
  value?: number
}

export type TFormItemTemplate = {
  label?: string
  name: string
  children: React.ReactNode
  rules?: TRules[]
  onChange?: (value: any) => void

  fnSetValuesStore: (value: any) => any
  fnGetErrors: () => any
  fnGetValue: () => string
}

export type TFormItem = Omit<
  TFormItemTemplate,
  'fnSetValuesStore' | 'fnGetErrors' | 'fnGetValue'
>

export type TFormCustomFieldType = 'string' | 'number' | 'object'

export type TFormCustomField = {
  /**
   * Type
   */
  type: TFormCustomFieldType
  /**
   * Render
   */
  render: (props: {
    onChangeFormItem?: TOnChangeFormItem
    value?: any
  }) => React.ReactNode
  /**
   * Function to detect changes
   */
  onChangeFormItem?: TOnChangeFormItem
  /**
   * Value Input
   */
  value?: any
}

export type TForm = {
  /**
   * Action on form info
   */
  form?: TFormValues
  /**
   * Action on submit info
   */
  onSubmitForm?: (values: any) => void
  /**
   * Form Content
   */
  children: React.ReactNode
}

export type TFormComponent = TForm & TDesignUI & IGenericEvents
