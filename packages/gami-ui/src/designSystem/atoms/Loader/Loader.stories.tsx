import React, { useState } from 'react'
import { Meta } from '@storybook/react'

import Loader from '.'
import { useEffect } from '@storybook/addons'
import Table from 'designSystem/molecules/Table'
import RichText from '../RichText'
import Container from 'designSystem/layouts/Container'

export default {
  title: 'Atoms/Loader',
  component: Loader,
  args: {},
  argTypes: {},
} as Meta

export const Default = (args: any) => <Loader {...args} />
Default.args = {}

export const Points = (args: any) => <Loader {...args} />
Points.args = {
  type: 'points',
}

export const Spinner = (args: any) => <Loader {...args} />
Spinner.args = {
  type: 'spinner',
}

export const WithWrapper = () => {
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

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const id = setTimeout(() => {
      setIsLoading(false)
    }, 5000)

    return () => clearTimeout(id)
  }, [])

  return (
    <Container>
      <Loader.Wrapper
        minHeight="200px"
        behavior="none"
        loaderNode={<Loader type="points" />}
        isLoading={isLoading}
      >
        <Container>
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
        </Container>
      </Loader.Wrapper>
    </Container>
  )
}
