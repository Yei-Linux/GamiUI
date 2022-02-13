import React from 'react'

import Button from 'designSystem/atoms/Button'
import Number from 'designSystem/atoms/Number'
import Input from 'designSystem/atoms/Input'
import Password from 'designSystem/atoms/Password'
import Radio from 'designSystem/atoms/Radio'
import Select from 'designSystem/atoms/Select'
import Switch from 'designSystem/atoms/Switch'
import TextArea from 'designSystem/atoms/TextArea'

import useFormStore from 'hooks/store/useFormStore'
import useCloneElement from 'hooks/useCloneElements'

import * as S from './Form.styles'

import FormError from './FormError'

export type TRulesType = 'required' | 'email' | 'maxNumber' | 'minNumber'

export interface IRules {
  type: TRulesType
  message: string
  value?: number
}

export interface IFormItem {
  label?: string
  name: string
  children: React.ReactNode
  rules?: IRules[]
}

const FormItem = ({ label = '', name, children }: IFormItem) => {
  const { formValue, setFormValues } = useFormStore()

  const handleChangeValue = (value: any): void => setFormValues({ name, value })

  const { validatorChildrenLength, childrenWithProps } = useCloneElement({
    children,
    propsElement: {
      name,
      value: formValue?.[name] ?? '',
      onChangeFormItem: handleChangeValue,
    },
    maxChildrenNumber: 1,
    advancedOptions: {
      propsOfElement: [{ props: {}, childrenConditionTypes: [Button] }],
    },
    childrenTypes: [
      Input,
      Password,
      TextArea,
      Select,
      Radio,
      Number,
      Switch,
      Button,
    ],
  })

  if (validatorChildrenLength(childrenWithProps)) {
    return null
  }

  return (
    <S.FormItem>
      {label != '' && (
        <S.FormLabel
          fontWeight="semibold"
          text={label}
          width="auto"
          height="auto"
          border="none"
        />
      )}
      {childrenWithProps}
      <FormError name={name} />
    </S.FormItem>
  )
}

export default FormItem
