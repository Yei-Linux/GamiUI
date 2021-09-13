import React from 'react'
import Input from '../designSystem/atoms/Input'
import Switch from '../designSystem/atoms/Switch'
import Number from '../designSystem/atoms/Number'
import Password from '../designSystem/atoms/Password'
import TextArea from '../designSystem/atoms/TextArea'

import * as Yup from 'yup'
import Select from '../designSystem/atoms/Select'
import Radio from '../designSystem/atoms/Radio'
import { BooleanSchema, NumberSchema, ObjectSchema, StringSchema } from 'yup'
import { IFormItem, IRules } from '../designSystem/molecules/Form/FormItem'

interface IYupSchema {
  [key: string]: any
}

const REGEX__EMAIL =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

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
type TRulesInstance =
  | TStringSchema
  | TNumberSchema
  | TBooleanSchema
  | TObjectSchema

export interface IUseGenerateYupSchema {
  children: React.ReactNode
}

const useGenerateYupSchema = ({ children }: IUseGenerateYupSchema) => {
  const checkRules = (rules: IRules[], ruleInstance: TRulesInstance) => {
    let ruleInstanceToModify = ruleInstance

    rules.map(({ type, message, value = 0 }: IRules) => {
      if (type == 'required') {
        ruleInstanceToModify = ruleInstanceToModify.required(message)
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
      const childrenTypeOfChildren = childrenCast.props.children.type

      const { rules, name } = childrenCast.props as IFormItem

      if (!rules || rules == undefined) return

      let rule: TRulesInstance | null = null

      if ([Input, Password, TextArea].includes(childrenTypeOfChildren)) {
        rule = Yup.string()
      }

      if ([Number].includes(childrenTypeOfChildren)) {
        rule = Yup.number()
      }

      if ([Switch].includes(childrenTypeOfChildren)) {
        rule = Yup.boolean()
      }

      if ([Select, Radio].includes(childrenTypeOfChildren)) {
        rule = Yup.object()
      }

      if (!rule) return

      rule = checkRules(rules, rule)

      if (rule) yupSchema[name] = rule
    })

    return Yup.object().shape(yupSchema)
  }

  return { buildingYupSchema }
}

export default useGenerateYupSchema
