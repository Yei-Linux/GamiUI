import { MouseEventHandler } from 'react'
import { IEvents } from './IEvent'
import { IStyles } from './IStyles'

export interface IGeneralProps<
  T = MouseEventHandler<unknown>,
  S = MouseEventHandler<any> | any
> extends IEvents<T, S>,
    IStyles {}
