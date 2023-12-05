import React, { useMemo } from 'react'
import * as S from './Container.styles'
import { getDesignProps } from 'styles/utilities/genericPropStyles'
import withDefaults from 'hocs/WithDefault'
import useCssHandle from 'hooks/useCssHandle'
import { cls } from 'core/utils/cls'
import { TContainerComponent } from './type'

const Container = ({ children, as, ...genericsProps }: TContainerComponent) => {
  const globalStyles = useMemo(() => getDesignProps(genericsProps), [])
  const { handles } = useCssHandle({
    classes: {
      wrapper: ['wrapper'],
    },
    componentPrefixCls: 'container',
    customPrexiCls: '',
  })

  const dangerousField = genericsProps.dangerouslySetInnerHTML
    ? {
        dangerouslySetInnerHTML: {
          __html: genericsProps.dangerouslySetInnerHTML,
        },
      }
    : {}

  return (
    <S.ContainerStyled
      {...globalStyles}
      {...dangerousField}
      className={cls(handles.wrapper, genericsProps?.className ?? '')}
      as={as}
    >
      {genericsProps.dangerouslySetInnerHTML ? undefined : children}
    </S.ContainerStyled>
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
) as ContainerComponent<TContainerComponent>
