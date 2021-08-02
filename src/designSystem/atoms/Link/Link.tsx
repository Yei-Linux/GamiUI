import React from 'react'
import { IGeneralProps } from '../../../core/domain/interfaces/IGeneralProps'
import { LinkType } from '../../../core/domain/types'
import { RichTextLink } from './Link.styles'

export interface ILink extends IGeneralProps {
  text: string
  href: string
  type: LinkType
  isExternal: boolean
}

const Link = ({ text, href, type, isExternal, width, heigth }: ILink) => {
  return (
    <RichTextLink
      width={width}
      heigth={heigth}
      href={href}
      target={isExternal ? '_blank' : '_self'}
      typeStyle={type}
    >
      {text}
    </RichTextLink>
  )
}

Link.defaultProps = {
  type: 'secondary',
  isExternal: false,
}

export default Link
