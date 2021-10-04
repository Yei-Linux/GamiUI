import React, { JSXElementConstructor, ReactElement } from 'react'

interface IPropsOfElement {
  childrenConditionTypes: any[]
  props: any
}

interface IAdvancedOptions {
  propsOfElement: IPropsOfElement[]
}

interface IAddIndexProp {
  hasConfig?: boolean
  fieldPropName?: string
}

export interface IUseCloneElement {
  /**
   * Childrens to validate and clone
   */
  children: React.ReactNode
  /**
   * Childrens's props to add on CloneElement
   */
  propsElement?: any
  /**
   * Max number childrens to validate
   */
  maxChildrenNumber: number
  /**
   * Max number childrens to validate
   */
  advancedOptions?: IAdvancedOptions
  /**
   * Childrens's types to validate
   */
  childrenTypes: any[]
  /**
   * Add index prop
   */
  addIndexPropOnItem?: IAddIndexProp
}

type childrenWithPropType =
  | ReactElement<any, string | JSXElementConstructor<any>>[]
  | null
  | undefined

const useCloneElement = ({
  children,
  propsElement = {},
  maxChildrenNumber,
  advancedOptions = null,
  childrenTypes = [],
  addIndexPropOnItem = null,
}: IUseCloneElement | any) => {
  const validators = (child: any, childrenTypes: any[]) =>
    React.isValidElement(child) && childrenTypes.length == 0
      ? true
      : validatorChildrenTypes(child, childrenTypes)

  const configureAdvancedOptions = (child: any) => {
    if (advancedOptions) {
      const propsFound = advancedOptions?.propsOfElement.find(
        (props: IPropsOfElement) =>
          validators(child, props?.childrenConditionTypes)
      )
      return propsFound?.props ?? { ...child.props, ...propsElement }
    }
    return { ...child.props, ...propsElement }
  }

  const addIndexProps = (child: any, index: number) => {
    const props = configureAdvancedOptions(child)
    if (addIndexPropOnItem?.hasConfig && addIndexPropOnItem?.fieldPropName) {
      return { [addIndexPropOnItem.fieldPropName]: index, ...props }
    }
    return props
  }

  const validatorChildren = (child: any, index: number) => {
    if (validators(child, childrenTypes)) {
      return React.cloneElement(child, addIndexProps(child, index))
    }

    return null
  }

  const validatorChildrenTypes = (child: any, childrenTypes: any[]): boolean =>
    childrenTypes.includes(child.type)

  const validatorChildrenLength = (childrenWithProps: any) =>
    childrenWithProps?.length > maxChildrenNumber

  const runningChildrensAndShouldBeTypeOf = (
    children: any,
    childrenTypes: any[]
  ): any => children?.some((child: any) => validators(child, childrenTypes))

  const childrenWithProps: childrenWithPropType = React.Children.map(
    children,
    validatorChildren
  )

  return {
    runningChildrensAndShouldBeTypeOf,
    validatorChildrenLength,
    childrenWithProps,
  }
}

export default useCloneElement
