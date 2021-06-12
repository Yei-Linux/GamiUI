import React from 'react'
import Col from '../../layouts/Col'
import Row from '../../layouts/Row'
import CodeEditor from '../CodeEditor'
import { CodeContainer, QuestionCodeContainer } from './Options.styles'

export interface CodeAlternativeProps {
  question: string
  initialCode?: string
}

const CodeAlternative = ({ question, initialCode }: CodeAlternativeProps) => {
  return (
    <Row>
      <Col spacing="sm" xs={12} sm={4} md={4} lg={4}>
        <QuestionCodeContainer dangerouslySetInnerHTML={{ __html: question }} />
      </Col>
      <Col spacing="sm" xs={12} sm={8} md={8} lg={8}>
        <CodeContainer>
          <CodeEditor
            width={'100%'}
            height={'600px'}
            defaultValueCode={initialCode}
          />
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
