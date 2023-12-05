import { timeout } from 'core/helpers/utilities.helper'
import { useEffect, useState } from 'react'
import { TIMEOUT_PERCENT_RENDER } from './constants'

export type TUseProgress = {
  percent: number
}
export const useProgress = ({ percent }: TUseProgress) => {
  const [percentLocal, setPercentLocal] = useState(0)

  const handlePercent = async () => {
    await timeout(TIMEOUT_PERCENT_RENDER)
    setPercentLocal(percent)
  }

  useEffect(() => {
    handlePercent()
  }, [percent])

  return { percentLocal }
}
