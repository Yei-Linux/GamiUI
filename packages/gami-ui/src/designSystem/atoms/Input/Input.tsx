import { cls } from 'core/utils/cls'
import React, { useMemo } from 'react'
import { getDesignProps } from 'styles/utilities/genericPropStyles'
import * as S from './Input.styles'
import { TInputComponent } from './type'
import useCssHandle from 'hooks/useCssHandle'
import withDefaults from 'hocs/WithDefault'

const Input = ({
  onChangeFormItem,
  readOnly = false,
  autoComplete = 'off',
  type = 'input',
  positionPrefix,
  prefix = null,
  name = 'gamiUI',
  value,
  placeholder = '',
  ...genericsProps
}: TInputComponent) => {
  const { handles } = useCssHandle({
    classes: {
      wrapper: ['wrapper'],
      preffix: ['preffix'],
      element: ['element'],
    },
    componentPrefixCls: 'input',
    customPrexiCls: genericsProps.className,
  })
  const globalStyles = useMemo(
    () => getDesignProps(genericsProps),
    [genericsProps]
  )

  const handleChangeOnInput = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    e.preventDefault()
    onChangeFormItem?.(e.target.value)
  }

  return (
    <S.InputBoxStyled
      {...globalStyles}
      className={cls(handles.wrapper, {
        positionPrefixRight: positionPrefix == 'right',
        positionPrefixLeft: positionPrefix == 'left',
      })}
    >
      {prefix && (
        <S.PrefixContainerStyled className={cls(handles.preffix)}>
          {prefix}
        </S.PrefixContainerStyled>
      )}
      {
        <S.InputStyled
          className={cls(handles.element)}
          readOnly={readOnly}
          autoComplete={autoComplete}
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={handleChangeOnInput}
        />
      }
    </S.InputBoxStyled>
  )
}

const defaultProps = {}

Input.displayName = 'Input'

type InputComponent<P> = React.NamedExoticComponent<P> & {
  defaultProps: P
}

export default withDefaults(
  Input,
  defaultProps
) as InputComponent<TInputComponent>
