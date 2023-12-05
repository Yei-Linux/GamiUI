import { Optional } from 'core/domain/types/mixins'
import { useRef } from 'react'
import { transformFileData } from './helper'

export type IFileView = {
  id: string
  name: string
  extension: string
  size: number
  file: File
  url: string
}

export type IFileViewItem = Optional<
  IFileView,
  'file' | 'url' | 'size' | 'extension' | 'name'
>

export interface IUseFile {
  files: IFileViewItem[]
  setFiles: (value: IFileViewItem[]) => void
  isMultiple: boolean
}

/**
 * Generates a function comment for the given function body.
 *
 * @param {IUseFile} param - An object containing the necessary parameters for the function.
 * @param {Array<IFileViewItem>} param.files - The array of files.
 * @param {function} param.setFiles - The function to update the files array.
 * @param {boolean} param.isMultiple - A boolean value specifying whether multiple files can be added.
 * @returns {Object} - An object containing the files array, inputRef, and various handler functions.
 */
export const useFile = ({ files, setFiles, isMultiple }: IUseFile) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const addFile = (newFile: IFileViewItem) => {
    const isOnFileList = files.find(({ id }) => newFile.id === id)
    if (isOnFileList) return

    const filesToModify = isMultiple ? [...files, newFile] : [newFile]
    setFiles(filesToModify)
  }

  const removeFile = (idToRemove: string) => {
    if (!idToRemove) return

    const filesUpdated = files.filter(({ id }) => idToRemove !== id)
    setFiles(filesUpdated)

    if (inputRef.current) {
      inputRef.current.value = ''
    }
  }

  const handleListFilesSelected = () => {
    const filesInput = inputRef.current?.files

    if (filesInput === undefined) return
    if (filesInput === null) return

    const file = filesInput.item(0)
    if (!file) return

    const newFile = transformFileData(file)
    if (!newFile) return

    addFile(newFile)
  }

  const handleBrowseFiles = () => inputRef.current?.click()

  return {
    files,
    removeFile,
    inputRef,
    handleListFilesSelected,
    handleBrowseFiles,
    addFile,
  }
}
