import React from 'react'
import { IGeneralProps } from '../../../core/domain/interfaces/IGeneralProps'
import { InputContainer, InputWrapper } from './Input.styles'

export interface IInput extends IGeneralProps {
  /**
   * Placeholder Input to show
   */
  placeholder?: string
  /**
   * Identifier Input
   */
  name?: string
  /**
   * Value Input
   */
  value?: string
  /**
   * Prefix Content Input
   */
  prefix?: React.ReactNode
  /**
   * Prefix Position
   */
  positionPrefix?: 'left' | 'right'
  /**
   * Input Type
   */
  type?: 'password' | 'input'
  /**
   * Autocomplete action
   */
  autoComplete?: 'off' | 'on'
  /**
   * Function to detect changes
   */
  onChangeFormItem?: (value: unknown, ...props: unknown[]) => unknown | void
  /**
   * Is Readonly input
   */
  readOnly?: boolean
}

const Text = ({ onChangeFormItem, ...args }: any) => (
  <InputContainer
    hasIcon={!!args.prefix}
    {...args}
    onChange={(e: any) => {
      onChangeFormItem(e.target.value)
      e.preventDefault()
    }}
  />
)

const Input = ({ onChangeFormItem, ...args }: IInput) => {
  return !args.prefix ? (
    <Text onChangeFormItem={onChangeFormItem} {...args} />
  ) : (
    <InputWrapper {...args}>
      {args.prefix}
      {<Text onChangeFormItem={onChangeFormItem} {...args} />}
    </InputWrapper>
  )
}

Input.defaultProps = {
  name: 'gamification',
  placeholder: '',
  prefix: null,
  positionPrefix: 'left',
  type: 'input',
  autoComplete: 'off',
  readOnly: false,
  shadow: 'SMALL',
  width: 'NORMAL',
  heigth: 'SMALL',
  border: 'LARGE',
  fontWeight: 'NORMAL',
}

export default Input
