import React from 'react'
import FormProvider from 'context/FormProvider'
import FormContent from './FormContent'
import FormItem from './FormItem'
import { useForm } from 'hooks/useForm'
import { FormCustomField } from './FormCustomField'
import FormList from './FormList'
import { TFormComponent } from './type'

const Form = ({ children, onSubmitForm, ...args }: TFormComponent) => {
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
