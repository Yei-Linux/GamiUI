import { ObjectSchema } from 'yup'
import { IDynamicObjectWithField } from './common'

export interface IFormValueItem {
  name: string
  value: unknown
}

export interface IFormCommmonsContext {
  formValue: IDynamicObjectWithField | null
  callbacks?: IDynamicObjectWithField | null
  yupSchema: ObjectSchema<any, any, any> | null
  yupErrors: IDynamicObjectWithField | null
}

export interface IFormContext extends IFormCommmonsContext {
  setYupErrors: (data: IDynamicObjectWithField) => void
  setYupSchema: (data: ObjectSchema<any, any, any>) => void
  setFormValues: (data: IFormValueItem) => void
  setCallbacks: (data: IDynamicObjectWithField) => void
  onClickSubmit: (data: IDynamicObjectWithField) => void
}
