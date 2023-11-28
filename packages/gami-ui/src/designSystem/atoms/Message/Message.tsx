import React, { useMemo } from 'react'
import { getDesignProps } from 'styles/utilities/genericPropStyles'
import * as S from './Message.styles'
import { defaultTheme } from 'styles/tokens'
import { cls } from 'core/utils/cls'
import useCssHandle from 'hooks/useCssHandle'
import withDefaults from 'hocs/WithDefault'
import { TMessageComponent } from './type'

const Message = ({
  text = 'Hi, Welcome to our app',
  direction = 'left',
  background,
  hasMarker = true,
  color,
  maxWidth = '250px',
  ...genericsProps
}: TMessageComponent) => {
  const globalStyles = useMemo(
    () => getDesignProps(genericsProps),
    [genericsProps]
  )
  const { handles } = useCssHandle({
    classes: {
      wrapper: ['wrapper'],
    },
    componentPrefixCls: 'message',
    customPrexiCls: '',
  })

  return (
    <S.MessageStyled
      {...globalStyles}
      $direction={direction}
      $background={background || defaultTheme.light.primary.jordyBlue}
      $color={color || defaultTheme.light.neutral[800]}
      $maxWidth={maxWidth}
      className={cls(handles.wrapper, genericsProps?.className ?? '', {
        marker: hasMarker,
        directionLeft: hasMarker && direction == 'left',
        directionRight: hasMarker && direction == 'right',
      })}
    >
      {text}
    </S.MessageStyled>
  )
}

const defaultProps = {}

Message.displayName = 'Message'

type MessageComponent<P> = React.NamedExoticComponent<P> & {
  defaultProps: P
}

export default withDefaults(
  Message,
  defaultProps
) as MessageComponent<TMessageComponent>
