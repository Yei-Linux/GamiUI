import React from "react";
import { IGeneralProps } from "../../../core/domain/interfaces/IGeneralProps";
import { SubtitleContainer, TitleContainer } from "../../../styles/utilities/text";
import {
  CardContent,
  CardCover,
  CardFooter,
  CardWrapper,
} from "./Card.styles";

export interface ICard extends IGeneralProps {
  /**
   * Content Card to show
   */
  children: React.ReactNode;
}

export const Card = ({ children, ...args }: ICard) => (
  <CardWrapper {...args}>{children}</CardWrapper>
);

Card.Cover = ({ children }: { children: React.ReactNode }) => (
  <CardCover>{children}</CardCover>
);

Card.Content = ({
  title,
  description,
}: {
  title: React.ReactNode;
  description: React.ReactNode;
}) => (
  <CardContent>
    <TitleContainer>{title}</TitleContainer>
    <SubtitleContainer>{description}</SubtitleContainer>
  </CardContent>
);

Card.Footer = ({ children }: { children: React.ReactNode }) => (
  <CardFooter>{children}</CardFooter>
);

Card.defaultProps = {
  shadow: "SMALL",
  border: "MEDIUM",
  width: "NORMAL",
  height: "NORMAL",
};

export default Card;
