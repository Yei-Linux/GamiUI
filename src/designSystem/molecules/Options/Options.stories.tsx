import React from 'react'
import { Meta } from '@storybook/react'

import Options from '.'
import { SAMPLE_CODE } from '../Survey/constants'
import { theme } from 'styles/tokens'

export default {
  title: 'Molecules/Options',
  component: Options,
  args: {},
  argTypes: {},
} as Meta

export const Basic = (args: any) => <Options {...args} />
Basic.args = {
  type: 'ALTENATIVES',
  alternatives: [
    {
      label: 'Is the Answer one',
      value: 'one',
      icon: {
        name: 'facebook',
        fill: theme.light.primary.jordyBlue,
      },
    },
    {
      label: 'Is the Answer two',
      value: 'two',
      icon: {
        name: 'facebook',
        fill: theme.light.primary.jordyBlue,
      },
    },
    {
      label: 'Is the Answer three',
      value: 'three',
      icon: {
        name: 'facebook',
        fill: theme.light.primary.jordyBlue,
      },
    },
  ],
}

export const OpenQuestion = (args: any) => <Options {...args} />
OpenQuestion.args = {
  type: 'TEXTAREA',
  textarea: {
    value: '',
    placeholder: 'Escribe aca tu respuesta',
  },
}

export const CodeQuestion = (args: any) => <Options {...args} />
CodeQuestion.args = {
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
}
