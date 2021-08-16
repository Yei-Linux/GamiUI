import context from '../../context/SelectProvider/context'
import useStore from '../useStore'

const useSelectStore = () => {
  const { optionSelected, setOptionSelected } = useStore({ context })

  return { optionSelected, setOptionSelected }
}

export default useSelectStore
