import { useState } from 'react'
import { IFileViewItem } from './useFile'

export interface IUseDrag {
  transformFileData: (file?: File) => IFileViewItem | undefined
  addFile: (newFile: IFileViewItem) => void
}

export const useDrag = ({ transformFileData, addFile }: IUseDrag) => {
  const [dragActive, setDragActive] = useState<boolean>(false)

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()

    const { type } = e

    setDragActive(['dragenter', 'dragover'].includes(type))
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    const files = e.dataTransfer.files
    if (!files) return

    const file = files.item(0)
    if (!file) return

    const newFile = transformFileData(file)
    if (!newFile) return

    addFile(newFile)
  }

  return { handleDrag, handleDrop, dragActive }
}
