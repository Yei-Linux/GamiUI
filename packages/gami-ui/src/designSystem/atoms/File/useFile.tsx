import { useRef } from 'react'

type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>

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

export const useFile = ({ files, setFiles, isMultiple }: IUseFile) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const formatFileSize = (fileSize: number) => {
    const fileSizeStr = `${fileSize}`

    if (fileSizeStr.length < 7) {
      return `${Math.round(+fileSize / 1024).toFixed(0)}kb`
    }

    return `${(Math.round(+fileSize / 1024) / 1000).toFixed(0)}MB`
  }

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

  const transformFileData = (file?: File) => {
    if (!file) return

    const [name, extension] = file.name.split('.')
    const size = file.size
    const newFile: IFileViewItem = {
      id: file.name,
      name,
      extension: extension.toLowerCase(),
      size,
      file,
      url: '',
    }

    return newFile
  }

  const handleBrowseFiles = () => {
    inputRef.current?.click()
  }

  return {
    files,
    formatFileSize,
    removeFile,
    inputRef,
    handleListFilesSelected,
    handleBrowseFiles,
    addFile,
    transformFileData,
  }
}
