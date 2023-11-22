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

  const handleSetsImgAttributeFormated = () => {
    if (!sets?.length) return
    const setsGenerated = sets.map(
      ({ setSrc, setWidth }) => `${setSrc} ${setWidth}`
    )
    const formattedSetsImg = setsGenerated.join(',')
    setSetsImg(formattedSetsImg)
  }

  const handleBreakpointsImgAttributeFormated = () => {
    if (!breakpoints?.length) return
    const sizesGenerated = breakpoints.map(({ mediaMaxWidth, size }) => {
      const widthGenerated = mediaMaxWidth
        ? `(max-width: ${mediaMaxWidth}) `
        : ''
      return `${widthGenerated}${size}`
    })
    const formattedSetsBreakpoints = sizesGenerated.join(',')
    setBreaktpointsImg(formattedSetsBreakpoints)
  }

  const handle = () => {
    handleSetsImgAttributeFormated()
    handleBreakpointsImgAttributeFormated()
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
