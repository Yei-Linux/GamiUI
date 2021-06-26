import { useEffect } from 'react'

export interface IUseAudioProps {
  /**
   * Audio Source Imported
   */
  audioImported: any
}

const useAudio = ({ audioImported }: IUseAudioProps) => {
  let audioRef: any

  useEffect(() => {
    audioRef = new Audio(audioImported)
    audioRef.load()
  }, [])

  const playAudio = () => {
    audioRef.play()
  }

  return { playAudio }
}

export default useAudio
