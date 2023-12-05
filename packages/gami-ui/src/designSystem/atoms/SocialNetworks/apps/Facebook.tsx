import { canUseDom } from 'core/helpers/dom.helper'
import React, { Fragment } from 'react'
import { App, createShareButton, IApp, IAppOptions } from '../utils'

export class FacebookStrategy implements IApp {
  makeLink(_: string, options: IAppOptions) {
    const { user } = options
    const link = options.isMobileOrTablet
      ? `fb://facewebmodal/f?href=https://it-it.facebook.com/${user}`
      : `https://www.facebook.com/${user}`

    return link
  }
}

export interface IFacebook {
  color?: string
  user: string
}

export const Facebook = ({ color = '#4460A0', user }: IFacebook) => {
  return (
    <Fragment>
      {canUseDom &&
        createShareButton({
          app: 'facebook',
          link: new App()
            .setStrategy(new FacebookStrategy())
            .makeLink('', { user }),
          color,
        })}
    </Fragment>
  )
}
