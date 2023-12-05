import { gsap } from 'gsap'
import { useState, useEffect } from 'react'

export type TUseModal = {
  visible: boolean
  refDialog: gsap.TweenTarget
  refContent: HTMLDivElement | null
}
export const useModal = ({ visible, refDialog, refContent }: TUseModal) => {
  const [modalTween] = useState(gsap.timeline({ paused: true }))

  useEffect(() => {
    if (refContent) {
      modalTween
        .to(refDialog, 0.35, { y: 0, autoAlpha: 1 })
        .from(
          refContent.children,
          0.35,
          { y: 15, opacity: 0, stagger: 0.1 },
          '-=0.15'
        )
        .reverse()
    }
  }, [])

  useEffect(() => {
    modalTween.reversed(!visible)
  }, [visible])

  return { modalTween }
}
