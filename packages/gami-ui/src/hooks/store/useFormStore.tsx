import context from '../../context/FormProvider/context'
import useStore from '../useStore'

const useFormStore = () => {
  const {
    formValue,
    yupErrors,
    setYupErrors,
    setFormValues,
    yupSchema,
    setYupSchema,
    setCallbacks,
    setInitialFormValues,
    onClickSubmit,
  } = useStore({ context: context })

  return {
    formValue,
    yupErrors,
    setYupErrors,
    setFormValues,
    setInitialFormValues,
    yupSchema,
    setYupSchema,
    setCallbacks,
    onClickSubmit,
  }
}

export default useFormStore
