import React, { useMemo, useRef } from 'react'
import * as S from './RichText.styles'

import marked, { Renderer } from 'marked'
import useIsMounted from 'hooks/useIsMounted'
import { sanitizeLink } from './helper'
import { getDesignProps } from 'styles/utilities/genericPropStyles'
import withDefaults from 'hocs/WithDefault'
import useCssHandle from 'hooks/useCssHandle'
import { cls } from 'core/utils/cls'
import {
  TMarkedRenderRef,
  TMarkedRenderRefParams,
  TRichTextComponent,
} from './type'

const RichText = ({ text, ...genericsProps }: TRichTextComponent) => {
  const globalStyles = useMemo(
    () => getDesignProps(genericsProps),
    [genericsProps]
  )
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
    <S.RichTextStyled
      className={cls(handles.wrapper, genericsProps?.className ?? '')}
      {...globalStyles}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

const defaultProps = {
  shadow: 'none',
  width: 'auto',
  height: 'auto',
}

RichText.displayName = 'RichText'

type RichTextComponent<P> = React.NamedExoticComponent<P> & {
  defaultProps: P
}

export default withDefaults(
  RichText,
  defaultProps
) as RichTextComponent<TRichTextComponent>
