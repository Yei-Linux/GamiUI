import styled from "@emotion/styled";
import React from "react";

export interface TableStoriesProps {
  children: React.ReactNode;
  item: any;
  field: string;
}

const WrapperStories = styled.div`
  display: flex;
  border: 1px solid #f1f1f1;
`;

const TypeColumn = styled.div`
  text-transform: capitalize;
`;

const FirstColumn = styled(TypeColumn)`
  font-family: "Atlanta Corner Demo";
  width: 10%;
  padding-left: 15px;

  display: flex;
  align-items: center;
`;

const SecondColumn = styled(TypeColumn)`
  width: 90%;
  padding: 20px;
`;

const TableStories = ({ children, item, field }: TableStoriesProps) => {
  return (
    <WrapperStories>
      <FirstColumn>
        <p>{item[field]}</p>
      </FirstColumn>
      <SecondColumn>{children}</SecondColumn>
    </WrapperStories>
  );
};

export default TableStories;
