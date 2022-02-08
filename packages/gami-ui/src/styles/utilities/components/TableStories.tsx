import styled from '@emotion/styled'
import React from 'react'

export interface TableStoriesProps {
  children: React.ReactNode
  item: any
  field: string
  labelStory?: string
}

const WrapperStories = styled.div`
  display: flex;
  border: 1px solid #f1f1f1;
  max-width: 500px;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(0.5px);
  -webkit-backdrop-filter: blur(0.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  margin-top: 1rem;
`

const TypeColumn = styled.div`
  text-transform: capitalize;
`

const FirstColumn = styled(TypeColumn)`
  width: 40%;
  padding-left: 15px;

  display: flex;
  align-items: center;
`

const SecondColumn = styled(TypeColumn)`
  width: 60%;
  padding: 20px;
`

const TableStories = ({
  children,
  item,
  field,
  labelStory,
}: TableStoriesProps) => {
  return (
    <WrapperStories>
      <FirstColumn>
        <p>{labelStory ?? item[field]}</p>
      </FirstColumn>
      <SecondColumn>{children}</SecondColumn>
    </WrapperStories>
  )
}

export default TableStories
