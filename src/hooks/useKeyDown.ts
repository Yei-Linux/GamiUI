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
  const moveCharacter = (e: any) => {
    const key = e.key
    if (keys.includes(key)) {
      action(key)
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', moveCharacter)
    return () => window.removeEventListener('keydown', moveCharacter)
  }, [])

  return { moveCharacter }
}

export default useKeyDown
