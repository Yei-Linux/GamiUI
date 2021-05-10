import React, { useEffect, useState } from "react";
import { IGeneralProps } from "../../../core/domain/interfaces/IGeneralProps";
import { Left, Right } from "../../../styles/utilities/flex";
import { TitleContainer } from "../../../styles/utilities/text";
import Icon from "../../atoms/Icon";
import {
  ModalContainer,
  ModalContent,
  ModalDialog,
  ModalFooter,
  ModalHeader,
  ModalMask,
  ModalWrapper,
} from "./Modal.styles";

import { gsap } from "gsap";
import usePortal from "../../../hooks/usePortal";

interface IModal extends IGeneralProps {
  /**
   * Content Modal
   */
  children: React.ReactNode;
  /**
   * Header Modal
   */
  title: React.ReactNode;
  /**
   * Optional Footer
   */
  footer?: React.ReactNode;
  /**
   * Visible flag
   */
  visible: boolean;
  /**
   * Close Event
   */
  onClose: () => void;
}

const Header = ({
  title,
  handleClose,
}: {
  title: React.ReactNode;
  handleClose: () => any;
}) => (
  <ModalHeader>
    <Left>
      <TitleContainer>{title}</TitleContainer>
    </Left>
    <Right>
      <Icon fill="#7868e6" name="close" size="15px" onClick={handleClose} />
    </Right>
  </ModalHeader>
);

const Footer = ({ footer }: { footer: React.ReactNode }) => (
  <ModalFooter>{footer}</ModalFooter>
);

const Modal = ({
  children,
  title,
  footer,
  visible,
  onClose,
  ...args
}: IModal) => {
  let refDialog: any = null;
  let refContent: any = null;

  const {} = usePortal({ destinyElement: document.body });
  const [modalTween] = useState(gsap.timeline({ paused: true }));

  useEffect(() => {
    modalTween
      .to(refDialog, 0.35, { y: 0, autoAlpha: 1 })
      .from(
        refContent?.children,
        0.35,
        { y: 15, opacity: 0, stagger: 0.1 },
        "-=0.15"
      )
      .reverse();
  }, []);

  useEffect(() => {
    modalTween.reversed(!visible);
  }, [visible]);

  const handleCloseGsap = () => {
    modalTween.reverse();
    gsap.delayedCall(modalTween.duration(), onClose);
  };

  return (
    <ModalWrapper visible={visible}>
      <ModalMask />
      <ModalDialog ref={(e) => (refDialog = e)}>
        <ModalContainer {...args} ref={(e) => (refContent = e)}>
          <Header title={title} handleClose={handleCloseGsap} />
          <ModalContent>{children}</ModalContent>
          <Footer footer={footer} />
        </ModalContainer>
      </ModalDialog>
    </ModalWrapper>
  );
};

Modal.defaultProps = {
  shadow: "SMALL",
  border: "SMALL",
};

export default Modal;
