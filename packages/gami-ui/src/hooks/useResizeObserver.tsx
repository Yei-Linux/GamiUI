import { useEffect, useRef } from 'react'

export interface IUseResizeObserver {
  refElement: React.MutableRefObject<any>
  handler?: (itemProps: DOMRectReadOnly) => void
}

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
