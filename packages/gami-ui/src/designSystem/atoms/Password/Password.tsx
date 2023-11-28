import useToggle from 'hooks/useToggle'
import React from 'react'
import Icon from '../Icon'
import Input from '../Input/Input'
import { TInput } from '../Input/type'

export interface IPassword extends TInput {
  /**
   * Icon for visible action
   */
  iconVisible?: React.ReactNode
  /**
   * Icon for hide action
   */
  iconHide?: React.ReactNode
}
const Password = ({
  iconHide = <Icon size="20px" name="preview__close" />,
  iconVisible = <Icon size="20px" name="preview" />,
  positionPrefix = 'right',
  ...generalInputProps
}: IPassword) => {
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

export default Password
