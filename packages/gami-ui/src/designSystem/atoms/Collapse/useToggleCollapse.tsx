import useToggle from 'hooks/useToggle'
import { useEffect } from 'react'
import { TCollapseComponent } from './type'

export type TUseToggleCollapse = Pick<
  TCollapseComponent,
  'onClick' | 'expanded' | 'index'
> & {
  hasAccordion: boolean
  store: {
    index: any
    accordion: any
    animated: any
    divider: any
    onChange: any
    setAccordion: any
    setAnimated: any
    setDivider: any
    setOnChange: any
    setIndex: any
  } | null
}

export const useToggleCollapse = ({
  store,
  onClick,
  expanded,
  index,
  hasAccordion,
}: TUseToggleCollapse) => {
  const { isVisible, handleToggle } = useToggle({ defaultVisible: expanded })

  useEffect(() => {
    hasAccordion && index !== store?.index && handleToggle(false)
  }, [store?.index])

  const handleCollapse = () => {
    onClick?.(!isVisible)
    handleToggle(!isVisible)
    hasAccordion && !isVisible && index != null && store?.setIndex(index)
  }

  return { handleCollapse, isVisible }
}
