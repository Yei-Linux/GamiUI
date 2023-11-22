import { useFormStore } from 'hooks/index'
import React from 'react'
import * as S from './Form.styles'
import { IFormItem } from './FormItem'
import FormItemList from './FormItemList'

export type TFieldItem = { key: number; name: string }

export type IFormList = Omit<IFormItem, 'rules' | 'onChange' | 'children'> & {
  schema: string[]
  children: (
    fields: TFieldItem[],
    add: () => void,
    remove: (fieldItemName: string) => void
  ) => React.ReactNode
}

const FormList = ({ label, name, children, schema }: IFormList) => {
  const { formValue, setFormValues } = useFormStore()
  const listValue = formValue?.[name]

  const buildSchemaByItem = () => {
    return schema.reduce((acc, schemaField) => {
      return { ...acc, [schemaField]: null }
    }, {})
  }

  const get = () => {
    if (!listValue) return []
    if (!Array.isArray(listValue)) return []

    return listValue
  }

  const buildFields = (): TFieldItem[] => {
    const listValueGet = get()

    try {
      return listValueGet.map((_, index: number) => ({
        key: index,
        name: `${name}_${index}`,
      }))
    } catch (error) {
      return []
    }
  }

  const fields = buildFields()

  const add = () => {
    const listValueGet = get()
    const fieldTaxonomy = buildSchemaByItem()
    const formValueSetter = { name, value: [...listValueGet, fieldTaxonomy] }
    setFormValues(formValueSetter)
  }

  const remove = (fieldItemName: string) => {
    const listValueGet = get()
    const listValueUpdated = listValueGet.filter(
      (_, index) => `${name}_${index}` !== fieldItemName
    )

    setFormValues({ name, value: listValueUpdated })
  }

  return (
    <S.FormItem>
      {label != '' && (
        <S.FormLabel
          fontWeight="semibold"
          text={label}
          width="auto"
          height="auto"
          rounded="none"
        />
      )}
      {children(fields, add, remove)}
    </S.FormItem>
  )
}

FormList.Item = FormItemList

export default FormList
