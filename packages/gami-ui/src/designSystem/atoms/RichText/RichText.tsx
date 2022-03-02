import React, { useMemo, useRef } from 'react'
import { IGeneralProps } from 'core/domain/interfaces/IGeneralProps'
import * as S from './RichText.styles'

import marked, { Renderer } from 'marked'
import useIsMounted from 'hooks/useIsMounted'
import { sanitizeLink } from './helper'
import { getGenericPropStyles } from 'styles/utilities/genericPropStyles'
import withDefaults from 'hocs/WithDefault'
import useCssHandle from 'hooks/useCssHandle'
import { cls } from 'core/utils/cls'

export interface IRichText extends IGeneralProps {
  /**
   * Text to Show
   */
  text: string
}

export type TMarkedRenderRefParams = Renderer<never> | undefined
export type TMarkedRenderRef = React.MutableRefObject<TMarkedRenderRefParams>

const RichText = ({ text, ...genericsProps }: IRichText) => {
  const { handles } = useCssHandle({
    classes: {
      wrapper: ['wrapper'],
    },
    componentPrefixCls: 'richtext',
    customPrexiCls: genericsProps.className,
  })
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
      className={cls(handles.wrapper, genericsProps?.className ?? '')}
      {...getGenericPropStyles(genericsProps)}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

const defaultProps = {
  shadow: 'none',
  width: 'auto',
  height: 'auto',
}

type RichTextComponent<P> = React.NamedExoticComponent<P> & {
  defaultProps: P
}

export default withDefaults(
  RichText,
  defaultProps
) as RichTextComponent<IRichText>
