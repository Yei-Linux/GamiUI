import React from "react";
import ReactDOM from "react-dom";

export interface IUsePortalProps {
  /**
   * Destiny Element of Portal
   */
  destinyElement: any;
}

const usePortal = ({ destinyElement }: IUsePortalProps) => {
  const Portal = ({ children }: { children: React.ReactNode }) =>
    destinyElement ? ReactDOM.createPortal(children, destinyElement) : null;

  return { Portal };
};

export default usePortal;
