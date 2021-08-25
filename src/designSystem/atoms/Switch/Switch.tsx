import classNames from 'classnames'
import useToggle from 'hooks/useToggle'
import React from 'react'
import { getGenericPropStyles } from 'styles/utilities/genericPropStyles'
import { IGeneralProps } from '../../../core/domain/interfaces/IGeneralProps'
import { TOnChangeFormItem } from '../Input/Input'
import * as S from './Switch.styles'

export interface ISwitch extends IGeneralProps {
  /**
   * Default checked value
   */
  defaultChecked: boolean
  /**
   * Function to detect changes
   */
  onChangeFormItem?: TOnChangeFormItem
}

const Switch = ({
  onChangeFormItem,
  defaultChecked,
  ...genericsProps
}: ISwitch) => {
  const { isVisible: isChecked, handleToggle } = useToggle({
    defaultVisible: defaultChecked,
  })

  const toggleSwitch = (): void => {
    onChangeFormItem?.(!isChecked)
    handleToggle()
  }

  return (
    <S.Switch
      type="button"
      onClick={toggleSwitch}
      className={classNames({
        checked: isChecked,
      })}
      {...getGenericPropStyles(genericsProps)}
    >
      <S.SwitchBall
        className={classNames({
          checked: isChecked,
        })}
      />
    </S.Switch>
  )
}

export default Switch
