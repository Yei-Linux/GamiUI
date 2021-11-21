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
    onClickSubmit,
  } = useStore({ context: context })

  return {
    formValue,
    yupErrors,
    setYupErrors,
    setFormValues,
    yupSchema,
    setYupSchema,
    setCallbacks,
    onClickSubmit,
  }
}

export default useFormStore
