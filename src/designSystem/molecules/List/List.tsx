import React from "react";
import { IGeneralProps } from "../../../core/domain/interfaces/IGeneralProps";
import { Left, Right } from "../../../styles/utilities/flex";
import {
  SubtitleContainer,
  TitleContainer,
} from "../../../styles/utilities/text";
import {
  ListItemChild,
  ListItemWrapper,
  ListWrapper,
} from "./List.styles";

export interface IList extends IGeneralProps {
  /**
   * Content
   */
  children: React.ReactNode;
}

const List = ({ children, ...args }: IList) => {
  return <ListWrapper {...args}>{children}</ListWrapper>;
};

List.Item = ({
  children,
  avatar,
  title,
  description,
}: {
  children?: React.ReactNode;
  avatar?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
}) => (
  <ListItemWrapper>
    <Left>
      <ListItemChild>{avatar}</ListItemChild>
      <ListItemChild>
        <TitleContainer>{title}</TitleContainer>
        <SubtitleContainer>{description}</SubtitleContainer>
      </ListItemChild>
    </Left>
    <Right>
      <ListItemChild>{children}</ListItemChild>
    </Right>
  </ListItemWrapper>
);

List.defaultProps = {
  shadow: "SMALL",
  border: "SMALL",
};

export default List;
