import React, { useEffect, useState } from 'react'
import { useResizeObserver } from './useResizeObserver'

export interface IUsePickerTooltip {
  tooltipRef: React.MutableRefObject<HTMLDivElement>
  inputRef: React.MutableRefObject<HTMLDivElement>
  handleOnClickOutside?: () => void
}

/**
 * Generates a tooltip for a picker.
 *
 * @param {IUsePickerTooltip} options - An object containing the tooltip reference,
 * input reference, and a function to handle clicks outside the tooltip.
 * @return {void}
 */
export const usePickerTooltip = ({
  tooltipRef,
  inputRef,
  handleOnClickOutside,
}: IUsePickerTooltip) => {
  const [heightTooltip, setHeightTooltip] = useState(0)
  useResizeObserver({
    refElement: tooltipRef,
    handler: ({ height }) => setHeightTooltip(height),
  })

  const margin = 15
  const getPositionInputRef = () => {
    const input = inputRef.current
    const { top, left, height } = input.getBoundingClientRect()
    return { top, left, height }
  }

  const getPositionTooltipRef = () => {
    const tooltip = tooltipRef.current
    const { height, width } = tooltip.getBoundingClientRect()

    const margins = margin * 2
    const spaceHeightTooltip = height + margins
    const spaceWidthTooltip = width + margins

    return { spaceHeightTooltip, spaceWidthTooltip, heighTooltip: height }
  }

  const setTooltipAbove = (topInput: number, heightTooltip: number) => {
    tooltipRef.current.style.top = `${topInput - heightTooltip - margin}px`
  }

  const setTooltipBelow = (topInput: number, heightInput: number) => {
    tooltipRef.current.style.top = `${topInput + heightInput + margin}px`
  }

  const handleTooltip = () => {
    const { top, height } = getPositionInputRef()
    const { spaceHeightTooltip, heighTooltip } = getPositionTooltipRef()

    const isValidVertical = top > spaceHeightTooltip

    if (isValidVertical) {
      setTooltipAbove(top, heighTooltip)
      return
    }

    setTooltipBelow(top, height)
  }

  const handleDetectClickOutside = (e: MouseEvent) => {
    const targetElement = e.target as Element
    if (!targetElement) return

    const isClickInsideInputElement = inputRef.current.contains(targetElement)
    if (isClickInsideInputElement) return

    const isClickInsideRefElement = tooltipRef.current.contains(targetElement)
    if (isClickInsideRefElement) return

    handleOnClickOutside?.()
  }

  useEffect(() => {
    handleTooltip()
  }, [tooltipRef.current, inputRef.current, heightTooltip])

  useEffect(() => {
    if (typeof window === undefined) return

    window.addEventListener('scroll', handleTooltip, true)

    return () => window.removeEventListener('scroll', handleTooltip, true)
  }, [tooltipRef.current, inputRef.current])

  useEffect(() => {
    if (typeof window === undefined) return

    window.addEventListener('click', handleDetectClickOutside)

    return () => window.removeEventListener('click', handleDetectClickOutside)
  }, [tooltipRef.current, inputRef.current])

  return {}
}
