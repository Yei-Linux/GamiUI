import { ObjectSchema } from 'yup'
import { Assign, TypeOfShape } from 'yup/lib/object'
import { Optionals } from 'yup/lib/types'
import useFormStore from './store/useFormStore'

export type TYupSchema = ObjectSchema<
  Assign<any, any>,
  any,
  TypeOfShape<Assign<any, any>> | Optionals<any>
>

export interface IUseYupValidation {
  schema: TYupSchema
}

export interface IDynamicObject {
  [key: string]: any
}

const useYupValidation = ({ schema }: IUseYupValidation) => {
  const { setYupErrors } = useFormStore()

  const mapErrors = (yupErrors: any[]) => {
    const errors: IDynamicObject = {}

    yupErrors.map(({ path, message }) => {
      errors[path] = message
    })

    return errors
  }

  const onSucces = () => {
    setYupErrors(null)
    return null
  }

  const onError = (error: any) => {
    const errorsFormated = mapErrors(error)
    setYupErrors(errorsFormated)
    return errorsFormated
  }

  const validate = (data: any) => {
    try {
      schema.validateSync(data, { abortEarly: false })
      return onSucces()
    } catch (e) {
      return onError(e.inner)
    }
  }

  return {
    validate,
  }
}

export default useYupValidation
