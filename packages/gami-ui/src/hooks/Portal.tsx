/* eslint-disable react/prop-types */
import type React from 'react'
import { useState, forwardRef } from 'react'
import ReactDOM from 'react-dom'

import useEnhancedEffect from './useEnhancedEffect'

export function setRef<T>(
  ref: React.Ref<T> | ((instance: T | null) => void) | null | undefined,
  value: T | null
) {
  if (typeof ref === 'function') {
    ref(value)
  } else if (ref) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const refCasted = ref as any
    refCasted.current = value
  }
}

export type ContainerType =
  | React.ReactInstance
  | (() => React.ReactInstance | null)
  | null

interface Props {
  children: React.ReactNode
  container?: ContainerType
  isUpdate?: any
}

export function getContainer(container?: ContainerType) {
  container = typeof container === 'function' ? container() : container

  if (!container) {
    return null
  }

  // eslint-disable-next-line react/no-find-dom-node
  return ReactDOM.findDOMNode(container) as Element | null
}

const Portal = forwardRef((props: Props, ref) => {
  const { children, container, isUpdate } = props
  const [mountNode, setMountNode] = useState<Element | null>(null)

  useEnhancedEffect(() => {
    setMountNode(getContainer(container) ?? document.body)
  }, [container, isUpdate])

  useEnhancedEffect(() => {
    if (mountNode) {
      setRef(ref, mountNode)

      return () => {
        setRef(ref, null)
      }
    }

    return undefined
  }, [ref, mountNode])

  return mountNode ? ReactDOM.createPortal(children, mountNode) : mountNode
})

export default Portal
