import styled from '@emotion/styled'
import React from 'react'

export interface TableStoriesProps {
  children: React.ReactNode
  item: any
  field: string
  labelStory?: string
  style?: React.CSSProperties
}

const WrapperStories = styled.div`
  display: flex;
  border: 1px solid #f1f1f1;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 10px 10px 0 rgb(31 38 135 / 17%);
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
  padding-left: 15px;

  display: flex;
  align-items: center;
`

const SecondColumn = styled(TypeColumn)`
  padding: 20px;
`

const TableStories = ({
  children,
  item,
  field,
  labelStory,
  style = {},
}: TableStoriesProps) => {
  return (
    <WrapperStories style={style}>
      <FirstColumn>
        <p>{labelStory ?? item[field]}</p>
      </FirstColumn>
      <SecondColumn>{children}</SecondColumn>
    </WrapperStories>
  )
}

TableStories.displayName = 'TableStories'

export default TableStories
