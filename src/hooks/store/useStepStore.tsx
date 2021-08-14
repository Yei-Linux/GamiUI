import context from '../../context/StepsProvider/context'
import useStore from '../useStore'

const useStepStore = () => {
  const { currentStep, setCurrentStep } = useStore({ context: context })

  return { currentStep, setCurrentStep }
}

export default useStepStore
