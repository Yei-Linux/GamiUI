import { JSXElementConstructor } from 'react'

export interface IDynamicObject {
  [key: string]: string
}

export interface IDynamicObjectWithField {
  [key: string]: unknown
}

export type TDynamicFields = Record<string, unknown>

export type TJSXElements =
  | keyof JSX.IntrinsicElements
  | JSXElementConstructor<any>
