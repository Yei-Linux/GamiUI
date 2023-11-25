import React from 'react'
import Title from '../Title'
import * as S from './File.styles'
import { FilePreview } from './FilePreview'
import { useDrag } from './useDrag'
import { useFile } from './useFile'
import { TFileComponent } from './type'
import { formatFileSize } from './helper'
import { useFileDefaultValues } from './useFileDefaultValues'
import withDefaults from 'hocs/WithDefault'
import useCssHandle from 'hooks/useCssHandle'
import { cls } from 'core/utils/cls'

const FileC = ({
  onChangeFormItem,
  className,
  withPreview = false,
  isMultiple = true,
  value = [],
}: TFileComponent) => {
  const { handles } = useCssHandle({
    classes: {
      wrapper: ['wrapper'],
      listwrapper: ['listwrapper'],
      list__item: ['list__item'],
      item__details: ['item__details'],
      item__details__title: ['item__details__title'],
      item__size: ['item__size'],
      item__size__title: ['item__size__title'],
      item__size__remove: ['item__size__remove'],
      item__size__remove__close: ['item__size__remove__close'],

      input__container: ['input__container'],
      input: ['input'],
      input__plus: ['input__plus'],
      plus: ['plus'],
      dragzone: ['dragzone'],
      dragzone__text: ['dragzone__text'],
      dragzone__placeholder: ['dragzone__placeholder'],
    },
    componentPrefixCls: 'file',
    customPrexiCls: className,
  })
  const { files } = useFileDefaultValues({ value })
  const {
    removeFile,
    inputRef,
    handleListFilesSelected,
    handleBrowseFiles,
    addFile,
  } = useFile({
    files: (files as any) == '' || !files ? [] : files,
    setFiles: (file) => onChangeFormItem?.(file),
    isMultiple,
  })

  const { handleDrag, handleDrop, dragActive } = useDrag({
    addFile,
  })

  return (
    <S.FileWrapperStyled className={cls(handles.wrapper)}>
      {!!files.length && (
        <S.FileListStyled className={cls(handles.listwrapper)}>
          {files.map(({ name, extension, size, id, file }) => (
            <S.FileItemStyled key={id} className={cls(handles.list__item)}>
              <S.FileDetailsStyled className={cls(handles.item__details)}>
                {file && name && extension && (
                  <FilePreview
                    fileName={name}
                    extension={extension}
                    file={file}
                    withPreview={withPreview}
                  />
                )}

                <Title
                  className={cls(handles.item__details__title)}
                  level="h4"
                  fontWeight="semibold"
                >{`${name}.${extension}`}</Title>
              </S.FileDetailsStyled>
              <S.FileSizeStyled className={cls(handles.item__size)}>
                {size && (
                  <Title
                    level="h4"
                    fontWeight="normal"
                    className={cls(handles.item__size__title)}
                  >
                    {formatFileSize(size)}
                  </Title>
                )}
                <S.RemoveFileItemStyled
                  className={cls(handles.item__size__remove)}
                  padding="7px"
                  variant="primary"
                  rounded="full"
                  onClick={() => removeFile(id)}
                >
                  <S.RemoveStyled
                    name="close"
                    className={cls(handles.item__size__remove__close)}
                  />
                </S.RemoveFileItemStyled>
              </S.FileSizeStyled>
            </S.FileItemStyled>
          ))}
        </S.FileListStyled>
      )}

      <S.FileStyled className={cls(handles.input__container)}>
        <S.InputFileStyled
          className={cls(handles.input)}
          onChange={handleListFilesSelected}
          ref={inputRef}
          type="file"
        />

        <S.FilePlusStyled
          className={cls(handles.input__plus)}
          padding="7px"
          variant="primary"
          rounded="full"
          onClick={handleBrowseFiles}
        >
          <S.PlusStyled
            className={cls(handles.plus)}
            size="25px"
            name="plus"
            color="white"
          />
        </S.FilePlusStyled>

        <S.DragZoneStyled
          onDragEnter={handleDrag}
          className={cls(handles.dragzone)}
        >
          <S.DragTextStyled
            fontWeight="semibold"
            level="h4"
            textAlign="center"
            className={cls(handles.dragzone__text)}
          >
            Drag files here
          </S.DragTextStyled>

          {dragActive && (
            <S.DragPlaceholderStyled
              className={cls(handles.dragzone__placeholder)}
              id="drag-file-element"
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            />
          )}
        </S.DragZoneStyled>
      </S.FileStyled>
    </S.FileWrapperStyled>
  )
}

const defaultProps = {}

FileC.displayName = 'FileC'

type FileComponent<P> = React.NamedExoticComponent<P> & {
  defaultProps: P
}

export default withDefaults(
  FileC,
  defaultProps
) as FileComponent<TFileComponent>
