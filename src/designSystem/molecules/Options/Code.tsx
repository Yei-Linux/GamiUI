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
      <Col spacing="sm" xs={12} sm={4} md={4} lg={4}>
        <S.CodeHeader className={classNames('flex', 'justify-between')}>
          <Title level="h3">Exercise:</Title>
        </S.CodeHeader>
        <S.QuestionCode dangerouslySetInnerHTML={{ __html: question }} />
      </Col>

      <Col spacing="sm" xs={12} sm={8} md={8} lg={8}>
        <S.Code>
          <S.CodeHeader className={classNames('flex', 'justify-between')}>
            <Title level="h3">Language: Javascript</Title>
            <RichText text="Change Theme" />
          </S.CodeHeader>
          <CodeEditor
            width="100%"
            height="450px"
            value={answer}
            defaultValueCode={initialCode}
            onChange={onChangeOption}
          />
          <S.CodeFooter>
            <Row justifyContent="flex-end">
              <Col spacing="sm" xs={12} sm={6} md={6} lg={6}>
                <Button
                  className={classNames('flex', 'justify-center')}
                  type="button"
                  width="md"
                  border="full"
                >
                  Run code ⚡
                </Button>
              </Col>
              <Col spacing="sm" xs={12} sm={6} md={6} lg={6}>
                <Button
                  className={classNames('flex', 'justify-center')}
                  variant="secondary"
                  type="button"
                  width="md"
                  border="full"
                >
                  Submit 🔥
                </Button>
              </Col>
            </Row>
          </S.CodeFooter>
        </S.Code>
      </Col>
    </Row>
  )
}

export default CodeAlternative
