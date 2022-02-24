import React from 'react'
import * as S from './Container.styles'
import { IGeneralProps } from 'core/domain/interfaces/IGeneralProps'
import { getGenericPropStyles } from 'styles/utilities/genericPropStyles'
import withDefaults from 'hocs/WithDefault'
import useCssHandle from 'hooks/useCssHandle'
import { cls } from 'core/utils/cls'

export interface IContainer extends IGeneralProps {
  /**
   * Container type
   */
  as?: keyof JSX.IntrinsicElements
  /**
   * Content
   */
  children: React.ReactNode
}

const Container = ({ children, as, ...genericsProps }: IContainer) => {
  const { handles } = useCssHandle({
    classes: {
      wrapper: ['wrapper'],
    },
    componentPrefixCls: 'container',
    customPrexiCls: genericsProps?.className,
  })

  return (
    <S.Container
      className={cls(handles.wrapper)}
      as={as}
      {...getGenericPropStyles(genericsProps)}
    >
      {children}
    </S.Container>
  )
}

const defaultProps = {
  shadow: 'none',
  width: 'auto',
  height: 'auto',
}

type ContainerComponent<P> = React.NamedExoticComponent<P> & {
  defaultProps: P
}

export default withDefaults(
  Container,
  defaultProps
) as ContainerComponent<IContainer>
