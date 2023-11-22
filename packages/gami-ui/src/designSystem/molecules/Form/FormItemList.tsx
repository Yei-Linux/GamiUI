import { useFormStore } from 'hooks/index'
import React from 'react'
import FormItemTemplate, { IFormItemTemplate } from './FormItemTemplate'

export type IFormItemList = Omit<
  IFormItemTemplate,
  'fnSetValuesStore' | 'fnGetErrors' | 'fnGetValue'
> & {
  fieldListName: string
  fieldItemName: string
}

const FormItemList = ({
  fieldListName,
  fieldItemName,
  ...props
}: IFormItemList) => {
  const { formValue, setFormValues, yupErrors } = useFormStore()
  const listValue: any[] = formValue[fieldListName] ?? []

  const fnSetValuesStore = (value: any) => {
    const listUpdated = listValue.map((item, index) =>
      `${fieldListName}_${index}` === fieldItemName
        ? { ...item, [props.name]: value }
        : item
    )

    const valueTransformed = value === null ? undefined : value
    setFormValues({ name: fieldListName, value: listUpdated })

    return valueTransformed
  }

  const fnGetErrors = () => {
    return yupErrors?.[fieldListName]
  }

  const fnGetValue = () => {
    const fieldItemFound = listValue.find(
      (_, index) => `${fieldListName}_${index}` === fieldItemName
    )

    if (!fieldItemFound) return ''

    const fieldItemValueByKey = fieldItemFound[props.name]
    return fieldItemValueByKey ?? ''
  }

  return (
    <FormItemTemplate
      {...props}
      fnSetValuesStore={fnSetValuesStore}
      fnGetErrors={fnGetErrors}
      fnGetValue={fnGetValue}
    />
  )
}

export default FormItemList
