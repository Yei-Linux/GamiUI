import { useEffect, useRef } from 'react'

export interface IUseResizeObserver {
  refElement: React.MutableRefObject<any>
  handler?: (itemProps: DOMRectReadOnly) => void
}

/**
 * Creates a resize observer that listens for changes to the size of the specified element.
 *
 * @param {object} options - The options for the resize observer.
 * @param {RefObject} options.refElement - The ref to the element to observe.
 * @param {function} options.handler - The callback function to handle the resize event.
 * @return {object} An empty object.
 */
export const useResizeObserver = ({
  refElement,
  handler,
}: IUseResizeObserver) => {
  const observer = useRef(
    new ResizeObserver((entries) => {
      const itemProps = entries.at(0)?.contentRect

      if (!itemProps) return

      handler?.(itemProps)
    })
  )

  useEffect(() => {
    if (!refElement.current) return

    observer.current.observe(refElement.current)
  }, [refElement, observer])

  return {}
}
