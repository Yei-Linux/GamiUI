import React, { useEffect } from 'react'
import FormProvider from '../../../context/FormProvider'
import context from '../../../context/FormProvider/context'
import { IGeneralProps } from '../../../core/domain/interfaces/IGeneralProps'
import useCloneElement from '../../../hooks/useCloneElements'
import useStore from '../../../hooks/useStore'
import useYupValidation from '../../../hooks/useYupValidation'
import Button from '../../atoms/Button'
import Input from '../../atoms/Input'
import Number from '../../atoms/Number'
import Password from '../../atoms/Password'
import Radio from '../../atoms/Radio'
import Select from '../../atoms/Select'
import Switch from '../../atoms/Switch'
import TextArea from '../../atoms/TextArea'

import * as S from './Form.styles'

export interface FormProps extends IGeneralProps {
  onSubmitForm?: any
  children: React.ReactNode
}

const FormContent = ({ children, onSubmitForm = null, ...args }: FormProps) => {
  const { formValue, setCallbacks, onClickSubmit } = useStore({ context })

  const { buildingYupSchema } = useYupValidation()

  useEffect(() => {
    setCallbacks({
      onFinish: (values: any) => {
        onSubmitForm(values)
      },
    })

    const yupSchema = buildingYupSchema(children)
    console.log(yupSchema)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onClickSubmit(formValue)
  }

  return (
    <S.Form onSubmit={handleSubmit} {...args}>
      {children}
    </S.Form>
  )
}

const Form = ({ children, onSubmitForm, ...args }: FormProps) => {
  return (
    <FormProvider>
      <FormContent onSubmitForm={onSubmitForm} {...args}>
        {children}
      </FormContent>
    </FormProvider>
  )
}

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

Form.Item = ({ label = '', name, children }: IFormItem) => {
  const { formValue, setFormValues } = useStore({ context })

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
    </S.FormItem>
  )
}

Form.defaultProps = {}

export default Form
