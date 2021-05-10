import styled from "@emotion/styled";
import { colorLight } from "../../../styles/theme";
import { twinStyles } from "../../../styles/utilities/twinStyles";

export const ModalWrapper = styled.div<{ visible: boolean }>`
  display: ${(props) => (props.visible ? "flex" : "none")};
`;

export const ModalMask = styled.div`
  background-color: rgba(0, 0, 0, 0.45);
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1000;
  height: 100%;
  position: fixed;
`;

export const ModalDialog = styled.div`
  bottom: 0;
  left: 0;
  outline: 0;
  overflow: auto;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;

  ${(props: any) => twinStyles(props)};
`;

export const ModalContainer = styled.div<{
  border?: string;
  shadow?: string;
}>`
  min-width: 500px;
  height: fit-content;
  background-color: ${colorLight.neutral.nine};
  ${(props: any) => twinStyles(props)};
`;

export const ModalHeader = styled.div`
  width: 100%;
  min-height: 50px;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${colorLight.neutral.six};
`;

export const ModalFooter = styled.div`
  width: 100%;
  min-height: 50px;
  padding: 1rem;
  display: flex;
  align-items: center;
  border-top: 1px solid ${colorLight.neutral.six};
`;

export const ModalContent = styled.div`
  width: 100%;
  min-height: 50px;
  padding: 1rem;
`;
