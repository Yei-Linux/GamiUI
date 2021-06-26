import React from 'react'
import { Meta } from '@storybook/react'

import Survey from '.'
import { IQuestionSurvey } from './Survey'
import { colorLight } from '../../../styles/theme'
import { SAMPLE_CODE } from './constants'

export default {
  title: 'Molecules/Survey',
  component: Survey,
  args: { ...Survey.defaultProps },
  argTypes: {},
} as Meta

export const Basic = (args: any) => {
  const { questions } = args

  const onFinishSurvey = (value: any) => {
    console.log(value)
  }

  return (
    <Survey onFinish={onFinishSurvey}>
      {questions.map((question: IQuestionSurvey, index: number) => (
        <Survey.Item
          questionIndex={index}
          question={question.question}
          option={question.option}
          key={index}
          isLastQuestion={index === questions.length - 1}
        />
      ))}
    </Survey>
  )
}
Basic.args = {
  questions: [
    {
      question: {
        question: '¿Cúal es la diferencia entre mutable e inmutable',
        description: '',
        iconId: '',
      },
      option: {
        type: 'ALTENATIVES',
        alternatives: [
          {
            label: 'Is the Answer one',
            value: 'one',
            icon: {
              name: 'facebook',
              fill: colorLight.primary.one,
            },
          },
          {
            label: 'Is the Answer two',
            value: 'two',
            icon: {
              name: 'facebook',
              fill: colorLight.primary.one,
            },
          },
          {
            label: 'Is the Answer three',
            value: 'three',
            icon: {
              name: 'facebook',
              fill: colorLight.primary.one,
            },
          },
        ],
      },
    },
    {
      question: {
        question: '¿Cúal es la diferencia entre mutable e inmutable',
        description: '',
        iconId: '',
      },
      option: {
        type: 'TEXTAREA',
        textarea: {
          value: '',
          placeholder: 'Escribe aca tu respuesta',
        },
      },
    },
    {
      question: {
        question: '¿Cúal es la diferencia entre mutable e inmutable',
        description: '',
        iconId: '',
      },
      option: {
        type: 'CODE',

        code: {
          initialCode: `function simpleArraySum(n, ar) {
            var sum=0;
            for(var i=0; i<n; i++){
              sum= sum + ar[i];
            }
            return sum;
          }
          function main() {
            var n = parseInt(readLine());
            var ar = readLine().split(' ');
            ar = ar.map(Number);
            var result = simpleArraySum(n, ar);
            process.stdout.write(result);
          }`,
          question: SAMPLE_CODE,
        },
      },
    },
  ],
}
