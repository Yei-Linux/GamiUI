import React, { useState, useEffect } from 'react'
import { TOnChangeFormItem } from '../Input/Input'
import Title from '../Title'
import * as S from './File.styles'
import { FilePreview } from './FilePreview'
import { useDrag } from './useDrag'
import { IFileViewItem, useFile } from './useFile'

export interface IFile {
  onChangeFormItem?: TOnChangeFormItem
  value?: IFileViewItem[]
  /**
   * By default IsMultiple allows load multiple files
   */
  isMultiple?: boolean
  withPreview?: boolean
}

const FileComponent = ({
  onChangeFormItem,
  withPreview = false,
  isMultiple = true,
  value = [],
}: IFile) => {
  const convertUrlToFile = async (url: string) => {
    try {
      const headers = new Headers()
      headers.append('Access-Control-Allow-Origin', '*')
      headers.append('cache-control', 'no-cache')
      headers.append('pragma', 'no-cache')

      const response = await fetch(url, {
        method: 'GET',
        headers,
      })

      const blob = await response.blob()
      const file = new File([blob], 'myFile', { type: blob.type })
      const [, extension] = blob.type.split('/')

      const obj = {
        file,
        size: file.size,
        extension,
        name: file.name,
      }

      return obj
    } catch (error) {
      return
    }
  }

  const transformDefaultValues = async (value: IFileViewItem[]) => {
    const defaultValues = []

    for (const item of value) {
      if (item.file) {
        defaultValues.push(item)
        continue
      }

      if (!item.url && !item.file) continue
      if (!item.url) {
        defaultValues.push(item)
        continue
      }

      const file = await convertUrlToFile(item.url)
      if (!file) continue
      defaultValues.push({
        ...item,
        ...file,
      })
    }

    return defaultValues
  }

  const [files, setFiles] = useState<IFileViewItem[]>([])

  const updateDefault = async () => {
    const values = await transformDefaultValues(value)
    setFiles(values)
  }

  useEffect(() => {
    updateDefault()
  }, [value])

  const {
    formatFileSize,
    removeFile,
    inputRef,
    handleListFilesSelected,
    handleBrowseFiles,
    addFile,
    transformFileData,
  } = useFile({
    files: (files as any) == '' || !files ? [] : files,
    setFiles: (file) => onChangeFormItem?.(file),
    isMultiple,
  })

  const { handleDrag, handleDrop, dragActive } = useDrag({
    transformFileData,
    addFile,
  })

  return (
    <S.FileWrapper>
      {!!files.length && (
        <S.FileList>
          {files.map(({ name, extension, size, id, file }) => (
            <S.FileItem key={id}>
              <S.FileDetails>
                {file && name && extension && (
                  <FilePreview
                    fileName={name}
                    extension={extension}
                    file={file}
                    withPreview={withPreview}
                  />
                )}

                <Title
                  level="h4"
                  fontWeight="semibold"
                >{`${name}.${extension}`}</Title>
              </S.FileDetails>
              <S.FileSize>
                {size && (
                  <Title level="h4" fontWeight="normal">
                    {formatFileSize(size)}
                  </Title>
                )}
                <S.RemoveFileItem
                  padding="7px"
                  variant="primary"
                  rounded="full"
                  onClick={() => removeFile(id)}
                >
                  <S.Remove name="close" />
                </S.RemoveFileItem>
              </S.FileSize>
            </S.FileItem>
          ))}
        </S.FileList>
      )}

      <S.File>
        <S.InputFile
          onChange={handleListFilesSelected}
          ref={inputRef}
          type="file"
        />

        <S.FilePlus
          padding="7px"
          variant="primary"
          rounded="full"
          onClick={handleBrowseFiles}
        >
          <S.Plus size="25px" name="plus" color="white" />
        </S.FilePlus>

        <S.DragZone onDragEnter={handleDrag}>
          <S.DragText fontWeight="semibold" level="h4" textAlign="center">
            Drag files here
          </S.DragText>

          {dragActive && (
            <S.DragPlaceholder
              id="drag-file-element"
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            />
          )}
        </S.DragZone>
      </S.File>
    </S.FileWrapper>
  )
}

export default FileComponent
