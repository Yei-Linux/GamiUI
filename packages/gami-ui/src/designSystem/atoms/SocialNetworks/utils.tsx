import { ShareButton } from './apps/ShareButton'
import React from 'react'
import Icon from '../Icon'
import { isMobileOrTablet } from 'core/helpers'
import { ICreateShareButton } from './constants'

export interface IAppOptions {
  phone?: string
  isMobileOrTablet?: boolean
  user?: string
}

export interface IApp {
  makeLink: (message: string, options: IAppOptions) => string
}

export class App {
  strategy?: IApp

  setStrategy(strategy: IApp) {
    this.strategy = strategy
    return this
  }

  makeLink(url: string, options: IAppOptions) {
    const isMobileOrTabletProp = isMobileOrTablet()
    return (
      this.strategy?.makeLink(url, {
        ...options,
        isMobileOrTablet: isMobileOrTabletProp,
      }) ?? ''
    )
  }
}

export const createShareButton = ({
  app,
  link,
  size = '35px',
  color,
}: ICreateShareButton) => {
  return (
    <ShareButton link={link}>
      <Icon size={size} name={app} color={color} />
    </ShareButton>
  )
}
