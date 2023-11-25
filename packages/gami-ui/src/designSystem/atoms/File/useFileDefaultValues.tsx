import { useEffect, useState } from 'react'
import { transformDefaultValues } from './helper'
import { IFileViewItem } from './useFile'

export type TUseFileDefaultValues = {
  value: IFileViewItem[]
}
/**
 * Generates the default values for the file based on the provided value.
 *
 * @param {TUseFileDefaultValues} value - The value used to generate the default values.
 * @return {{ files: IFileViewItem[] }} The generated default values for the file.
 */
export const useFileDefaultValues = ({ value }: TUseFileDefaultValues) => {
  const [files, setFiles] = useState<IFileViewItem[]>([])
  const updateDefault = async () => {
    const values = await transformDefaultValues(value)
    setFiles(values)
  }

  useEffect(() => {
    updateDefault()
  }, [value])

  return { files }
}
