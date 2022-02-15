import context from 'context/CollapseProvider/context'
import useStore from '../useStore'

const useCollapseStore = () => {
  const {
    accordion,
    animated,
    divider,
    onChange,
    setAccordion,
    setAnimated,
    setDivider,
    setOnChange,
  } = useStore({ context: context })

  return {
    accordion,
    animated,
    divider,
    onChange,
    setAccordion,
    setAnimated,
    setDivider,
    setOnChange,
  }
}

export default useCollapseStore
