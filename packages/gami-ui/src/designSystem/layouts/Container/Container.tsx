import React from 'react'
import * as S from './Container.styles'
import { IGeneralProps } from 'core/domain/interfaces/IGeneralProps'
import { getDesignProps } from 'styles/utilities/genericPropStyles'
import withDefaults from 'hocs/WithDefault'
import useCssHandle from 'hooks/useCssHandle'
import { cls } from 'core/utils/cls'

export interface IContainer extends IGeneralProps {
  /**
   * Container type
   */
  as?: keyof JSX.IntrinsicElements
  dangerouslySetInnerHTML?: string
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

  const dangerousField = genericsProps.dangerouslySetInnerHTML
    ? {
        dangerouslySetInnerHTML: {
          __html: genericsProps.dangerouslySetInnerHTML,
        },
      }
    : {}

  return (
    <S.Container
      className={cls(handles.wrapper, genericsProps?.className ?? '')}
      as={as}
      {...getDesignProps(genericsProps)}
      {...dangerousField}
    >
      {genericsProps.dangerouslySetInnerHTML ? undefined : children}
    </S.Container>
  )
}

const defaultProps = {
  shadow: 'none',
  width: 'auto',
  height: 'auto',
}

Container.displayName = 'Container'

type ContainerComponent<P> = React.NamedExoticComponent<P> & {
  defaultProps: P
}

export default withDefaults(
  Container,
  defaultProps
) as ContainerComponent<IContainer>
