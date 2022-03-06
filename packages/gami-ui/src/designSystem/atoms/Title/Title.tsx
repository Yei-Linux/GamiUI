import React from 'react'
import { IGeneralProps } from 'core/domain/interfaces/IGeneralProps'
import * as S from './Title.styles'
import { getGenericPropStyles } from 'styles/utilities/genericPropStyles'
import withDefaults from 'hocs/WithDefault'
import useCssHandle from 'hooks/useCssHandle'
import { cls } from 'core/utils/cls'
import { LevelType } from 'core/domain/types'

export interface ITitle extends IGeneralProps {
  /**
   * Level Title
   */
  level?: LevelType
  /**
   * Title Text Content
   */
  children: React.ReactNode
}

const Title = React.forwardRef(
  ({ level = 'h1', children, ...genericsProps }: ITitle, ref) => {
    const { handles } = useCssHandle({
      classes: {
        wrapper: ['wrapper'],
      },
      componentPrefixCls: 'title',
      customPrexiCls: genericsProps.className,
    })

    return (
      <S.Title
        ref={ref}
        className={cls(handles.wrapper, genericsProps?.className ?? '')}
        as={level}
        {...getGenericPropStyles(genericsProps)}
      >
        {children}
      </S.Title>
    )
  }
)

const defaultProps = {
  shadow: 'none',
  width: 'auto',
  height: 'auto',
}

Title.displayName = 'Title'

type TitleComponent<P> = React.NamedExoticComponent<P> & {
  defaultProps: P
}

export default withDefaults(Title, defaultProps) as TitleComponent<ITitle>
