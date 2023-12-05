import { useState } from 'react'
import { IFileViewItem } from './useFile'
import { transformFileData } from './helper'

export interface IUseDrag {
  addFile: (newFile: IFileViewItem) => void
}

/**
 * Generates a function comment for the given function body in a markdown code block with the correct language syntax.
 *
 * @param {IUseDrag} options - An object containing the addFile function.
 * @param {React.DragEvent<HTMLDivElement>} options.addFile - The addFile function to be used in the function body.
 * @return {Object} - An object containing the handleDrag, handleDrop, and dragActive functions.
 */
export const useDrag = ({ addFile }: IUseDrag) => {
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
