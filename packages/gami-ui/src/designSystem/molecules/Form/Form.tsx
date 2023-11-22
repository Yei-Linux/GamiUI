import React from 'react'
import FormProvider from 'context/FormProvider'
import { IGeneralProps } from 'core/domain/interfaces/IGeneralProps'
import FormContent from './FormContent'
import FormItem from './FormItem'
import { TFormValues, useForm } from 'hooks/useForm'
import { FormCustomField } from './FormCustomField'
import FormList from './FormList'

export interface IFormProps extends IGeneralProps {
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

const Form = ({ children, onSubmitForm, ...args }: IFormProps) => {
  return (
    <FormProvider>
      <FormContent onSubmitForm={onSubmitForm} {...args}>
        {children}
      </FormContent>
    </FormProvider>
  )
}

Form.FormCustomField = FormCustomField
Form.Item = FormItem
Form.useForm = useForm
Form.List = FormList

export default Form
