import context from '../../context/SurveyProvider/context'
import useStore from '../useStore'

const useSurveyStore = () => {
  const {
    answers,
    totalQuestions,
    setPercent,
    setSurveyOptionSelected,
    onClickSubmit,
    percent,
    setCallbacks,
    setTotalQuestions,
  } = useStore({
    context: context,
  })

  return {
    answers,
    totalQuestions,
    setPercent,
    setSurveyOptionSelected,
    onClickSubmit,
    percent,
    setCallbacks,
    setTotalQuestions,
  }
}

export default useSurveyStore
