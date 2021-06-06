import { useEffect } from 'react'

export interface IUseKeyDownProps {
  /**
   * Arrays of keys
   */
  keys: string[]
  /**
   * Arrays of keys
   */
  action: (props?: any) => any
}

const useKeyDown = ({ keys, action }: IUseKeyDownProps) => {
  let down = false
  let isAllowAgainPressKey = true

  const validateDontKeepPressKey = (e: any) => {
    if (down) return
    down = true

    if (!isAllowAgainPressKey) return
    isAllowAgainPressKey = false
    moveCharacter(e)

    setTimeout(() => (isAllowAgainPressKey = true), 800)
  }

  const moveCharacter = (e: any) => {
    const key = e.key
    if (keys.includes(key)) {
      action(key)
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', validateDontKeepPressKey)
    window.addEventListener('keyup', () => (down = false))

    return () => window.removeEventListener('keydown', validateDontKeepPressKey)
  }, [])

  return { moveCharacter }
}

export default useKeyDown
