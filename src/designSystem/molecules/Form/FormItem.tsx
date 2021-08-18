import React from 'react';
import useFormStore from '../../../hooks/store/useFormStore';
import useCloneElement from '../../../hooks/useCloneElements';

import * as S from './Form.styles'

import Button from '../../atoms/Button'
import Input from '../../atoms/Input'
import Number from '../../atoms/Number'
import Password from '../../atoms/Password'
import Radio from '../../atoms/Radio'
import Select from '../../atoms/Select'
import Switch from '../../atoms/Switch'
import TextArea from '../../atoms/TextArea'
import FormError from './FormError';

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
  
    const handleChangeValue = (value: any): void => {
      setFormValues({ name, value })
    }
  
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
            fontWeight="SEMIBOLD"
            text={label}
            width="NONE"
            heigth="NORMAL"
            border="NONE"
          />
        )}
        {childrenWithProps}
        <FormError name={name} />
      </S.FormItem>
    )
  }
 
export default FormItem;

