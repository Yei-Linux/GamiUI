import { useFormStore } from 'hooks/index'
import React from 'react'
import FormItemTemplate from './FormItemTemplate'
import { TFormItem } from './type'

const FormItem = (props: TFormItem) => {
  const { formValue, setFormValues, yupErrors } = useFormStore()

  const fnSetValuesStore = (value: any) => {
    const valueTransformed = value === null ? undefined : value
    setFormValues({ name: props.name, value: valueTransformed })

    return valueTransformed
  }

  const fnGetErrors = () => yupErrors?.[props.name]

  const fnGetValue = () => formValue?.[props.name]

  return (
    <FormItemTemplate
      {...props}
      fnSetValuesStore={fnSetValuesStore}
      fnGetErrors={fnGetErrors}
      fnGetValue={fnGetValue}
    />
  )
}

export default FormItem
