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

export const Basic = (args: any) => <Table {...args} />
Basic.args = {
  columns: [
    { title: 'Nombres', dataIndex: 'name' },
    { title: 'Edad', dataIndex: 'age' },
    { title: 'Direccion', dataIndex: 'address' },
    { title: 'Pais', dataIndex: 'country' },
  ],
  data: [
    { name: 'Pedro', age: '12', address: 'Jr Junior', country: 'USA' },
    { name: 'Pedro', age: '12', address: 'Jr Junior', country: 'USA' },
  ],
}

export const WithRender = (args: any) => <Table {...args} />
WithRender.args = {
  columns: [
    {
      title: 'Nombres',
      dataIndex: 'name',
      render: (name: string) => <RichText text={`[${name}](https://google.com?target=_blank)`} />,
    },
    { title: 'Edad', dataIndex: 'age' },
    { title: 'Direccion', dataIndex: 'address' },
    { title: 'Pais', dataIndex: 'country' },
  ],
  data: [
    { name: 'Pedro', age: '12', address: 'Jr Junior', country: 'USA' },
    { name: 'Pedro', age: '12', address: 'Jr Junior', country: 'USA' },
  ],
}
