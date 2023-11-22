import React from 'react'

import Button from 'designSystem/atoms/Button'

import Number from 'designSystem/atoms/Number'
import Input from 'designSystem/atoms/Input'
import Password from 'designSystem/atoms/Password'
import Radio from 'designSystem/atoms/Radio'
import Select from 'designSystem/atoms/Select'
import TextArea from 'designSystem/atoms/TextArea'

import useCloneElement from 'hooks/useCloneElements'

import * as S from './Form.styles'

import FormError from './FormError'
import { cls } from 'core/utils/cls'
import File from 'designSystem/atoms/File'
import ColorPicker from 'designSystem/atoms/ColorPicker'
import DatePicker from 'designSystem/atoms/DatePicker'
import { FormCustomField } from './FormCustomField'

export type TRulesType =
  | 'required'
  | 'email'
  | 'maxNumber'
  | 'minNumber'
  | 'minLength'
  | 'maxLength'
  | 'custom'

export interface IRules {
  fn?: (value: any, formValues: any) => boolean
  type: TRulesType
  message: string
  value?: number
}

export interface IFormItemTemplate {
  label?: string
  name: string
  children: React.ReactNode
  rules?: IRules[]
  onChange?: (value: any) => void

  fnSetValuesStore: (value: any) => any
  fnGetErrors: () => any
  fnGetValue: () => string
}

const FormItemTemplate = ({
  label = '',
  name,
  children,
  onChange,
  fnSetValuesStore,
  fnGetErrors,
  fnGetValue,
}: IFormItemTemplate) => {
  const handleChangeValue = (value: any): void => {
    const valueTransformed = fnSetValuesStore(value)

    onChange?.(valueTransformed)
  }

  const { validatorChildrenLength, childrenWithProps } = useCloneElement({
    children,
    propsElement: {
      name,
      value: fnGetValue(),
      onChangeFormItem: handleChangeValue,
    },
    maxChildrenNumber: 1,
    advancedOptions: {
      propsOfElement: [{ props: {}, childrenConditionTypes: [Button] }],
    },
    childrenTypes: [
      FormCustomField,
      Input,
      Password,
      TextArea,
      Select,
      Radio,
      Number,
      Button,
      File,
      ColorPicker,
      DatePicker,
    ],
  })

  if (validatorChildrenLength(childrenWithProps)) {
    return null
  }

  const hasErrors = fnGetErrors()

  return (
    <S.FormItem
      className={cls('test', {
        error: !!hasErrors,
      })}
    >
      {label != '' && (
        <S.FormLabel
          fontWeight="semibold"
          text={label}
          width="auto"
          height="auto"
          rounded="none"
        />
      )}
      {childrenWithProps}
      <FormError name={name} />
    </S.FormItem>
  )
}

export default FormItemTemplate
