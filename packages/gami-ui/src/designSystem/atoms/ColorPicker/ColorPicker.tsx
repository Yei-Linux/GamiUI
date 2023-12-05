import Input from 'designSystem/atoms/Input'
import React, { useRef } from 'react'
import * as S from './ColorPicker.styles'
import { useColorPicker } from './useColorPicker'
import { usePickerTooltip } from 'hooks/usePickerTooltip'
import { cls } from 'core/utils/cls'
import useToggle from 'hooks/useToggle'
import { useColorPickerLocal } from './useColorPickerLocal'
import { TTColorPickerComponent } from './type'
import withDefaults from 'hocs/WithDefault'
import useCssHandle from 'hooks/useCssHandle'

const ColorPicker = ({
  onChangeFormItem,
  value = '',
  className,
}: TTColorPickerComponent) => {
  const { handles } = useCssHandle({
    classes: {
      color__pickerwrapper: ['color__pickerwrapper'],
      color__pickerpanel: ['color__pickerpanel'],
      color__picker: ['color__picker'],
      color__picker__title: ['color__picker__title'],
      color__picker__canvas: ['color__picker__canvas'],
      color__picker__canvas__ref: ['color__picker__canvas__ref'],
      color__picker__canvaspicker__ref: ['color__picker__canvaspicker__ref'],
      color__picker__info: ['color__picker__info'],
      color__picker__info__selected__viewer: [
        'color__picker__info__selected__viewer',
      ],
      color__picker__info__selected__title: [
        'color__picker__info__selected__title',
      ],
      color__picker__input__container: ['color__picker__input__container'],
      color__picker__input: ['color__picker__input'],
    },
    componentPrefixCls: 'colorPicker',
    customPrexiCls: className,
  })

  const tooltipRef =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement>
  const inputRef =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement>

  const { isVisible, handleToggle } = useToggle({ defaultVisible: false })
  const { colorPickerLocal, setColorPickerLocal } = useColorPickerLocal({
    value,
  })

  usePickerTooltip({
    tooltipRef,
    inputRef,
    handleOnClickOutside: () => handleToggle(false),
  })

  const {
    canvasRef,
    pickerRef,
    handleClick,
    handleMove,
    handleStart,
    handleEnd,
  } = useColorPicker({
    colorPicker: colorPickerLocal,
    setColorPicked: setColorPickerLocal,
    onDragEnd: () => onChangeFormItem?.(colorPickerLocal),
    onClick: (color: string) => onChangeFormItem?.(color),
  })

  return (
    <S.WrapperStyled className={cls(handles.color__pickerwrapper)}>
      <S.ColorPickerPanelstyled
        ref={tooltipRef}
        className={cls(handles.color__pickerpanel, {
          hide: !isVisible,
        })}
      >
        <S.ColorPickerStyled className={cls(handles.color__picker)}>
          <S.TitlePickerStyled
            className={cls(handles.color__picker__title)}
            level="h4"
            textAlign="left"
            width="full"
          >
            Color Picker:
          </S.TitlePickerStyled>
          <S.CanvasContainerStyled
            className={cls(handles.color__picker__canvas)}
          >
            <S.CanvasStyled
              ref={canvasRef}
              className={cls(handles.color__picker__canvas__ref)}
            />
            <S.CanvasPickerStyled
              className={cls(handles.color__picker__canvaspicker__ref)}
              ref={pickerRef}
              onClick={handleClick}
              onMouseDown={handleStart}
              onMouseMove={handleMove}
              onMouseUp={handleEnd}
            />
          </S.CanvasContainerStyled>

          <S.InfoStyled className={cls(handles.color__picker__info)}>
            <S.SelectedViewerStyled
              style={{ background: colorPickerLocal }}
              className={cls(handles.color__picker__info__selected__viewer)}
            />
            <S.SelectedTitleStyled
              level="h4"
              className={cls(handles.color__picker__info__selected__title)}
            >
              {colorPickerLocal != '' ? colorPickerLocal : 'Not Picked'}
            </S.SelectedTitleStyled>
          </S.InfoStyled>
        </S.ColorPickerStyled>
      </S.ColorPickerPanelstyled>

      <S.InputContainerStyled
        ref={inputRef}
        className={cls(handles.color__picker__input__container)}
      >
        <Input
          className={cls(handles.color__picker__input)}
          readOnly
          value={value}
          onClick={() => handleToggle()}
        />
      </S.InputContainerStyled>
    </S.WrapperStyled>
  )
}

const defaultProps = {}

ColorPicker.displayName = 'ColorPicker'

type ColorPickerComponent<P> = React.NamedExoticComponent<P> & {
  defaultProps: P
}

export default withDefaults(
  ColorPicker,
  defaultProps
) as ColorPickerComponent<TTColorPickerComponent>
