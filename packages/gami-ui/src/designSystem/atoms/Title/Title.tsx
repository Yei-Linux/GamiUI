import React, { useMemo } from 'react'
import * as S from './Title.styles'
import { getDesignProps } from 'styles/utilities/genericPropStyles'
import withDefaults from 'hocs/WithDefault'
import useCssHandle from 'hooks/useCssHandle'
import { cls } from 'core/utils/cls'
import { TTitleComponent } from './type'

const Title = React.forwardRef(
  ({ level = 'h1', children, ...genericsProps }: TTitleComponent, ref) => {
    const globalStyles = useMemo(
      () => getDesignProps(genericsProps),
      [genericsProps]
    )
    const { handles } = useCssHandle({
      classes: {
        wrapper: ['wrapper'],
      },
      componentPrefixCls: 'title',
      customPrexiCls: '',
    })

    return (
      <S.TitleStyled
        ref={ref as any}
        className={cls(handles.wrapper, genericsProps?.className ?? '')}
        as={level}
        {...globalStyles}
      >
        {children}
      </S.TitleStyled>
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

export default withDefaults(
  Title,
  defaultProps
) as TitleComponent<TTitleComponent>
