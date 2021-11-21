import React from 'react'
import { getGenericPropStyles } from 'styles/utilities/genericPropStyles'
import { IGeneralProps } from '../../../core/domain/interfaces/IGeneralProps'
import { LinkType } from '../../../core/domain/types'
import * as S from './Link.styles'

export interface ILink extends IGeneralProps {
  /**
   * Children Content
   */
  children?: React.ReactNode
  /**
   * Text Link
   */
  text?: string | null

  /**
   * Url
   */
  href: string

  /**
   * Link Type
   */
  type?: LinkType

  /**
   * Is External
   */
  isExternal?: boolean
}

const Link = ({
  children,
  text = null,
  href,
  type = 'secondary',
  isExternal = false,
  ...genericsProps
}: ILink) => {
  return (
    <S.Link
      href={href}
      target={isExternal ? '_blank' : '_self'}
      $linkType={type}
      {...getGenericPropStyles(genericsProps)}
    >
      {text ?? children}
    </S.Link>
  )
}

export default Link
