import Input from 'designSystem/atoms/Input'
import React, { useEffect, useRef, useState } from 'react'
import * as S from './ColorPicker.styles'
import { useColorPicker } from './useColorPicker'
import { usePickerTooltip } from 'hooks/usePickerTooltip'
import { cls } from 'core/utils/cls'
import { TOnChangeFormItem } from '../Input/Input'

export interface IColorPicker {
  value?: string
  onChangeFormItem?: TOnChangeFormItem
}

const ColorPicker = ({ onChangeFormItem, value = '' }: IColorPicker) => {
  const tooltipRef =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement>
  const inputRef =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement>

  const [colorPickerLocal, setColorPickerLocal] = useState(value)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setColorPickerLocal(value)
  }, [value])

  usePickerTooltip({
    tooltipRef,
    inputRef,
    handleOnClickOutside: () => setIsVisible(false),
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

  const handleClickInput = () => setIsVisible(!isVisible)

  return (
    <S.Wrapper>
      <S.ColorPickerPanel
        ref={tooltipRef}
        className={cls({
          hide: !isVisible,
        })}
      >
        <S.ColorPicker>
          <S.TitlePicker level="h4" textAlign="left" width="full">
            Color Picker:
          </S.TitlePicker>
          <S.CanvasContainer>
            <S.Canvas ref={canvasRef} />
            <S.CanvasPicker
              ref={pickerRef}
              onClick={handleClick}
              onMouseDown={handleStart}
              onMouseMove={handleMove}
              onMouseUp={handleEnd}
            />
          </S.CanvasContainer>

          <S.Info>
            <S.SelectedViewer style={{ background: colorPickerLocal }} />
            <S.SelectedTitle level="h4">
              {colorPickerLocal != '' ? colorPickerLocal : 'Not Picked'}
            </S.SelectedTitle>
          </S.Info>
        </S.ColorPicker>
      </S.ColorPickerPanel>

      <div ref={inputRef}>
        <Input readOnly value={value} onClick={handleClickInput} />
      </div>
    </S.Wrapper>
  )
}

export default ColorPicker
