import React, { useMemo, useRef } from 'react'
import { IGeneralProps } from '../../../core/domain/interfaces/IGeneralProps'
import { RichTextWrapper } from './RichText.styles'

import marked, { Renderer } from 'marked'
import useIsMounted from '../../../hooks/useIsMounted'
import { sanitizeLink } from './helper'

export interface IRichText extends IGeneralProps {
  /**
   * Text to Show
   */
  text: string
}

const RichText = ({ text, ...args }: IRichText) => {
  const renderer: any = useRef<Renderer>()
  const { isMounted } = useIsMounted()

  if (!isMounted) {
    renderer.current = new Renderer()
    renderer.current.link = sanitizeLink
  }

  const html = useMemo(() => {
    marked.setOptions({
      gfm: true,
      breaks: true,
      sanitize: false,
      renderer: renderer.current,
    })

    return marked(text)
  }, [text])

  return (
    <RichTextWrapper {...args} dangerouslySetInnerHTML={{ __html: html }} />
  )
}

RichText.defaultProps = {}

export default RichText
