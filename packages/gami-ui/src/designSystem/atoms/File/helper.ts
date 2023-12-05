import { IFileViewItem } from './useFile'

/**
 * Converts a URL to a File object.
 *
 * @param {string} url - The URL to convert.
 * @return {Promise<Object>} An object containing the converted File object with properties such as file, size, extension, and name. If an error occurs, undefined is returned.
 */
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

/**
 * Transforms an array of `IFileViewItem` objects by applying certain conditions and returns the transformed array.
 *
 * @param {IFileViewItem[]} value - The input array of `IFileViewItem` objects.
 * @return {IFileViewItem[]} - The transformed array of `IFileViewItem` objects.
 */
export const transformDefaultValues = async (value: IFileViewItem[]) => {
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

/**
 * Formats a file size into human-readable format.
 *
 * @param {number} fileSize - The size of the file in bytes.
 * @return {string} - The formatted file size.
 */
export const formatFileSize = (fileSize: number) => {
  const fileSizeStr = `${fileSize}`

  if (fileSizeStr.length < 7) {
    return `${Math.round(+fileSize / 1024).toFixed(0)}kb`
  }
  return `${(Math.round(+fileSize / 1024) / 1000).toFixed(0)}MB`
}

/**
 * Transforms the file data into a new file object.
 *
 * @param {File} file - The file to be transformed.
 * @return {IFileViewItem} The transformed file object.
 */
export const transformFileData = (file?: File) => {
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
