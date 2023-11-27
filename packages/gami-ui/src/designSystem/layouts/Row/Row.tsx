import { cls } from 'core/utils/cls'
import withDefaults from 'hocs/WithDefault'
import useCssHandle from 'hooks/useCssHandle'
import React from 'react'
import * as S from './Row.styles'
import { TRowComponent } from './type'

const Row = ({
  gap = null,
  children,
  justifyContent = 'center',
  alignItems = 'center',
  style = {},
  width = 'auto',
  height = '100%',
  isWrap = true,
  flexDirection = 'row',
  className,
}: TRowComponent) => {
  const { handles } = useCssHandle({
    classes: {
      wrapper: ['wrapper'],
    },
    componentPrefixCls: 'row',
    customPrexiCls: '',
  })

  return (
    <S.RowStyled
      $gap={gap}
      $width={width}
      $height={height}
      $justifyContent={justifyContent}
      $alignItems={alignItems}
      $flexDirection={flexDirection}
      style={style}
      className={cls(handles.wrapper, className ?? '', {
        wrap: isWrap,
        nowrap: !isWrap,
      })}
    >
      {children}
    </S.RowStyled>
  )
}

const defaultProps = {}

Row.displayName = 'Row'

type RowComponent<P> = React.NamedExoticComponent<P> & {
  defaultProps: P
}

export default withDefaults(Row, defaultProps) as RowComponent<TRowComponent>
