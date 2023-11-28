import React from 'react'
import RadioProvider from '../../../context/RadioProvider'
import RadioContent from './RadioContent'
import RadioItem from './RadioItem'
import { TRadioComponent } from './type'

const Radio = ({ children, onChangeFormItem, ...args }: TRadioComponent) => {
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
