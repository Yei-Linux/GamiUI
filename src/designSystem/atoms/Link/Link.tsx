import React from 'react'
import { LinkType } from '../../../core/domain/types'
import { RichTextLink } from './Link.styles'

export interface ILink {
  text: string
  href: string
  type: LinkType
  isExternal: boolean
}

const Link = ({ text, href, type, isExternal }: ILink) => {
  return (
    <RichTextLink
      href={href}
      target={isExternal ? '_blank' : 'self'}
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
