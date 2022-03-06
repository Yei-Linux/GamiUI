import { deepEqual } from 'core/helpers/deepEquals'
import { useEffect, useMemo, useRef } from 'react'

type UseEffectParams = Parameters<typeof useEffect>

type EffectCallback = UseEffectParams[0]
type DependencyList = UseEffectParams[1]

export const useDeepCompareEffect = (
  callback: EffectCallback,
  dependencies: DependencyList
) => {
  /**
   * @param value the value to be memoized (usually a dependency list)
   * @returns a memoized version of the value as long as it remains deeply equal
   */
  const useDeepCompareMemoize = <T,>(value: T) => {
    const ref = useRef<T>(value)
    const signalRef = useRef<number>(0)

    if (!deepEqual(value, ref.current)) {
      ref.current = value
      signalRef.current += 1
    }

    return useMemo(() => ref.current, [signalRef.current])
  }

  return useEffect(callback, dependencies?.map(useDeepCompareMemoize))
}
