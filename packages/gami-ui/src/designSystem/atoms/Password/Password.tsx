import useToggle from 'hooks/useToggle'
import React from 'react'
import Icon from '../Icon'
import Input from '../Input/Input'
import { TPasswordComponent } from './type'
import withDefaults from 'hocs/WithDefault'

const Password = ({
  iconHide = <Icon size="20px" name="preview__close" />,
  iconVisible = <Icon size="20px" name="preview" />,
  positionPrefix = 'right',
  ...generalInputProps
}: TPasswordComponent) => {
  const { isVisible, handleToggle } = useToggle({ defaultVisible: false })
  const toggleType = isVisible ? 'input' : 'password'
  const toggleIconType = isVisible ? iconVisible : iconHide

  const renderIconPass = () => (
    <div onClick={() => handleToggle()}>{toggleIconType}</div>
  )

  return (
    <Input
      type={toggleType}
      prefix={renderIconPass()}
      positionPrefix={positionPrefix}
      {...generalInputProps}
    />
  )
}
const defaultProps = {}

Password.displayName = 'Password'

type PasswordComponent<P> = React.NamedExoticComponent<P> & {
  defaultProps: P
}

export default withDefaults(
  Password,
  defaultProps
) as PasswordComponent<TPasswordComponent>
