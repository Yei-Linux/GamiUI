import classNames from 'classnames'
import React from 'react'

import Col from 'designSystem/layouts/Col'
import Row from 'designSystem/layouts/Row'
import Button from 'designSystem/atoms/Button'
import CodeEditor from 'designSystem/atoms/CodeEditor'
import RichText from 'designSystem/atoms/RichText'
import Title from 'designSystem/atoms/Title'

import { THandleChangeOption } from './Options'
import * as S from './Options.styles'

export interface ICodeAlternative {
  answer: string
  question: string
  initialCode?: string
  onChangeOption?: THandleChangeOption
}

const CodeAlternative = ({
  answer,
  question = '',
  initialCode = '',
  onChangeOption,
}: ICodeAlternative) => {
  return (
    <Row alignItems="normal">
      <Col spacing="none" xs={12} sm={4} md={4} lg={4}>
        <S.CodeHeader className={classNames('flex', 'justify-between')}>
          <Title level="h3">Exercise:</Title>
        </S.CodeHeader>
        <S.QuestionCode dangerouslySetInnerHTML={{ __html: question }} />
      </Col>

      <Col
        spacing="custom"
        customSpacing="xs:1rem 0px,sm:0 0 0 1rem"
        xs={12}
        sm={8}
        md={8}
        lg={8}
      >
        <S.Code>
          <S.CodeHeader className={classNames('flex', 'justify-between')}>
            <Title level="h3">Javascript</Title>
            <RichText text="Change Theme" />
          </S.CodeHeader>
          <CodeEditor
            width="100%"
            maxWidth="100%"
            height="450px"
            value={answer}
            defaultValueCode={initialCode}
            onChange={onChangeOption}
          />
          <S.CodeFooter className={classNames('flex', 'justify-between')}>
            <Button
              className={classNames('flex', 'justify-start')}
              type="button"
              width="fit"
              border="sm"
            >
              Run code ⚡
            </Button>
            <Button
              className={classNames('flex', 'justify-end')}
              variant="secondary"
              type="button"
              width="fit"
              border="sm"
            >
              Submit 🔥
            </Button>
          </S.CodeFooter>
        </S.Code>
      </Col>
    </Row>
  )
}

export default CodeAlternative
