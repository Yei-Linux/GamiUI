import { useEffect, useRef } from 'react'

export interface IUseGameLoopProps {
  /**
   * Callback to do on any render loop
   */
  action: (props?: any) => any
  /**
   * Callback to do on any render loop
   */
  dependenciesEffect: any[]
}

const useGameLoop = ({ action, dependenciesEffect }: IUseGameLoopProps) => {
  const loopRef: any = useRef()

  const tick = () => {
    action()
    loopRef.current = requestAnimationFrame(tick)
  }

  useEffect(() => {
    loopRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(loopRef.current)
  }, [dependenciesEffect])

  return {}
}

export default useGameLoop
