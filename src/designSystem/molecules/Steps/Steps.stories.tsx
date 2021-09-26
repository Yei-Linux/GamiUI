import React from 'react'
import { Meta } from '@storybook/react'

import Steps from '.'
import Button from '../../atoms/Button'
import Icon from '../../atoms/Icon'
import { theme } from 'styles/tokens'

export default {
  title: 'Molecules/Steps',
  component: Steps,
  argTypes: {},
} as Meta

export const Basic = () => (
  <Steps>
    <Steps.Body>
      <Steps.Item
        render={({ setCurrentStep }) => (
          <div>
            <p>Hola1</p>
            <Button onClick={() => setCurrentStep(1)}>Siguiente</Button>
          </div>
        )}
      />
      <Steps.Item
        render={({ setCurrentStep }) => (
          <div>
            <Icon
              onClick={() => setCurrentStep(0)}
              fill={theme.light.primary.jordyBlue}
              name="arrowLeft"
            />
            <p>Hola1</p>
            <Button onClick={() => setCurrentStep(2)}>Siguiente</Button>
          </div>
        )}
      />
      <Steps.Item
        render={({ setCurrentStep }) => (
          <div>
            <Icon
              onClick={() => setCurrentStep(1)}
              fill={theme.light.primary.jordyBlue}
              name="arrowLeft"
            />
            <p>Hola1</p>
          </div>
        )}
      />
    </Steps.Body>
  </Steps>
)
