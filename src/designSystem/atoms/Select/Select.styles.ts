import styled from "@emotion/styled";
import {
  SlideTopAnimation,
  SlideBottomAnimation,
} from "../../../styles/utilities/transitions";

export const SelectWrapper = styled.div`
  position: relative;
  width: fit-content;
`;

export const Selectinput = styled.div`
  width: fit-content;
`;

export const SelectOptionsWrapper = styled.div<{ isToggle: boolean }>`
  z-index: 99;
  overflow-y: auto;
  max-height: 200px;
  top: 50px;
  position: absolute;
  background: #fafafa;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.12);
  border-radius: 5px;
  padding: 0px 20px;
  width: 100%;

  ${(props) => (props.isToggle ? SlideTopAnimation : SlideBottomAnimation)}
`;

export const OptionWrapper = styled.div`
  padding: 10px 0px;
  &:hover {
    cursor: pointer;
  }
`;
