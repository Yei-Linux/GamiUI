import styled from "@emotion/styled";
import { colorLight } from "../../../styles/theme";
import { twinStyles } from "../../../styles/utilities/twinStyles";

export const ListWrapper = styled.ul<{
  border?: string;
  shadow?: string;
  width?: string;
  heigth?: string;
}>`
  width: fit-content;
  ${(props: any) => twinStyles(props)};
`;

export const ListItemWrapper = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${colorLight.neutral.six};
  padding: 1rem;
  list-style: none;
  width: 100%;
  min-width: 250px;
`;
export const ListItemChild = styled.div`
  margin-right: 1rem;
`;