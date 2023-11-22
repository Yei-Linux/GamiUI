import Spacer from 'designSystem/layouts/Spacer'
import React, { Fragment } from 'react'
import { TButtonComponent } from './type'

export type TButtonPreffixer = Pick<TButtonComponent, 'preffix'>

export const ButtonPreffixer = ({ preffix }: TButtonPreffixer) => {
  return (
    <Fragment>
      {preffix}
      <Spacer direction="right" customSize="5px" />
    </Fragment>
  )
}
