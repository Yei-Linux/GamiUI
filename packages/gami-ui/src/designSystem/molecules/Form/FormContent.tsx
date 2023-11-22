import { IDynamicObjectWithField } from 'core/domain/interfaces/common'
import React, { useEffect } from 'react'

import useFormStore from 'hooks/store/useFormStore'
import useGenerateYupSchema from 'hooks/useGenerateYupSchema'
import useYupValidation, { TYupSchema } from 'hooks/useYupValidation'

import { IFormProps } from './Form'

import * as S from './Form.styles'

const FormContent = ({ children, onSubmitForm, form, ...args }: IFormProps) => {
  const {
    yupSchema,
    formValue,
    setCallbacks,
    setYupSchema,
    onClickSubmit,
    setInitialFormValues,
  } = useFormStore()
  const { buildingYupSchema } = useGenerateYupSchema({ children })

  const { validate } = useYupValidation({ schema: yupSchema as TYupSchema })

  useEffect(() => {
    setCallbacks({
      onFinish: (values: IDynamicObjectWithField) => {
        onSubmitForm?.(values)
      },
    })

    const yupSchema = buildingYupSchema()
    setYupSchema(yupSchema)
  }, [])

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault()

    const error = validate(formValue ?? {})

    if (error) return false

    onClickSubmit(formValue)
    return true
  }

  useEffect(() => {
    form?.update(formValue)
  }, [formValue])

  useEffect(() => {
    if (!form?.value) return
    setInitialFormValues(form.value)
  }, [])

  //TODO: Improve this validation
  useEffect(() => {
    if (!form?.isValidating) return
    const isValid = handleSubmit()
    form.updateValid(isValid)
    form.completeValidate()
  }, [form?.isValidating])

  return (
    <S.Form onSubmit={handleSubmit} {...args}>
      {children}
    </S.Form>
  )
}

export default FormContent
