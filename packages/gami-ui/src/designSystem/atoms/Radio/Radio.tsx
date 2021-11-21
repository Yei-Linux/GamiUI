import React from 'react'
import RadioProvider from '../../../context/RadioProvider'
import { IGeneralProps } from '../../../core/domain/interfaces/IGeneralProps'
import { TOnChangeFormItem } from '../Input/Input'
import RadioContent from './RadioContent'

import RadioItem from './RadioItem'

export interface IRadio extends IGeneralProps {
  /**
   * Function to detect changes
   */
  onChangeFormItem?: TOnChangeFormItem
  /**
   * Children Element
   */
  children: React.ReactNode[]
  /**
   * Function to detect changes
   */
  name?: string
  /**
   * Function to detect changes
   */
  value?: unknown
}

const Radio = ({ children, onChangeFormItem, ...args }: IRadio) => {
  return (
    <RadioProvider>
      <RadioContent onChangeFormItem={onChangeFormItem} {...args}>
        {children}
      </RadioContent>
    </RadioProvider>
  )
}

Radio.Item = RadioItem

export default Radio
