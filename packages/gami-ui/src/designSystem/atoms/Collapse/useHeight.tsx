import { TUseRefDiv } from 'core/domain/types'
import { useEffect, useRef, useState } from 'react'

export const useHeight = () => {
  const childrenRef: TUseRefDiv = useRef(null)
  const [childrenHeight, setChildrenHeight] = useState('auto')

  const getChildrenHeight = () => {
    if (!childrenRef) return 'auto'

    const childrenHeight = childrenRef.current?.getBoundingClientRect()
    if (!childrenHeight) return 'auto'

    return `${childrenHeight.height}px`
  }

  useEffect(() => {
    const childrenHeightResult = getChildrenHeight()
    setChildrenHeight(childrenHeightResult)
  }, [])

  return { childrenHeight, childrenRef }
}
