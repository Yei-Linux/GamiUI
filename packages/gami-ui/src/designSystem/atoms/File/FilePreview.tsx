import React, { useEffect, useRef } from 'react'
import * as S from './File.styles'

export interface IFilePreview {
  fileName: string
  extension: string
  file: File
  withPreview: boolean
}

const ImagePreview = ({
  file,
}: Omit<IFilePreview, 'fileName' | 'extension' | 'withPreview'>) => {
  const imageRef = useRef<HTMLImageElement | null>(null)

  const handlePreview = (
    file: File,
    refElement: React.MutableRefObject<HTMLImageElement | null>
  ) => {
    if (!refElement) return

    const url: string = URL.createObjectURL(file)

    const target = refElement.current

    if (!target) return

    target.src = url
  }

  useEffect(() => {
    handlePreview(file, imageRef)
  }, [])

  return <S.FileImage width={30} height={30} ref={imageRef} />
}

export const FilePreview = ({ extension, file, withPreview }: IFilePreview) => {
  const imagesExtensions = ['jpg', 'jpeg', 'png', 'PNG']

  return (
    <S.FilePreview>
      {!imagesExtensions.includes(extension) || !withPreview ? (
        <S.FileTypeStyled padding="11px">{extension}</S.FileTypeStyled>
      ) : (
        <ImagePreview file={file} />
      )}
    </S.FilePreview>
  )
}
