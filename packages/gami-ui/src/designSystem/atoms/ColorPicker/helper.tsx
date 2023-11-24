import React from 'react'

type TCtxRef = React.MutableRefObject<HTMLCanvasElement | null>

/**
 * Retrieves the 2D rendering context of the specified canvas element.
 *
 * @param {TCtxRef} ref - The reference to the canvas element.
 * @return {CanvasRenderingContext2D | null} The 2D rendering context of the canvas element, or null if the canvas element does not exist.
 */
export const getCtx = (ref: TCtxRef) => {
  const canvas = ref.current
  if (!canvas) return

  const context = canvas.getContext('2d')
  return context
}

/**
 * Returns the RGB values of the color at the specified position on the canvas.
 *
 * @param {number} x - The x-coordinate of the position.
 * @param {number} y - The y-coordinate of the position.
 * @param {TCtxRef} canvasRef - The reference to the canvas context.
 * @return {ImageData | undefined} - The RGB values of the color at the specified position, or undefined if the canvas context is not available.
 */
export const getColorByPosition = (
  x: number,
  y: number,
  canvasRef: TCtxRef
) => {
  const context = getCtx(canvasRef)
  if (!context) return

  const rgbValues = context.getImageData(x, y, 1, 1)
  return rgbValues
}

type TCanvasBase = {
  width: number
  height: number
  canvasRef: TCtxRef
}
type TFindPositionByColor = TCanvasBase & {
  rgbColorSearch: string
}
/**
 * Finds the position of a specific color in a canvas.
 *
 * @param {TFindPositionByColor} width - The width of the canvas.
 * @param {TFindPositionByColor} height - The height of the canvas.
 * @param {TFindPositionByColor} rgbColorSearch - The RGB color to search for.
 * @param {TFindPositionByColor} canvasRef - A reference to the canvas element.
 * @return {TFindPositionByColor} The position of the color in the format { x, y }.
 */
export const findPositionByColor = ({
  width,
  height,
  rgbColorSearch,
  canvasRef,
}: TFindPositionByColor) => {
  for (let x = 0; x <= width; x++) {
    for (let y = 0; y <= height; y++) {
      const rgbValues = getColorByPosition(x, y, canvasRef)
      if (!rgbValues) continue

      const [r, g, b] = rgbValues.data
      const rgbColor = `rgb(${r},${g},${b})`

      if (rgbColorSearch == rgbColor) {
        return { x, y }
      }
    }
  }

  return { x: 30, y: 50 }
}

/**
 * Creates a gradient on the width of the canvas context.
 *
 * @param {CanvasRenderingContext2D} context - The canvas rendering context.
 * @param {number} width - The width of the gradient.
 * @return {CanvasGradient} The created gradient.
 */
export const createGradientOnWidth = (
  context: CanvasRenderingContext2D,
  width: number
) => {
  const gradient = context.createLinearGradient(0, 0, width, 0)

  gradient.addColorStop(0, 'rgb(255, 0, 0)')
  gradient.addColorStop(0.15, 'rgb(255, 0, 255)')
  gradient.addColorStop(0.33, 'rgb(0, 0, 255)')
  gradient.addColorStop(0.49, 'rgb(0, 255, 255)')
  gradient.addColorStop(0.67, 'rgb(0, 255, 0)')
  gradient.addColorStop(0.84, 'rgb(255, 255, 0)')
  gradient.addColorStop(1, 'rgb(255, 0, 0)')

  return gradient
}

/**
 * Creates a linear gradient on the canvas context based on the specified height.
 *
 * @param {CanvasRenderingContext2D} context - The canvas rendering context.
 * @param {number} height - The height of the gradient.
 * @return {CanvasGradient} The created linear gradient.
 */
export const createGradientOnHeight = (
  context: CanvasRenderingContext2D,
  height: number
) => {
  const gradient = context.createLinearGradient(0, 0, 0, height)

  gradient.addColorStop(0, 'rgba(255, 255, 255, 1)')
  gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0)')
  gradient.addColorStop(0.5, 'rgba(0, 0, 0, 0)')
  gradient.addColorStop(1, 'rgba(0, 0, 0, 1)')
  return gradient
}

export type TClear = {
  width: number
  height: number
  pickerRef: TCtxRef
}
/**
 * Clears the canvas context by clearing the given width and height.
 *
 * @param {object} TClear - The width, height, and pickerRef properties of the TClear object.
 * @param {number} TClear.width - The width of the canvas.
 * @param {number} TClear.height - The height of the canvas.
 * @param {object} TClear.pickerRef - The reference to the picker to get the canvas context from.
 */
export const clear = ({ width, height, pickerRef }: TClear) => {
  const context = getCtx(pickerRef)

  if (!context) return
  context.clearRect(0, 0, width, height)
}

/**
 * Creates a circle picker on the canvas.
 *
 * @param {CanvasRenderingContext2D} context - The rendering context of the canvas.
 * @param {{ x: number; y: number }} positions - The x and y coordinates of the circle.
 */
export const createPickerCircle = (
  context: CanvasRenderingContext2D,
  positions: { x: number; y: number }
) => {
  context.beginPath()
  context.arc(positions.x, positions.y, 10, 0, 2 * Math.PI, false)
  context.fillStyle = 'rgba(255, 255, 255, 0.5)'
  context.fill()
  context.lineWidth = 0.8

  context.strokeStyle = 'black'
  context.stroke()
}

/**
 * Returns the position of a click event relative to a canvas element.
 *
 * @param {React.MouseEvent<HTMLCanvasElement, MouseEvent>} e - The click event.
 * @param {TCtxRef} canvasRef - A reference to the canvas element.
 * @return {{ x: number, y: number }} - An object containing the x and y coordinates of the click event relative to the canvas element.
 */
export const getPositionByClick = (
  e: React.MouseEvent<HTMLCanvasElement, MouseEvent>,
  canvasRef: TCtxRef
) => {
  const currentCanvas = canvasRef.current
  if (!currentCanvas) return
  const rect = currentCanvas.getBoundingClientRect()

  const x = e.clientX - rect.left
  const y = e.clientY - rect.top

  return { x, y }
}
