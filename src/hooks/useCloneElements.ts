import React, { JSXElementConstructor, ReactElement } from "react";

interface IPropsOfElement {
  childrenConditionTypes: any[];
  props: any;
}

interface IAdvancedOptions {
  propsOfElement: IPropsOfElement[];
}

export interface IUseCloneElement {
  /**
   * Childrens to validate and clone
   */
  children: React.ReactNode;
  /**
   * Childrens's props to add on CloneElement
   */
  propsElement: any;
  /**
   * Max number childrens to validate
   */
  maxChildrenNumber: Number;
  /**
   * Max number childrens to validate
   */
  advancedOptions?: IAdvancedOptions;
  /**
   * Childrens's types to validate
   */
  childrenTypes: any[];
}

type childrenWithPropType =
  | ReactElement<any, string | JSXElementConstructor<any>>[]
  | null
  | undefined;

const useCloneElement = ({
  children,
  propsElement,
  maxChildrenNumber,
  advancedOptions = null,
  childrenTypes,
}: IUseCloneElement | any) => {
  const validators = (child: any, childrenTypes: any[]) =>
    React.isValidElement(child) && validatorChildrenTypes(child, childrenTypes);

  const configureAdvancedOptions = (child: any) => {
    if (advancedOptions) {
      const propsFound = advancedOptions?.propsOfElement.find((props: any) =>
        validators(child, props?.childrenConditionTypes)
      );
      return propsFound?.props ?? propsElement;
    }
    return propsElement;
  };

  const validatorChildren = (child: any) => {
    if (validators(child, childrenTypes))
      return React.cloneElement(child, configureAdvancedOptions(child));
  };

  const validatorChildrenTypes = (child: any, childrenTypes: any[]): boolean =>
    childrenTypes.includes(child.type);

  const validatorChildrenLength = () =>
    childrenWithProps!?.length > maxChildrenNumber;

  const runningChildrensAndShouldBeTypeOf = (
    children: any,
    childrenTypes: any[]
  ): any => children?.some((child: any) => validators(child, childrenTypes));

  const childrenWithProps: childrenWithPropType = React.Children.map(
    children,
    validatorChildren
  );

  return {
    runningChildrensAndShouldBeTypeOf,
    validatorChildrenLength,
    childrenWithProps,
  };
};

export default useCloneElement;
