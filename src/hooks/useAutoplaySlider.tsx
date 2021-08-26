import { TUseRefTime, TUseRefTimeParams } from 'core/domain/types'
import KeenSlider from 'keen-slider'
import { useEffect, useRef } from 'react'

interface IUseSlider {
  isAutoplay: boolean
  slider: KeenSlider
  sliderRef: React.RefObject<HTMLElement | null>
  pause: boolean
  setPause: (pause: boolean) => void
}

const useAutoplaySlider = ({
  isAutoplay,
  slider,
  sliderRef,
  pause,
  setPause,
}: IUseSlider) => {
  const timer: TUseRefTime = useRef<TUseRefTimeParams>(null)

  const handleAutoplay = (): void => {
    const sliderRefCurrent = sliderRef?.current

    sliderRefCurrent?.addEventListener('mouseover', () => {
      setPause(true)
    })
    sliderRefCurrent?.addEventListener('mouseout', () => {
      setPause(false)
    })
  }

  const handleIntervalOnAutoplay = () => {
    timer.current = setInterval(() => {
      if (!pause && slider) {
        slider.next()
      }
    }, 2000)
    return () => {
      timer?.current && clearInterval(timer?.current)
    }
  }

  useEffect(() => {
    isAutoplay && handleAutoplay()
  }, [sliderRef])

  useEffect(() => {
    if (isAutoplay) return handleIntervalOnAutoplay()
    return
  }, [pause, slider])
}

export default useAutoplaySlider
