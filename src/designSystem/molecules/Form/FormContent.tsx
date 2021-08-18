import React, { useEffect } from 'react'

import useFormStore from '../../../hooks/store/useFormStore'
import useGenerateYupSchema from '../../../hooks/useGenerateYupSchema'
import useYupValidation, { TYupSchema } from '../../../hooks/useYupValidation'
import { IFormProps } from './Form'

import * as S from './Form.styles'

const FormContent = ({
  children,
  onSubmitForm = null,
  ...args
}: IFormProps) => {
  const { yupSchema, formValue, setCallbacks, setYupSchema, onClickSubmit } =
    useFormStore()
  const { buildingYupSchema } = useGenerateYupSchema({ children })

  const { validate } = useYupValidation({ schema: yupSchema as TYupSchema })

  useEffect(() => {
    setCallbacks({
      onFinish: (values: any) => {
        onSubmitForm(values)
      },
    })

    const yupSchema = buildingYupSchema()
    setYupSchema(yupSchema)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const error = validate(formValue)

    if (error) return

    onClickSubmit(formValue)
  }

  return (
    <S.Form onSubmit={handleSubmit} {...args}>
      {children}
    </S.Form>
  )
}

export default FormContent
