import { IDynamicObjectWithField } from 'core/domain/interfaces/common'
import { useFormStore } from 'hooks/index'
import useGenerateYupSchema from 'hooks/useGenerateYupSchema'
import useYupValidation, { TYupSchema } from 'hooks/useYupValidation'
import { useEffect } from 'react'
import { TFormComponent } from './type'

type TUseHandleForm = Pick<TFormComponent, 'children' | 'form' | 'onSubmitForm'>
export const useHandleForm = ({
  children,
  form,
  onSubmitForm,
}: TUseHandleForm) => {
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

  const handleValidSubmit = (e?: React.FormEvent) => {
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

  useEffect(() => {
    if (!form?.isValidating) return
    const isValid = handleValidSubmit()
    form.updateValid(isValid)
    form.completeValidate()
  }, [form?.isValidating])

  return { handleValidSubmit }
}
