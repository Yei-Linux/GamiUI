import React from 'react'
import * as S from './Spacer.styles'
import { TSpacer } from './type'
import withDefaults from 'hocs/WithDefault'

const Spacer = ({
  direction,
  size = 1,
  customSize,
  className,
  style,
}: TSpacer) => {
  return (
    <S.SpacerStyled
      $direction={direction}
      $size={size}
      $customSize={customSize}
      className={className}
      style={style}
    />
  )
}
const defaultProps = {}

Spacer.displayName = 'Spacer'

type SpacerComponent<P> = React.NamedExoticComponent<P> & {
  defaultProps: P
}

export default withDefaults(Spacer, defaultProps) as SpacerComponent<TSpacer>
