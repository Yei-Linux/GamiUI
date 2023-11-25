import React from 'react'
import * as S from './Icon.styles'
import { getDesignProps } from 'styles/utilities/genericPropStyles'
import withDefaults from 'hocs/WithDefault'
import useCssHandle from 'hooks/useCssHandle'
import { cls } from 'core/utils/cls'
import { TIconComponent } from './type'
import { useInitializer } from './useInitializer'

const Icon = ({
  color = '#7f9cf5',
  name = 'facebook',
  size = '16px',
  ...genericsProps
}: TIconComponent) => {
  const { icon } = useInitializer({ color, name })
  const { handles } = useCssHandle({
    classes: {
      wrapper: ['wrapper'],
      svg: ['svg'],
    },
    componentPrefixCls: 'icon',
    customPrexiCls: genericsProps?.className,
  })

  if (!icon) {
    return null
  }

  return (
    <S.IconStyled
      {...getDesignProps(genericsProps)}
      className={cls(handles.wrapper, genericsProps?.className ?? '', {
        hoverIcon: genericsProps?.onClick ? true : false,
      })}
    >
      <S.SvgStyled
        fill="none"
        width={size}
        height={size}
        viewBox={icon.viewBox}
      >
        {icon.svg}
      </S.SvgStyled>
    </S.IconStyled>
  )
}

const defaultProps = {
  shadow: 'none',
}

Icon.displayName = 'Icon'

type IconComponent<P> = React.NamedExoticComponent<P> & {
  defaultProps: P
}

export default withDefaults(Icon, defaultProps) as IconComponent<TIconComponent>
