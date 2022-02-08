import React from 'react'
import TableStories from 'styles/utilities/components/TableStories'
import { DESIGN_TYPES as optionsStyle } from 'core/utils/constants'

export const getTemplate =
  (Component: React.ComponentType<any>): any =>
  (args: any) => {
    return <Component {...args} />
  }

export const getListTemplateTypes =
  (Component: React.ComponentType<any>): any =>
  ({
    variants: { field, examples },
    ...props
  }: {
    variants: any
    props: any
  }) =>
    examples.map(({ label, value, customProps }: any, index: number) => (
      <TableStories key={index} item={value} field={field} labelStory={label}>
        <Component {...{ ...props, ...customProps, ...{ [field]: value } }} />
      </TableStories>
    ))

export const getListTemplate =
  (Component: React.ComponentType<any>): any =>
  ({
    items,
    field,
    labelStory,
    ...args
  }: {
    items: any[]
    labelStory: any
    field: any
  }) =>
    items.map((item, index) => (
      <TableStories
        key={index}
        item={item}
        field={field}
        labelStory={labelStory ? `${labelStory} ${index + 1}` : undefined}
      >
        <Component {...args} {...item} />
      </TableStories>
    ))

export const stylesControl = {
  style: { control: 'object' },
  textAlign: { control: { type: 'select', options: optionsStyle.textAlign } },
  fontWeight: {
    control: { type: 'select', options: optionsStyle.fontWeight },
  },
  width: { control: { type: 'select', options: optionsStyle.width } },
  shadow: { control: { type: 'select', options: optionsStyle.shadow } },
  border: { control: { type: 'select', options: optionsStyle.border } },
  heigth: { control: { type: 'select', options: optionsStyle.height } },
}
