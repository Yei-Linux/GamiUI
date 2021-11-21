import { MouseEventHandler } from 'react'

export interface IEvents {
  onClick?: MouseEventHandler<unknown>
  onChange?: MouseEventHandler<any> | any
}
