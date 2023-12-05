import { MouseEventHandler } from 'react'
import { IEvents } from './IEvent'
import { IStyles } from './IStyles'

export interface IGeneralProps<
  T = MouseEventHandler<unknown>,
  S = MouseEventHandler<any> | any,
  U = MouseEventHandler<any> | any,
  V = MouseEventHandler<any> | any
> extends IEvents<T, S, U, V>,
    IStyles {}

export type IGenericEvents<
  T = MouseEventHandler<unknown>,
  S = MouseEventHandler<any> | any,
  U = MouseEventHandler<any> | any,
  V = MouseEventHandler<any> | any
> = IEvents<T, S, U, V>
