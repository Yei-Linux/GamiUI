import React from 'react'
import Col from '../../layouts/Col'
import Row from '../../layouts/Row'
import Spacer from '../../layouts/Spacer'
import Button from '../Button'
import CodeEditor from '../CodeEditor'
import RichText from '../RichText'
import Title from '../Title'
import {
  CodeContainer,
  CodeFooter,
  CodeHeader,
  QuestionCodeContainer,
} from './Options.styles'

export interface ICodeAlternativeProps {
  answer: any
  question: string
  initialCode?: string
  onChangeFormItem?: (value: any) => any
}

const CodeAlternative = ({
  answer,
  question,
  initialCode,
  onChangeFormItem,
}: ICodeAlternativeProps) => {
  return (
    <Row alignItems="normal">
      <Col spacing="sm" xs={12} sm={4} md={4} lg={4}>
        <CodeHeader>
          <Row justifyContent="space-between">
            <Title level="h3">Exercise:</Title>
          </Row>
        </CodeHeader>
        <QuestionCodeContainer dangerouslySetInnerHTML={{ __html: question }} />
      </Col>
      <Col spacing="sm" xs={12} sm={8} md={8} lg={8}>
        <CodeContainer>
          <CodeHeader>
            <Row justifyContent="space-between">
              <Title level="h3">Language: Javascript</Title>
              <RichText text="Change Theme" />
            </Row>
          </CodeHeader>
          <CodeEditor
            width={'100%'}
            height={'450px'}
            value={answer}
            defaultValueCode={initialCode}
            onChange={onChangeFormItem}
          />
          <CodeFooter>
            <Row justifyContent="flex-end">
              <Button width="MEDIUM" border="ROUNDED">
                Run code ⚡
              </Button>
              <Spacer direction="right" />
              <Button width="MEDIUM" border="ROUNDED">
                Submit 🔥
              </Button>
            </Row>
          </CodeFooter>
        </CodeContainer>
      </Col>
    </Row>
  )
}

CodeAlternative.defaultProps = {
  question: '',
  initalCode: '',
}

export default CodeAlternative
