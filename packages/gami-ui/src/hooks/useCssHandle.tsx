import { prefixCls } from 'core/utils/cls'
import { useState, useEffect } from 'react'
import { useDeepCompareEffect } from './useDeepCompareEffect'

interface IClassValueItem {
  name: string
  modifier?: string | null
}
type TClassValue = Array<string | IClassValueItem>
type TClasses<T> = Record<keyof T, TClassValue>

type THandles<T> = Record<keyof T, Array<string>>

export interface IUseCssHandle<T> {
  classes: TClasses<T>
  componentPrefixCls: string
  customPrexiCls?: string | null
}

/**
 * Hook for manage css prefix classes.
 *
 * @param {IUseCssHandle} props - CssHandle Props
 * @return {handles: TClasses} Handle to set classes on own component
 *
 * @example
 *
 *     useCssHandle({
 *        classes: {
 *          wrapper: ['wrapper'],
 *          container: ['container', {name: 'container__gradient', modifier: 'red'}]
 *        },
 *        componentPrefixCls: 'button',
 *        customPrexiCls: 'buttonMain'
 *     })
 */
const useCssHandle = <T,>({
  classes,
  componentPrefixCls,
  customPrexiCls,
}: IUseCssHandle<T>) => {
  const defaultValue = {} as THandles<T>
  const [handles, setHandles] = useState<THandles<T>>(defaultValue)

  const computedHandles = () => {
    const handlesProp: THandles<T> = defaultValue
    const prefixClass = prefixCls(componentPrefixCls, customPrexiCls)

    Object.entries(classes).map((item) => {
      const [key, value] = item as [key: keyof T, value: TClassValue]
      const classesItemsStr: string[] = []
      const classesItemsWithModifiers: IClassValueItem[] = []

      value.map((classItem: string | IClassValueItem) => {
        if (typeof classItem === 'string') {
          classesItemsStr.push(classItem)
          return
        }

        classesItemsWithModifiers.push(classItem)
      })

      const newClassesItemsStr = classesItemsStr.map(
        (classItem: string) => `${prefixClass}__${classItem}`
      )
      const newClassesItemsWithModifiers = classesItemsWithModifiers
        .filter(({ modifier }: IClassValueItem) => modifier !== null)
        .map(({ name }: IClassValueItem) => `${prefixClass}--${name}`)

      handlesProp[key] = [
        ...newClassesItemsStr,
        ...newClassesItemsWithModifiers,
      ]
    })

    setHandles((prev) => (Object.keys(prev).length === 0 ? handlesProp : prev))
  }

  useEffect(() => {
    computedHandles()
  }, [componentPrefixCls, customPrexiCls])

  useDeepCompareEffect(() => {
    computedHandles()
  }, [classes])

  return { handles }
}

export default useCssHandle
