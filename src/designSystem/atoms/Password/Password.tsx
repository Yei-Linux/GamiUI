import useToggle from 'hooks/useToggle'
import React from 'react'
import Icon from '../Icon'
import Input, { IInput } from '../Input/Input'

export interface IPassword extends IInput {
  /**
   * Icon for visible action
   */
  iconVisible: React.ReactNode
  /**
   * Icon for hide action
   */
  iconHide: React.ReactNode
}
const Password = ({
  iconHide = <Icon fill="blue" size="30px" name="closeeye" />,
  iconVisible = <Icon fill="red" size="30px" name="openeye" />,
  positionPrefix = 'right',
  ...generalInputProps
}: IPassword) => {
  const { isVisible, handleToggle } = useToggle({ defaultVisible: false })
  const toggleType = isVisible ? 'input' : 'password'
  const toggleIconType = isVisible ? iconVisible : iconHide

  const renderIconPass = () => (
    <div onClick={handleToggle}>{toggleIconType}</div>
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
