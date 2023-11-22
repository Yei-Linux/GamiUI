import { canUseDom } from 'core/helpers/dom.helper'
import React, { Fragment } from 'react'
import { App, createShareButton, IApp, IAppOptions } from '../utils'

export class TiktokStrategy implements IApp {
  makeLink(_: string, options: IAppOptions) {
    const { user } = options

    const link = `https://www.tiktok.com/@${user}`

    return link
  }
}

export interface ITiktok {
  color?: string
  user: string
}

export const Tiktok = ({ color = '#000000', user }: ITiktok) => {
  return (
    <Fragment>
      {canUseDom &&
        createShareButton({
          app: 'tiktok',
          link: new App()
            .setStrategy(new TiktokStrategy())
            .makeLink('', { user }),
          color,
        })}
    </Fragment>
  )
}
