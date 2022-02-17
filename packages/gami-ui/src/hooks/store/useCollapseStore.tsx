import context from 'context/CollapseProvider/context'
import useStore from '../useStore'

const useCollapseStore = () => {
  const store = useStore({ context: context, hasValidation: true })

  if (!store) return null

  const {
    index,
    accordion,
    animated,
    divider,
    onChange,
    setAccordion,
    setAnimated,
    setDivider,
    setOnChange,
    setIndex,
  } = store

  return {
    index,
    accordion,
    animated,
    divider,
    onChange,
    setAccordion,
    setAnimated,
    setDivider,
    setOnChange,
    setIndex,
  }
}

export default useCollapseStore
