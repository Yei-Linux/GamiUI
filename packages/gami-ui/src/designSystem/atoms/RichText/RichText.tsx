import React, { useMemo, useRef } from 'react'
import { IGeneralProps } from 'core/domain/interfaces/IGeneralProps'
import * as S from './RichText.styles'

import marked, { Renderer } from 'marked'
import useIsMounted from 'hooks/useIsMounted'
import { sanitizeLink } from './helper'
import { getGenericPropStyles } from 'styles/utilities/genericPropStyles'
import withDefaults from 'hocs/WithDefault'

export interface IRichText extends IGeneralProps {
  /**
   * Text to Show
   */
  text: string
}

export type TMarkedRenderRefParams = Renderer<never> | undefined
export type TMarkedRenderRef = React.MutableRefObject<TMarkedRenderRefParams>

const RichText = ({ text, ...genericsProps }: IRichText) => {
  const renderer: TMarkedRenderRef = useRef<TMarkedRenderRefParams>()
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
      renderer: renderer?.current,
    })

    return marked(text)
  }, [text])

  return (
    <S.RichText
      {...getGenericPropStyles(genericsProps)}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

const defaultProps = {
  shadow: 'none',
  width: 'auto',
  heigth: 'auto',
}

export default withDefaults(RichText, defaultProps)
