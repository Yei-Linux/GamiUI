import 'regenerator-runtime/runtime'
import { useEffect, useState } from 'react'

export interface IUsePortalProps {
  /**
   * Open
   */
  open?: boolean
  timer?: number
}

const useOpen = ({ open, timer = 300 }: IUsePortalProps) => {
  const [isFirstTime, setIsFirstTime] = useState(!open)
  const [isOpen, setIsOpen] = useState(open)

  const timeout = (t: number): Promise<any> => {
    return new Promise((resolve, _reject) => {
      setTimeout(resolve, t)
    })
  }

  const updateIsOpen = async () => {
    if (open) {
      isFirstTime && setIsFirstTime(false)
      setIsOpen(true)
      return
    }

    if (!isFirstTime) {
      await timeout(timer)
      setIsOpen(false)
    }
  }

  useEffect(() => {
    updateIsOpen()
  }, [open])

  return { isOpen }
}

export default useOpen
