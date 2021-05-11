import React from 'react'
import { IGeneralProps } from '../../../core/domain/interfaces/IGeneralProps'
import { RichTextWrapper } from './RichText.styles'

import marked from 'marked'

export interface IRichText extends IGeneralProps {
  /**
   * Text to Show
   */
  text: string
}

const RichText = ({ text, ...args }: IRichText) => {
  const getMarkdownText = (text: string) => {
    const rawMarkup = marked(text)
    return { __html: rawMarkup }
  }

  return (
    <RichTextWrapper
      {...args}
      dangerouslySetInnerHTML={getMarkdownText(text)}
    />
  )
}

RichText.defaultProps = {}

export default RichText
