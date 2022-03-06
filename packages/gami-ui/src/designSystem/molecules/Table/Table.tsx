import React from 'react'
import { IGeneralProps } from 'core/domain/interfaces/IGeneralProps'
import { IDynamicObjectWithField } from 'core/domain/interfaces/common'
import { getGenericPropStyles } from 'styles/utilities/genericPropStyles'

import * as S from './Table.styles'
import RichText from 'designSystem/atoms/RichText'
import { cls } from 'core/utils/cls'

interface IColumn {
  title: string
  dataIndex: string
  render?: (props: string) => React.ReactNode
}

export interface ITable extends IGeneralProps {
  columns: IColumn[]
  data: IDynamicObjectWithField[]
}

const Table = ({ columns, data, ...genericsProps }: ITable) => {
  const findRenderByColumn = (key: string, value: string) => {
    const column: IColumn | undefined = columns.find(
      ({ dataIndex }) => dataIndex == key
    )
    return column?.render ? column?.render(value) : <RichText text={value} />
  }

  return (
    <S.Table
      className={cls(genericsProps?.className ?? '')}
      {...getGenericPropStyles(genericsProps)}
    >
      <S.TableContainer>
        <S.TableHeader>
          <S.TableHeaderRow>
            {columns.map((column: IColumn, index: number) => (
              <S.TableHeaderColumn key={index}>
                {column.title}
              </S.TableHeaderColumn>
            ))}
          </S.TableHeaderRow>
        </S.TableHeader>

        <S.TableBody>
          {data.map((row: any, index: number) => (
            <S.TableBodyRow key={index}>
              {Object.keys(row).map((column: any, index: number) => (
                <S.TableBodyColumn key={index}>
                  {findRenderByColumn(column, row[column])}
                </S.TableBodyColumn>
              ))}
            </S.TableBodyRow>
          ))}
        </S.TableBody>
      </S.TableContainer>
    </S.Table>
  )
}

Table.displayName = 'Table'

export default Table
