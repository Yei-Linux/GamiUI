import React from 'react'
import FormProvider from 'context/FormProvider'
import { IGeneralProps } from 'core/domain/interfaces/IGeneralProps'
import FormContent from './FormContent'
import FormItem from './FormItem'

export interface IFormProps extends IGeneralProps {
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

Form.Item = FormItem

export default Form
