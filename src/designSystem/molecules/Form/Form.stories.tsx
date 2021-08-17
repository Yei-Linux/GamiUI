import { Meta } from '@storybook/react'
import { stylesControl } from '../../../core/helpers/storybook.helper'

import Form from '.'
import React from 'react'
import Input from '../../atoms/Input'
import Password from '../../atoms/Password'
import Number from '../../atoms/Number'
import TextArea from '../../atoms/TextArea'
import Switch from '../../atoms/Switch'
import Select from '../../atoms/Select'
import Radio from '../../atoms/Radio'
import Button from '../../atoms/Button'
import Icon from '../../atoms/Icon'

export default {
  title: 'Molecules/Form',
  component: Form,
  args: { ...Form.defaultProps },
  argTypes: {
    ...stylesControl,
  },
} as Meta

export const Basic = () => (
  <Form
    onSubmitForm={(values: any) => {
      console.log(values)
    }}
  >
    <Form.Item
      rules={[{ type: 'required', message: 'Campo requerido' }]}
      label="Nombres"
      name="names"
    >
      <Input placeholder="Ingresa tus nombres" />
    </Form.Item>
    <Form.Item
      rules={[{ type: 'required', message: 'Campo requerido' }]}
      label="Contraseña"
      name="password"
    >
      <Password placeholder="Ingresa tu contraseña" />
    </Form.Item>
    <Form.Item
      rules={[{ type: 'required', message: 'Campo requerido' }]}
      label="Celular"
      name="phone"
    >
      <Number placeholder="Ingresa tu celular" />
    </Form.Item>
    <Form.Item
      rules={[{ type: 'required', message: 'Campo requerido' }]}
      label="Comentario"
      name="comment"
    >
      <TextArea placeholder="Ingresa tu comentario" />
    </Form.Item>
    <Form.Item
      rules={[{ type: 'required', message: 'Campo requerido' }]}
      label="Activar Notificaciones"
      name="isActive"
    >
      <Switch defaultChecked={false} />
    </Form.Item>
    <Form.Item
      rules={[{ type: 'required', message: 'Campo requerido' }]}
      label="Elige un pais"
      name="country"
    >
      <Select
        placeholder="Type your option"
        options={[
          { value: 'chocolate', label: 'Chocolate' },
          { value: 'strawberry', label: 'Strawberry' },
          { value: 'vanilla', label: 'Vanilla' },
        ]}
      />
    </Form.Item>
    <Form.Item
      rules={[{ type: 'required', message: 'Campo requerido' }]}
      label="Elige tu genero"
      name="gender"
    >
      <Radio>
        <Radio.Item isChecked value="one">
          A
        </Radio.Item>
        <Radio.Item value="two">B</Radio.Item>
        <Radio.Item value="three">C</Radio.Item>
      </Radio>
    </Form.Item>
    <Form.Item name="isActive">
      <Button type="primary" border="ROUNDED" preffix={<Icon name="submit" />}>
        Submit
      </Button>
    </Form.Item>
  </Form>
)
