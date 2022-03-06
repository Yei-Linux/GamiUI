import { prefixCls } from 'core/utils/cls'
import { useState, useEffect } from 'react'
import { useDeepCompareEffect } from './useDeepCompareEffect'

interface IClassValueItem {
  name: string
  modifier?: string | null
}
type TClasses = Record<string, Array<string | IClassValueItem>>

type THandles = Record<string, Array<string>>

export interface IUseCssHandle {
  classes: TClasses
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
const useCssHandle = ({
  classes,
  componentPrefixCls,
  customPrexiCls,
}: IUseCssHandle) => {
  const [handles, setHandles] = useState<THandles>({})

  const computedHandles = () => {
    const handlesProp: THandles = {}
    const prefixClass = prefixCls(componentPrefixCls, customPrexiCls)

    Object.entries(classes).map(([key, value]) => {
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

    setHandles(handlesProp)
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
