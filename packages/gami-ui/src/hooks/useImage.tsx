import { useEffect, useState } from 'react'

interface IImageSet {
  setSrc: string
  setWidth: string
}

interface IImageBreakpoints {
  mediaMaxWidth?: string
  size: string
}

export interface IUseImage {
  sets?: IImageSet[]
  breakpoints?: IImageBreakpoints[]
}

/**
 * Hook for control image rendition
 * You can read this doc to understand: https://developer.mozilla.org/es/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images
 * @param {IUseImage} props - Image Props
 * @return {setsImg: IImageSet[],breakpointsImg: IImageBreakpoints[]}
 *
 * @example
 *
 *     useImage({
 *        sets: [{setSrc: 'elva-fairy-320w.jpg',setWidth: '320w'},
 *              {setSrc: 'elva-fairy-480w.jpg',setWidth: '480w'},
 *              {setSrc: 'elva-fairy-800w.jpg',setWidth: '800w'}],
 *        breakpoints: [{mediaMaxWidth: '320px',size: '280px'},
 *              {mediaMaxWidth: '480px',size: '440px'},
 *              { size: '800px'}],
 *     })
 */
const useImage = ({ sets, breakpoints }: IUseImage) => {
  const [setsImg, setSetsImg] = useState<string>('')
  const [breakpointsImg, setBreaktpointsImg] = useState<string>('')

  const handleSetsImg = () => {
    if (!sets) return
    if (sets.length == 0) return
    const setsGenerated = sets.map(({ setSrc, setWidth }) => {
      return `${setSrc} ${setWidth}`
    })

    setSetsImg(setsGenerated.join(','))
  }

  const handleBreakpointsImg = () => {
    if (!breakpoints) return
    if (breakpoints.length == 0) return
    const sizesGenerated = breakpoints.map(({ mediaMaxWidth, size }) => {
      const widthGenerated = mediaMaxWidth
        ? `(max-width: ${mediaMaxWidth}) `
        : ''
      return `${widthGenerated}${size}`
    })

    setBreaktpointsImg(sizesGenerated.join(','))
  }

  const handle = () => {
    handleSetsImg()
    handleBreakpointsImg()
  }

  useEffect(() => {
    handle()
  }, [])

  useEffect(() => {
    handle()
  }, [sets, breakpoints])

  return { setsImg, breakpointsImg }
}

export default useImage
