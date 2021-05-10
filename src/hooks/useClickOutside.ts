import { useEffect, useState } from "react";

interface IuseClickOutside {
  /**
   * Element's Ref whose musnt apply click outside
   */
  ref: any;
  /**
   * Element's Class whose musnt apply click outside
   */
  elementsDontApplyClickOutside?: string[];
  /**
   * Function to do actions on Click outside
   */
  handleDoAction: () => void;
}

const useClickOutside = ({
  ref,
  elementsDontApplyClickOutside = [],
  handleDoAction,
}: IuseClickOutside) => {
  const [isClickOutside, setIsClickOutside] = useState(false);

  const targetClassListArray = (target: any): any[] =>
    Array.from(target?.classList);

  const isClickOnOtherElementOfConditions = (target: any): boolean =>
    targetClassListArray(target).some((elementClass: any) =>
      elementsDontApplyClickOutside?.includes(elementClass)
    );

  const isClickOnSelfElement = (target: any): boolean =>
    ref?.current?.contains(target);

  const handleClickOutside = (e: any): void => {
    if (
      !isClickOnSelfElement(e.target) &&
      !isClickOnOtherElementOfConditions(e.target)
    ) {
      setIsClickOutside(true);
    }
  };

  useEffect(() => {
    if (isClickOutside) {
      handleDoAction();
      setIsClickOutside(false);
    }
  }, [isClickOutside]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return {
    isClickOutside,
    setIsClickOutside,
  };
};

export default useClickOutside;
