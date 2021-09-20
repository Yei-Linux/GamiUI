import React, { Fragment } from 'react'
import useFormStore from 'hooks/store/useFormStore'
import Icon from 'designSystem/atoms/Icon'

import * as S from './Form.styles'

export interface IFormError {
  name: string
}

const FormError = ({ name }: IFormError) => {
  const { yupErrors } = useFormStore()

  return (
    <Fragment>
      {yupErrors?.[name] && (
        <S.FormError>
          <Icon name="errorForm" size="15px" fill="#E32B2B" />
          <S.FormErrorLabel text={yupErrors?.[name]} />
        </S.FormError>
      )}
    </Fragment>
  )
}

export default FormError
