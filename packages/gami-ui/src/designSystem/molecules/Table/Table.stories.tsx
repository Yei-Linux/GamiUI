import React from 'react'
import { Meta } from '@storybook/react'

import Table from '.'
import RichText from '../../atoms/RichText'

export default {
  title: 'Molecules/Table',
  component: Table,
  args: {},
  argTypes: {},
} as Meta

export const Basic = () => {
  const columns = [
    { title: 'NOMBRES', dataIndex: 'name' },
    { title: 'EDAD', dataIndex: 'age' },
    { title: 'DIRECCION', dataIndex: 'address' },
    { title: 'PAIS', dataIndex: 'country' },
  ]
  const items = [
    { name: 'Pedro', age: '12', address: 'Jr Junior', country: 'USA' },
    { name: 'Pedro', age: '12', address: 'Jr Junior', country: 'USA' },
  ]

  return (
    <Table>
      <Table.Header columns={columns}>
        {(column) => <Table.Column as="th">{column.title}</Table.Column>}
      </Table.Header>
      <Table.Body items={items}>
        {(item, index) => (
          <Table.Row item={item} key={index}>
            {([cellKey, cellValue], index) => (
              <Table.Cell
                key={index}
                cellKey={cellKey}
                cellValue={`${cellValue}`}
                columns={columns}
              />
            )}
          </Table.Row>
        )}
      </Table.Body>
    </Table>
  )
}

export const WithRender = () => {
  const columns = [
    {
      title: 'Nombres',
      dataIndex: 'name',
      render: (name: string) => (
        <RichText text={`[${name}](https://google.com?target=_blank)`} />
      ),
    },
    { title: 'Edad', dataIndex: 'age' },
    { title: 'Direccion', dataIndex: 'address' },
    { title: 'Pais', dataIndex: 'country' },
  ]
  const items = [
    { name: 'Pedro', age: '12', address: 'Jr Junior', country: 'USA' },
    { name: 'Pedro', age: '12', address: 'Jr Junior', country: 'USA' },
  ]

  return (
    <Table>
      <Table.Header columns={columns}>
        {(column) => <Table.Column as="th">{column.title}</Table.Column>}
      </Table.Header>
      <Table.Body items={items}>
        {(item, index) => (
          <Table.Row item={item} key={index}>
            {([cellKey, cellValue], index) => (
              <Table.Cell
                key={index}
                cellKey={cellKey}
                cellValue={`${cellValue}`}
                columns={columns}
              />
            )}
          </Table.Row>
        )}
      </Table.Body>
    </Table>
  )
}

export const WithPagination = () => {
  const columns = [
    { title: 'NOMBRES', dataIndex: 'name' },
    { title: 'EDAD', dataIndex: 'age' },
    { title: 'DIRECCION', dataIndex: 'address' },
    { title: 'PAIS', dataIndex: 'country' },
  ]
  const items = [
    { name: 'Pedro', age: '12', address: 'Jr Junior', country: 'USA' },
    { name: 'Pedro', age: '12', address: 'Jr Junior', country: 'USA' },
  ]

  const handleChangePage = (page: number) => {
    console.log('test', page)
  }

  return (
    <Table>
      <Table.Header columns={columns} background={'#fbfbfb'}>
        {(column) => <Table.Column as="th">{column.title}</Table.Column>}
      </Table.Header>
      <Table.Body items={items}>
        {(item, index) => (
          <Table.Row item={item} key={index} background={'#fbfbfb'}>
            {([cellKey, cellValue], index) => (
              <Table.Cell
                key={index}
                cellKey={cellKey}
                cellValue={`${cellValue}`}
                columns={columns}
              />
            )}
          </Table.Row>
        )}
      </Table.Body>
      <Table.Footer>
        <Table.Pagination
          columns={columns.length}
          numberPages={6}
          initialPage={0}
          onChangePage={handleChangePage}
        />
      </Table.Footer>
    </Table>
  )
}
