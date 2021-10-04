import context from '../../context/RadioProvider/context'
import useStore from '../useStore'

const useRadioStore = () => {
  const { radioSelected, setRadioSelected } = useStore({ context: context })

  return {
    radioSelected,
    setRadioSelected,
  }
}

export default useRadioStore
