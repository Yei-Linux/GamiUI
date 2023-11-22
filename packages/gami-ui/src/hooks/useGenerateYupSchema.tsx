import React from 'react'

import Input from '../designSystem/atoms/Input'
import Number from '../designSystem/atoms/Number'
import Password from '../designSystem/atoms/Password'
import TextArea from '../designSystem/atoms/TextArea'
import Select from '../designSystem/atoms/Select'
import Radio from '../designSystem/atoms/Radio'

import * as Yup from 'yup'
import { BooleanSchema, NumberSchema, ObjectSchema, StringSchema } from 'yup'
import { IRules } from '../designSystem/molecules/Form/FormItemTemplate'
import File from 'designSystem/atoms/File'
import ColorPicker from 'designSystem/atoms/ColorPicker'
import DatePicker from 'designSystem/atoms/DatePicker'
import { OptionalArraySchema } from 'yup/lib/array'
import { AnyObject } from 'yup/lib/types'
import {
  FormCustomField,
  TFormCustomField,
} from 'designSystem/molecules/Form/FormCustomField'
import { IFormItem } from 'designSystem/molecules/Form/FormItem'

interface IYupSchema {
  [key: string]: any
}

const REGEX__EMAIL =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

type TStringSchema = StringSchema<
  string | undefined,
  Record<string, any>,
  string | undefined
>
type TNumberSchema = NumberSchema<
  number | undefined,
  Record<string, any>,
  number | undefined
>
type TBooleanSchema = BooleanSchema<
  boolean | undefined,
  Record<string, any>,
  boolean | undefined
>
type TObjectSchema = ObjectSchema<any, any, any, any>
type TArraySchema = OptionalArraySchema<
  Yup.AnySchema<any, any, any>,
  AnyObject,
  any[] | undefined
>
type TRulesInstance =
  | TStringSchema
  | TNumberSchema
  | TBooleanSchema
  | TObjectSchema
  | TArraySchema

export interface IUseGenerateYupSchema {
  children: React.ReactNode
}

const useGenerateYupSchema = ({ children }: IUseGenerateYupSchema) => {
  const checkRules = (
    rules: IRules[],
    ruleInstance: TRulesInstance,
    name: string
  ) => {
    let ruleInstanceToModify = ruleInstance

    rules.forEach(({ type, message, value = 0, fn }: IRules) => {
      if (type === 'custom' && fn) {
        ruleInstanceToModify = ruleInstanceToModify.test(
          `custom-validation-${name}`,
          message,
          (value, context) => fn(value, context.parent)
        )
      }

      if (type == 'required') {
        ruleInstanceToModify = ruleInstanceToModify.required(message)
      }
      if (type == 'minLength') {
        ruleInstanceToModify = (ruleInstanceToModify as TArraySchema).min(
          value,
          message
        )
      }
      if (type == 'maxLength') {
        ruleInstanceToModify = (ruleInstanceToModify as TArraySchema).max(
          value,
          message
        )
      }
      if (type == 'email') {
        ruleInstanceToModify = (ruleInstanceToModify as TStringSchema).matches(
          REGEX__EMAIL
        )
      }
      if (type == 'maxNumber') {
        ruleInstanceToModify = (ruleInstanceToModify as TNumberSchema).max(
          value,
          message
        )
      }

      if (type == 'minNumber') {
        ruleInstanceToModify = (ruleInstanceToModify as TNumberSchema).min(
          value,
          message
        )
      }
    })

    return ruleInstanceToModify
  }

  const buildingYupSchema = (): ObjectSchema<any, any, any> => {
    const yupSchema: IYupSchema = {}

    React.Children.map(children, (child: React.ReactNode) => {
      const childrenCast = child as React.ReactElement
      const childrenTypeOfChildren = childrenCast.props.children?.type
      const childrenPropsOfChildren = childrenCast.props.children?.props

      if (!childrenTypeOfChildren) return

      const { rules, name } = childrenCast.props as IFormItem

      if (!rules || rules == undefined) return

      let rule: TRulesInstance | null = null

      if (
        FormCustomField === childrenTypeOfChildren &&
        childrenPropsOfChildren
      ) {
        const { type } = childrenPropsOfChildren
        const typeCasted = type as TFormCustomField
        rule = Yup[typeCasted]()
      }

      if (
        [Input, Password, TextArea, ColorPicker, DatePicker].includes(
          childrenTypeOfChildren
        )
      ) {
        rule = Yup.string()
      }

      if ([Number].includes(childrenTypeOfChildren)) {
        rule = Yup.number()
      }

      if ([Select, Radio].includes(childrenTypeOfChildren)) {
        rule = Yup.object()
      }

      if ([File].includes(childrenTypeOfChildren)) {
        rule = Yup.array()
      }

      if (!rule) return

      rule = checkRules(rules, rule, name)

      if (rule) yupSchema[name] = rule
    })

    const schema = Yup.object().shape(yupSchema)
    return schema
  }

  return { buildingYupSchema }
}

export default useGenerateYupSchema
