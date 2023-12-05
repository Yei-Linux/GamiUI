import { useEffect, useRef, useState } from 'react'
import {
  clear,
  createGradientOnHeight,
  createGradientOnWidth,
  createPickerCircle,
  findPositionByColor,
  getColorByPosition,
  getCtx,
  getPositionByClick,
} from './helper'

export interface IUseColorPicker {
  colorPicker: string
  setColorPicked: (value: string) => void
  onDragEnd: () => void
  onClick: (color: string) => void
}

export const useColorPicker = ({
  colorPicker,
  setColorPicked,
  onDragEnd,
  onClick,
}: IUseColorPicker) => {
  const width = 200
  const height = 200
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const pickerRef = useRef<HTMLCanvasElement | null>(null)
  const [isDnd, setIsDnd] = useState(false)

  const setDimensions = (
    ref: React.MutableRefObject<HTMLCanvasElement | null>
  ) => {
    const canvas = ref.current
    if (!canvas) return

    if (!ref.current?.width) return
    if (!ref.current?.height) return

    ref.current.width = width
    ref.current.height = height
  }

  const printColor = (rgbValues: ImageData) => {
    const [r, g, b] = rgbValues.data
    const rgbColor = `rgb(${r},${g},${b})`

    setColorPicked(rgbColor)
    return rgbColor
  }

  const handleStart = () => setIsDnd(true)

  const handleEnd = () => {
    setIsDnd(false)
    onDragEnd()
  }

  const handleMove = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    if (!isDnd) return
    const positions = getPositionByClick(e, canvasRef)
    if (!positions) return

    const { x, y } = positions
    const rgbValues = getColorByPosition(x, y, canvasRef)
    if (!rgbValues) return

    printColor(rgbValues)
    clear({ width, height, pickerRef })

    const contextPicker = getCtx(pickerRef)
    if (!contextPicker) return

    createPickerCircle(contextPicker, positions)
  }

  const handleClick = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    const positions = getPositionByClick(e, canvasRef)
    if (!positions) return

    const { x, y } = positions

    const rgbValues = getColorByPosition(x, y, canvasRef)
    if (!rgbValues) return

    const rgb = printColor(rgbValues)
    onClick(rgb)

    const contextPicker = getCtx(pickerRef)
    if (!contextPicker) return

    clear({ width, height, pickerRef })
    createPickerCircle(contextPicker, positions)
  }

  const build = () => {
    setDimensions(canvasRef)
    setDimensions(pickerRef)

    const contextCanvas = getCtx(canvasRef)
    const contextPicker = getCtx(pickerRef)

    if (!contextCanvas) return
    if (!contextPicker) return

    const gradientWidth = createGradientOnWidth(contextCanvas, width)
    contextCanvas.fillStyle = gradientWidth
    contextCanvas.fillRect(0, 0, width, height)

    const gradientHeight = createGradientOnHeight(contextCanvas, height)
    contextCanvas.fillStyle = gradientHeight
    contextCanvas.fillRect(0, 0, width, height)

    const positions = findPositionByColor({
      width,
      height,
      rgbColorSearch: colorPicker,
      canvasRef,
    })

    createPickerCircle(contextPicker, positions)
  }

  useEffect(() => {
    build()
  }, [])

  return {
    canvasRef,
    pickerRef,
    handleClick,
    handleMove,
    handleEnd,
    handleStart,
  }
}
