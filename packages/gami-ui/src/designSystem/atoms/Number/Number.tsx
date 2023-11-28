import React from 'react'
import Input from '../Input'
import { TNumberComponent } from './type'
import withDefaults from 'hocs/WithDefault'

const Number = ({ onChangeFormItem, ...args }: TNumberComponent) => {
  return <Input type="number" onChangeFormItem={onChangeFormItem} {...args} />
}

const defaultProps = {}

Number.displayName = 'Number'

type NumberComponent<P> = React.NamedExoticComponent<P> & {
  defaultProps: P
}

export default withDefaults(
  Number,
  defaultProps
) as NumberComponent<TNumberComponent>
