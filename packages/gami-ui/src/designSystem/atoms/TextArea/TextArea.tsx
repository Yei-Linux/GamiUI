import React, { useMemo } from 'react'
import { getDesignProps } from 'styles/utilities/genericPropStyles'
import * as S from './TextArea.styles'
import { TTextAreaComponent } from './type'
import withDefaults from 'hocs/WithDefault'
import useCssHandle from 'hooks/useCssHandle'
import { cls } from 'core/utils/cls'

const TextArea = ({
  onChangeFormItem,
  name = 'gamification',
  placeholder = '',
  cols = 5,
  rows = 5,
  value,
  ...genericsProps
}: TTextAreaComponent) => {
  const globalStyles = useMemo(
    () => getDesignProps(genericsProps),
    [genericsProps]
  )
  const { handles } = useCssHandle({
    classes: {
      wrapper: ['wrapper'],
    },
    componentPrefixCls: 'textarea',
    customPrexiCls: '',
  })
  const handleChangeOnTextArea = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    e.preventDefault()
    onChangeFormItem?.(e.target.value)
  }

  return (
    <S.TextAreaStyled
      {...globalStyles}
      name={name}
      placeholder={placeholder}
      cols={cols}
      rows={rows}
      value={value}
      onChange={handleChangeOnTextArea}
      className={cls(handles.wrapper)}
    />
  )
}

const defaultProps = {
  shadow: 'none',
  width: 'auto',
  height: 'auto',
}

TextArea.displayName = 'TextArea'

type TextAreaComponent<P> = React.NamedExoticComponent<P> & {
  defaultProps: P
}

export default withDefaults(
  TextArea,
  defaultProps
) as TextAreaComponent<TTextAreaComponent>
