import { canUseDom } from 'core/helpers/dom.helper'
import React, { Fragment } from 'react'
import { lightTheme } from 'styles/tokens/lightTheme'
import { App, createShareButton, IApp, IAppOptions } from '../utils'

export class InstagramStrategy implements IApp {
  makeLink(_: string, options: IAppOptions) {
    const { user } = options
    const link = options.isMobileOrTablet
      ? `instagram://user?username=${user}`
      : `http://instagram.com/_u/${user}/`

    return link
  }
}

export interface IInstragram {
  color?: string
  user: string
}

export const Instagram = ({
  color = lightTheme.primary.mediumPurple,
  user,
}: IInstragram) => {
  return (
    <Fragment>
      {canUseDom &&
        createShareButton({
          app: 'instagram',
          link: new App()
            .setStrategy(new InstagramStrategy())
            .makeLink('', { user }),
          color,
        })}
    </Fragment>
  )
}
